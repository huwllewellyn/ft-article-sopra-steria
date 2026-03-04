import { useRef, useEffect, useCallback } from "react";

const isMobile =
    typeof window !== "undefined" && window.innerWidth < 768;

/**
 * Plays a video when it scrolls into view, pauses when it leaves.
 * Releases video decoder resources when the video is far off-screen
 * to reduce memory pressure on mobile (limited hardware decoder slots).
 * Returns a ref callback to attach to a <video> element.
 */
export default function useAutoplayOnView() {
    const videoRef = useRef(null);

    const setRef = useCallback((el) => {
        videoRef.current = el;
        if (isMobile && el) {
            const src = el.currentSrc || el.src;
            if (src) {
                el.dataset.src = src;
                el.removeAttribute("src");
            }
        }
    }, []);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        // On mobile: never load any video (TEST)
        if (isMobile) return;

        const originalSrc = video.currentSrc || video.src;
        let loaded = true;
        let visible = false;

        const unload = () => {
            if (!loaded) return;
            video.pause();
            video.removeAttribute("src");
            video.load();
            loaded = false;
        };

        const reload = () => {
            if (loaded) return;
            video.src = originalSrc;
            video.load();
            loaded = true;
        };

        const resourceObserver = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    reload();
                    if (visible) video.play().catch(() => {});
                } else {
                    unload();
                }
            },
            { rootMargin: "100%" },
        );

        const playbackObserver = new IntersectionObserver(
            ([entry]) => {
                visible = entry.isIntersecting;
                if (visible && loaded) {
                    video.play().catch(() => {});
                } else if (loaded) {
                    video.pause();
                }
            },
            { threshold: 0.1 },
        );

        resourceObserver.observe(video);
        playbackObserver.observe(video);

        return () => {
            resourceObserver.disconnect();
            playbackObserver.disconnect();
        };
    }, []);

    return setRef;
}
