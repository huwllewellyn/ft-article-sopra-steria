import { useRef, useEffect } from "react";

/**
 * Plays a video when it scrolls into view, pauses when it leaves.
 * Returns a ref to attach to a <video> element.
 */
export default function useAutoplayOnView() {
    const videoRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    video.play().catch(() => {});
                } else {
                    video.pause();
                }
            },
            { threshold: 0.1 }
        );

        observer.observe(video);
        return () => observer.disconnect();
    }, []);

    return videoRef;
}
