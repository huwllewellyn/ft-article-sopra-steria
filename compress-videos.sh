#!/bin/bash

# Compress raw video assets for web delivery
# Source: raw_assets/CHAPTER {1,2,3}/ → Output: public/videos/ch{1,2,3}/
#
# Two compression profiles:
#   Standard (full-bleed background videos): 1280x720, CRF 28
#   Data Point animations: native aspect ratio, CRF 26
#
# Mobile autoplay videos (same resolution, no keyframes):
#   - Dedicated mobile source files (*_MOBILE*, *_MOB*) are processed as standard
#   - Videos with "mobile": true in overrides get a _mobile.mp4 re-encode without keyframes

set -euo pipefail

RAW_DIR="raw_assets"
OUT_DIR="public/videos"
OVERRIDES_FILE="video-overrides.json"

# Check ffmpeg is available
if ! command -v ffmpeg &>/dev/null; then
    echo "Error: ffmpeg is required but not installed."
    echo "Install with: brew install ffmpeg"
    exit 1
fi

# Load per-video overrides (requires jq for JSON parsing)
get_override() {
    local output_path="$1"  # e.g. "ch1/ch1_1.mp4"
    local field="$2"        # e.g. "keyframes"
    if [ -f "$OVERRIDES_FILE" ] && command -v jq &>/dev/null; then
        jq -r --arg p "$output_path" --arg f "$field" '.[$p][$f] // empty' "$OVERRIDES_FILE" 2>/dev/null
    fi
}

# Chapter mapping: "directory|output_subdir"
CHAPTERS=(
    "CHAPTER 1|ch1"
    "CHAPTER 2|ch2"
    "CHAPTER 3|ch3"
)

processed=0
skipped=0
failed=0
total_in=0
total_out=0

# Returns true if file is a mobile variant
is_mobile() {
    local name="$1"
    # Case-insensitive matching
    local lower
    lower=$(echo "$name" | tr '[:upper:]' '[:lower:]')

    # *_MOBILE* (e.g. SOPRA_CH1_2_MOBILE.mp4)
    [[ "$lower" == *_mobile* ]] && return 0
    # *_MOB.* or *_MOB_* (e.g. SOPRA_CH2_6_MOB.mp4)
    [[ "$lower" == *_mob.* ]] && return 0
    [[ "$lower" == *_mob_* ]] && return 0
    # *_M.mp4 at end (e.g. SOPRA_DigitalDisruption_DP3_M.mp4)
    [[ "$lower" =~ _m\.mp4$ ]] && return 0
    # *Mobile* (e.g. SOPRA_Digital Disruption_Data Point 01_Mobile.mp4)
    [[ "$lower" == *mobile* ]] && return 0

    return 1
}

# Returns true if file is a Data Point animation
is_datapoint() {
    local name="$1"
    local lower
    lower=$(echo "$name" | tr '[:upper:]' '[:lower:]')
    [[ "$lower" == *digitaldisruption* || "$lower" == *"data point"* || "$lower" == *"data_point"* ]] && return 0
    return 1
}

# Generate output filename from raw filename
make_output_name() {
    local name="$1"
    local base="${name%.mp4}"

    # Strip SOPRA_ prefix
    base="${base#SOPRA_}"

    # Handle Data Point naming normalization
    # SOPRA_DigitalDisruption_DP_01_DESKTOP → dp1_desktop
    # SOPRA_DigitalDisruption_DP2_D → dp2_desktop
    # SOPRA_DigitalDisruption_DP3_D → dp3_desktop
    local lower
    lower=$(echo "$base" | tr '[:upper:]' '[:lower:]')

    if [[ "$lower" == *digitaldisruption* || "$lower" == *"data point"* || "$lower" == *"data_point"* ]]; then
        # Extract DP number - match patterns like DP_01, DP2, DP3, "Data Point 01"
        local dp_num
        local dp_re='data[_ ]point[_ ]0*([0-9]+)'
        if [[ "$lower" =~ dp_?0*([0-9]+) ]]; then
            dp_num="${BASH_REMATCH[1]}"
        elif [[ "$lower" =~ $dp_re ]]; then
            dp_num="${BASH_REMATCH[1]}"
        else
            dp_num="0"
        fi

        # Check for desktop suffix (_DESKTOP, _D)
        if [[ "$lower" =~ _(desktop|d)$ ]] || [[ "$lower" =~ _(desktop|d)[^a-z] ]]; then
            echo "dp${dp_num}_desktop.mp4"
        else
            echo "dp${dp_num}.mp4"
        fi
        return
    fi

    # Standard files: lowercase, spaces to underscores
    lower=$(echo "$base" | tr '[:upper:]' '[:lower:]' | tr ' ' '_')

    # Clean up _desktop suffix (keep it readable)
    lower="${lower//_glitch/_glitch}"

    echo "${lower}.mp4"
}

# Shared ffmpeg encode function
# Usage: encode_video <input> <output> <vf_opts> <crf> <label> [extra_flags...]
encode_video() {
    local filepath="$1"
    local out_path="$2"
    local vf_opts="$3"
    local crf="$4"
    local label="$5"
    shift 5
    local extra_flags=("$@")

    local filename
    filename=$(basename "$filepath")

    local in_bytes
    in_bytes=$(stat -f%z "$filepath" 2>/dev/null || stat -c%s "$filepath" 2>/dev/null)
    local in_human
    in_human=$(echo "$in_bytes" | awk '{
        if ($1 >= 1073741824) printf "%.1fG", $1/1073741824
        else if ($1 >= 1048576) printf "%.1fM", $1/1048576
        else if ($1 >= 1024) printf "%.1fK", $1/1024
        else printf "%dB", $1
    }')

    local out_name
    out_name=$(basename "$out_path")

    printf "  %-45s [%s] " "${filename}" "${label}"

    ffmpeg -i "$filepath" \
        -vf "$vf_opts" \
        -c:v libx264 \
        -preset slow \
        -crf "$crf" \
        ${extra_flags[@]+"${extra_flags[@]}"} \
        -r 24 \
        -pix_fmt yuv420p \
        -an \
        -movflags +faststart \
        -y "$out_path" 2>/dev/null

    if [ -f "$out_path" ]; then
        local out_bytes
        out_bytes=$(stat -f%z "$out_path" 2>/dev/null || stat -c%s "$out_path" 2>/dev/null)
        local out_human
        out_human=$(echo "$out_bytes" | awk '{
            if ($1 >= 1073741824) printf "%.1fG", $1/1073741824
            else if ($1 >= 1048576) printf "%.1fM", $1/1048576
            else if ($1 >= 1024) printf "%.1fK", $1/1024
            else printf "%dB", $1
        }')
        echo "${in_human} → ${out_human}  →  ${out_name}"
        ((processed++))
        total_in=$((total_in + in_bytes))
        total_out=$((total_out + out_bytes))
    else
        echo "FAILED"
        ((failed++))
    fi
}

echo "=== Video Compression ==="
echo "Source: ${RAW_DIR}/CHAPTER {1,2,3}/"
echo "Output: ${OUT_DIR}/ch{1,2,3}/"
echo ""

for entry in "${CHAPTERS[@]}"; do
    chapter_dir="${entry%%|*}"
    ch="${entry##*|}"
    src="${RAW_DIR}/${chapter_dir}"
    dest="${OUT_DIR}/${ch}"

    if [ ! -d "$src" ]; then
        echo "Warning: ${src} not found, skipping"
        continue
    fi

    mkdir -p "$dest"
    echo "--- ${chapter_dir} → ${ch} ---"

    # Copy JSON files (Lottie animations)
    for jsonpath in "$src"/*.json; do
        [ -f "$jsonpath" ] || continue
        jsonname=$(basename "$jsonpath")
        cp "$jsonpath" "${dest}/${jsonname}"
        echo "  COPY (json): ${jsonname}"
    done

    for filepath in "$src"/*.mp4; do
        [ -f "$filepath" ] || continue
        filename=$(basename "$filepath")

        # Mobile source files: process as standard (no keyframes)
        if is_mobile "$filename"; then
            # Skip mobile data point animations (not needed)
            if is_datapoint "$filename"; then
                echo "  SKIP (mobile datapoint): ${filename}"
                ((skipped++))
                continue
            fi

            out_name=$(make_output_name "$filename")
            out_path="${dest}/${out_name}"
            vf_opts="scale=1280:720:force_original_aspect_ratio=decrease,pad=1280:720:(ow-iw)/2:(oh-ih)/2"
            encode_video "$filepath" "$out_path" "$vf_opts" 28 "mobile-src"
            continue
        fi

        out_name=$(make_output_name "$filename")
        out_path="${dest}/${out_name}"

        # Choose compression profile
        if is_datapoint "$filename"; then
            # Data Point animations: preserve aspect ratio, slightly better quality
            vf_opts="scale='min(1280,iw)':'min(720,ih)':force_original_aspect_ratio=decrease"
            crf=26
            profile_label="datapoint"
        else
            # Standard chapter videos: scale to 1280x720
            vf_opts="scale=1280:720:force_original_aspect_ratio=decrease,pad=1280:720:(ow-iw)/2:(oh-ih)/2"
            crf=28
            profile_label="standard"
        fi

        # Check for per-video overrides
        override_key="${ch}/${out_name}"
        keyframe_override=$(get_override "$override_key" "keyframes")
        extra_flags=()
        if [ "$keyframe_override" = "every" ]; then
            extra_flags+=(-g 1 -keyint_min 1)
            profile_label="${profile_label}+keyframes"
        fi

        encode_video "$filepath" "$out_path" "$vf_opts" "$crf" "$profile_label" "${extra_flags[@]+"${extra_flags[@]}"}"

        # Generate mobile variant (standard, no keyframes) if override says so
        mobile_override=$(get_override "$override_key" "mobile")
        if [ "$mobile_override" = "true" ]; then
            mobile_out_name="${out_name%.mp4}_mobile.mp4"
            mobile_out_path="${dest}/${mobile_out_name}"
            encode_video "$filepath" "$mobile_out_path" "$vf_opts" "$crf" "mobile"
        fi
    done
    echo ""
done

# Summary
total_in_human=$(echo "$total_in" | awk '{
    if ($1 >= 1073741824) printf "%.1fG", $1/1073741824
    else if ($1 >= 1048576) printf "%.1fM", $1/1048576
    else printf "%dB", $1
}')
total_out_human=$(echo "$total_out" | awk '{
    if ($1 >= 1073741824) printf "%.1fG", $1/1073741824
    else if ($1 >= 1048576) printf "%.1fM", $1/1048576
    else printf "%dB", $1
}')

echo "=== Summary ==="
echo "Processed: ${processed} videos"
if [ "$skipped" -gt 0 ]; then
    echo "Skipped: ${skipped} videos"
fi
if [ "$failed" -gt 0 ]; then
    echo "Failed: ${failed} videos"
fi
echo "Total: ${total_in_human} → ${total_out_human}"
echo "Output: ${OUT_DIR}/"
