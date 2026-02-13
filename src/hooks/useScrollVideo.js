import { useRef, useEffect } from "react";

/**
 * Scrubs a video forward/backward based on scroll position.
 * Maps scrollProgress (0→1) directly to video.currentTime (0→duration).
 *
 * Fetches the video as a blob so the entire file is in memory,
 * ensuring reliable seeking on production (GitHub Pages etc.)
 * where preload="auto" is not guaranteed and Range requests
 * may not work reliably for seeking.
 *
 * @param {MotionValue<number>} scrollProgress - MotionValue from useScroll
 * @returns {React.RefObject} ref to attach to the <video> element
 */
export default function useScrollVideo(scrollProgress) {
    const videoRef = useRef(null);

    // Fetch video as blob for reliable seeking
    useEffect(() => {
        const video = videoRef.current;
        if (!video || !video.src) return;

        const src = video.src;
        // Don't re-fetch if already a blob URL
        if (src.startsWith("blob:")) return;

        let blobUrl;
        let cancelled = false;

        fetch(src)
            .then((res) => {
                if (!res.ok) throw new Error(`HTTP ${res.status}`);
                return res.blob();
            })
            .then((blob) => {
                if (cancelled) return;
                blobUrl = URL.createObjectURL(blob);
                if (videoRef.current) {
                    videoRef.current.src = blobUrl;
                }
            })
            .catch((err) => {
                // Blob fetch failed — scrubbing may still work if the
                // browser can seek the original source via Range requests.
                console.warn(
                    "[useScrollVideo] blob preload failed, using original src:",
                    err.message
                );
            });

        return () => {
            cancelled = true;
            if (blobUrl) URL.revokeObjectURL(blobUrl);
        };
    }, []);

    // Scrub currentTime based on scroll
    useEffect(() => {
        if (!scrollProgress) return;

        const unsubscribe = scrollProgress.on("change", (v) => {
            const video = videoRef.current;
            if (!video || !video.duration || isNaN(video.duration)) return;

            video.currentTime = v * video.duration;
        });

        return () => unsubscribe();
    }, [scrollProgress]);

    return videoRef;
}
