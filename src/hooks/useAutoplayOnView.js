import { useRef, useEffect } from "react";

const isMobile =
    typeof window !== "undefined" && window.innerWidth < 768;

/**
 * Plays a video when it scrolls into view, pauses when it leaves.
 * Releases video decoder resources when the video is far off-screen
 * to reduce memory pressure on mobile (limited hardware decoder slots).
 * Returns a ref to attach to a <video> element.
 */
export default function useAutoplayOnView() {
    const videoRef = useRef(null);

    // On mobile, strip src immediately during render via ref callback
    // to prevent the browser from fetching before the effect runs.
    const setRef = useRef((el) => {
        videoRef.current = el;
        if (isMobile && el) {
            const src = el.currentSrc || el.src;
            if (src) {
                el.dataset.src = src;
                el.removeAttribute("src");
            }
        }
    }).current;

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const originalSrc = video.dataset.src || video.currentSrc || video.src;
        let loaded = !isMobile; // mobile starts unloaded (src already stripped)
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

        // Nearby observer — load/unload video resources.
        // Tighter margin on mobile to limit concurrent decoder slots.
        const resourceObserver = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    reload();
                    if (visible) video.play().catch(() => {});
                } else {
                    unload();
                }
            },
            { rootMargin: isMobile ? "0%" : "100%" },
        );

        // Visibility observer — play/pause when actually on screen
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
