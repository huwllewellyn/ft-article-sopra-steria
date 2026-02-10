import { useRef, useEffect } from "react";

/**
 * Maps a framer-motion MotionValue (0→1) to video.currentTime,
 * scrubbing the video frame-by-frame as the user scrolls.
 *
 * @param {MotionValue<number>} scrollProgress - 0→1 progress value from useScroll
 * @returns {React.RefObject} ref to attach to the <video> element
 */
export default function useScrollVideo(scrollProgress) {
    const videoRef = useRef(null);

    useEffect(() => {
        if (!scrollProgress) return;

        const unsubscribe = scrollProgress.on("change", (progress) => {
            const video = videoRef.current;
            if (!video || !isFinite(video.duration)) return;
            video.currentTime = progress * video.duration;
        });

        return unsubscribe;
    }, [scrollProgress]);

    return videoRef;
}
