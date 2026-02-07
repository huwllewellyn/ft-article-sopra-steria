#!/bin/bash

# Extract poster frames from compressed videos for <video poster=""> attributes
# Input: public/videos/ch{1,2,3}/*.mp4
# Output: public/videos/posters/ch{1,2,3}/{filename}.jpg

set -euo pipefail

VIDEO_DIR="public/videos"
POSTER_DIR="public/videos/posters"

# Check ffmpeg is available
if ! command -v ffmpeg &>/dev/null; then
    echo "Error: ffmpeg is required but not installed."
    echo "Install with: brew install ffmpeg"
    exit 1
fi

# Check that compressed videos exist
if ! ls "$VIDEO_DIR"/ch*/*.mp4 &>/dev/null; then
    echo "Error: No compressed videos found in ${VIDEO_DIR}/ch*/"
    echo "Run compress-videos.sh first."
    exit 1
fi

processed=0
failed=0

echo "=== Poster Frame Extraction ==="
echo "Source: ${VIDEO_DIR}/ch{1,2,3}/*.mp4"
echo "Output: ${POSTER_DIR}/ch{1,2,3}/"
echo ""

for ch_dir in "$VIDEO_DIR"/ch*/; do
    [ -d "$ch_dir" ] || continue
    ch=$(basename "$ch_dir")
    dest="${POSTER_DIR}/${ch}"
    mkdir -p "$dest"

    echo "--- ${ch} ---"

    for video in "$ch_dir"*.mp4; do
        [ -f "$video" ] || continue
        filename=$(basename "$video" .mp4)
        poster="${dest}/${filename}.jpg"

        printf "  %-40s " "${filename}.mp4"

        # Extract frame at t=0.5s to avoid black first frames
        ffmpeg -ss 0.5 -i "$video" \
            -vframes 1 \
            -q:v 4 \
            -y "$poster" 2>/dev/null

        if [ -f "$poster" ]; then
            size=$(du -h "$poster" | cut -f1)
            echo "→ ${filename}.jpg (${size})"
            ((processed++))
        else
            echo "FAILED"
            ((failed++))
        fi
    done
    echo ""
done

echo "=== Summary ==="
echo "Generated: ${processed} poster frames"
if [ "$failed" -gt 0 ]; then
    echo "Failed: ${failed}"
fi
echo "Output: ${POSTER_DIR}/"
