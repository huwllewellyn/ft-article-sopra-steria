import { useRef, useEffect } from "react";

/**
 * Plays a video forward while the user is scrolling, pauses when they stop.
 * No seeking — just play/pause — so standard encoding works fine (no -g 1 needed).
 *
 * @param {MotionValue<number>} scrollProgress - MotionValue from useScroll (used to detect scroll activity)
 * @returns {React.RefObject} ref to attach to the <video> element
 */
export default function useScrollVideo(scrollProgress) {
    const videoRef = useRef(null);

    useEffect(() => {
        if (!scrollProgress) return;

        let pauseTimer;

        const unsubscribe = scrollProgress.on("change", () => {
            const video = videoRef.current;
            if (!video) return;

            if (video.paused) {
                video.playbackRate = 2;
                video.play().catch(() => {});
            }

            clearTimeout(pauseTimer);
            pauseTimer = setTimeout(() => {
                if (video && !video.paused) {
                    video.pause();
                }
            }, 150);
        });

        return () => {
            unsubscribe();
            clearTimeout(pauseTimer);
        };
    }, [scrollProgress]);

    return videoRef;
}
