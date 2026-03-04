import { useEffect, useRef } from "react";
import lottie from "lottie-web";
import styled from "styled-components";
import { getAssetPath } from "../utils/assetPath";
import useIsMobile from "../hooks/useIsMobile";

const Container = styled.div`
    width: 100%;
    height: 100%;
    max-height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
`;

export default function LottieAnimation({
    path,
    fallbackPath,
    height = "600px",
    width = "100%",
    loop = true,
    autoplay = true,
    renderer = "svg",
    scrollSync = false,
    scrollProgress = null,
    initialFrame = 0,
    finalFrame = 1,
    preserveAspectRatio = "xMidYMid meet",
}) {
    const containerRef = useRef(null);
    const animationLoadedRef = useRef(false);
    const animationRef = useRef(null);
    const isMobile = useIsMobile();

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        let cancelled = false;
        let loadObserver;

        const fetchAndLoad = async () => {
            let data;

            try {
                const fullPath = getAssetPath(path);
                const response = await fetch(fullPath);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                data = await response.json();
            } catch (err) {
                if (fallbackPath) {
                    try {
                        console.warn(
                            `Primary animation path failed: ${path}, trying fallback: ${fallbackPath}`
                        );
                        const fullFallbackPath = getAssetPath(fallbackPath);
                        const fallbackResponse = await fetch(fullFallbackPath);
                        if (!fallbackResponse.ok) {
                            throw new Error(
                                `HTTP error! status: ${fallbackResponse.status}`
                            );
                        }
                        data = await fallbackResponse.json();
                    } catch (fallbackErr) {
                        console.error(
                            `Failed to load both primary and fallback animation`,
                            err,
                            fallbackErr
                        );
                        return;
                    }
                } else {
                    console.error(
                        `Failed to load lottie animation: ${path}`,
                        err
                    );
                    return;
                }
            }

            if (cancelled || !containerRef.current || animationLoadedRef.current) return;

            animationLoadedRef.current = true;
            const anim = lottie.loadAnimation({
                container: containerRef.current,
                renderer: renderer,
                loop: loop,
                autoplay: false,
                animationData: data,
                rendererSettings: {
                    preserveAspectRatio,
                },
            });
            animationRef.current = anim;

            if (initialFrame > 0) {
                const totalFrames = anim.getDuration(true);
                const targetFrame = initialFrame * totalFrames;
                anim.goToAndStop(Math.round(targetFrame), true);
            }
        };

        // On mobile: only fetch + load when near viewport
        // On desktop: fetch eagerly, load when near viewport
        if (isMobile) {
            loadObserver = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting && !animationLoadedRef.current) {
                        loadObserver.disconnect();
                        fetchAndLoad();
                    }
                },
                { rootMargin: "0%" },
            );
            loadObserver.observe(container);
        } else {
            // Desktop: fetch eagerly, but defer lottie.loadAnimation until nearby
            const eagerFetch = async () => {
                let data;
                try {
                    const fullPath = getAssetPath(path);
                    const response = await fetch(fullPath);
                    if (!response.ok) throw new Error(`HTTP ${response.status}`);
                    data = await response.json();
                } catch (err) {
                    if (fallbackPath) {
                        try {
                            const r = await fetch(getAssetPath(fallbackPath));
                            if (!r.ok) throw new Error(`HTTP ${r.status}`);
                            data = await r.json();
                        } catch {
                            return;
                        }
                    } else {
                        return;
                    }
                }

                if (cancelled) return;

                loadObserver = new IntersectionObserver(
                    (entries) => {
                        entries.forEach((entry) => {
                            if (
                                entry.isIntersecting &&
                                containerRef.current &&
                                !animationLoadedRef.current
                            ) {
                                animationLoadedRef.current = true;
                                const anim = lottie.loadAnimation({
                                    container: containerRef.current,
                                    renderer: renderer,
                                    loop: loop,
                                    autoplay: false,
                                    animationData: data,
                                    rendererSettings: { preserveAspectRatio },
                                });
                                animationRef.current = anim;

                                if (initialFrame > 0) {
                                    const totalFrames = anim.getDuration(true);
                                    anim.goToAndStop(Math.round(initialFrame * totalFrames), true);
                                }

                                loadObserver.unobserve(entry.target);
                            }
                        });
                    },
                    { rootMargin: "100%" },
                );

                if (containerRef.current) {
                    loadObserver.observe(containerRef.current);
                }
            };

            eagerFetch();
        }

        return () => {
            cancelled = true;
            if (loadObserver) loadObserver.disconnect();
        };
    }, [isMobile, path, fallbackPath, loop, autoplay, renderer, scrollSync, initialFrame, preserveAspectRatio]);

    // Autoplay: play when visible
    useEffect(() => {
        if (!autoplay || scrollSync || scrollProgress) return;

        const el = containerRef.current;
        if (!el) return;

        let playing = false;
        let isVisible = false;

        // When animation finishes loading while already visible, play it
        const onAnimReady = () => {
            if (isVisible && !playing) {
                playing = true;
                animationRef.current.goToAndPlay(0);
            }
        };

        const observer = new IntersectionObserver(
            ([entry]) => {
                isVisible = entry.isIntersecting;
                const anim = animationRef.current;
                if (!anim) return;
                if (isVisible && !playing) {
                    playing = true;
                    anim.goToAndPlay(0);
                } else if (!isVisible && playing) {
                    playing = false;
                    anim.pause();
                }
            },
            { threshold: 0.1 },
        );
        observer.observe(el);

        // Poll briefly for animation readiness (loads async via fetch)
        const check = setInterval(() => {
            if (animationRef.current) {
                clearInterval(check);
                onAnimReady();
            }
        }, 100);

        return () => {
            observer.disconnect();
            clearInterval(check);
        };
    }, [autoplay, scrollSync, scrollProgress]);

    // Handle scroll-synced animation (legacy window scroll)
    useEffect(() => {
        if (isMobile) return;
        if (!scrollSync || !animationRef.current || !containerRef.current) {
            return;
        }

        const handleScroll = () => {
            const container = containerRef.current;
            const animation = animationRef.current;

            if (!container || !animation) return;

            const rect = container.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            const scrollProgress = 1 - rect.top / (windowHeight + rect.height);
            const clampedProgress = Math.max(0, Math.min(1, scrollProgress));

            const totalFrames = animation.getDuration(true);
            const targetFrame = clampedProgress * totalFrames;

            animation.goToAndStop(targetFrame, true);
        };

        window.addEventListener("scroll", handleScroll, false);
        return () => {
            window.removeEventListener("scroll", handleScroll, false);
        };
    }, [isMobile, scrollSync]);

    // Handle framer-motion scroll progress
    useEffect(() => {
        if (isMobile) return;
        if (!scrollProgress) return;
        const unsubscribe = scrollProgress.onChange((latest) => {
            const animation = animationRef.current;
            if (!animation) return;

            const totalFrames = animation.getDuration(true);
            const frameRange = finalFrame - initialFrame;
            const targetFrame = (initialFrame + latest * frameRange) * totalFrames;

            animation.goToAndStop(Math.round(targetFrame), true);
        });

        return () => unsubscribe();
    }, [isMobile, scrollProgress, initialFrame, finalFrame]);

    return (
        <Container
            ref={containerRef}
            style={{
                width: width,
                height: height,
            }}
        />
    );
}
