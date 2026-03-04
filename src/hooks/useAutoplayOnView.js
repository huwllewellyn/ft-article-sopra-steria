import { useRef, useEffect, useCallback } from "react";

const isMobile =
    typeof window !== "undefined" && window.innerWidth < 768;

/**
 * Plays a video when it scrolls into view, pauses when it leaves.
 * On mobile, strips src and poster immediately to prevent eager fetching,
 * then loads only when the video is near the viewport.
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
            const poster = el.getAttribute("poster");
            if (poster) {
                el.dataset.poster = poster;
                el.removeAttribute("poster");
            }
        }
    }, []);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        if (isMobile) {
            const originalSrc = video.dataset.src;
            const originalPoster = video.dataset.poster;
            if (!originalSrc) return;

            let loaded = false;

            const unload = () => {
                if (!loaded) return;
                video.pause();
                video.removeAttribute("src");
                if (originalPoster) video.poster = originalPoster;
                video.load();
                loaded = false;
            };

            let shouldPlay = false;

            const reload = () => {
                if (loaded) return;
                video.src = originalSrc;
                if (originalPoster) video.poster = originalPoster;
                video.load();
                loaded = true;
            };

            const playWhenReady = () => {
                shouldPlay = true;
                if (video.readyState >= 2) {
                    video.play().catch(() => { });
                }
            };

            const onCanPlay = () => {
                if (shouldPlay) {
                    video.play().catch(() => { });
                }
            };
            video.addEventListener("canplay", onCanPlay);

            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        reload();
                        playWhenReady();
                    } else {
                        shouldPlay = false;
                        video.pause();
                        unload();
                    }
                },
                { rootMargin: "100%" },
            );

            observer.observe(video);

            // Fallback: IO can miss elements inside sticky/overflow containers.
            requestAnimationFrame(() => {
                const rect = video.getBoundingClientRect();
                const inViewport = rect.top < window.innerHeight && rect.bottom > 0;
                if (inViewport && !loaded) {
                    reload();
                    playWhenReady();
                }
            });

            return () => {
                observer.disconnect();
                video.removeEventListener("canplay", onCanPlay);
            };
        }

        // Desktop path
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
                    if (visible) video.play().catch(() => { });
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
                    video.play().catch(() => { });
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
