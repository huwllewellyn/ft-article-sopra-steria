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
        const loadAnimation = async () => {
            let data;

            try {
                const fullPath = getAssetPath(path);
                const response = await fetch(fullPath);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                data = await response.json();
            } catch (err) {
                // If primary path fails and fallback exists, try fallback
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

            // Create Intersection Observer to load animation when nearby
            const loadObserver = new IntersectionObserver(
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
                                rendererSettings: {
                                    preserveAspectRatio,
                                },
                            });
                            animationRef.current = anim;

                            // Set initial frame based on initialFrame prop (0-1 range)
                            if (initialFrame > 0) {
                                const totalFrames = anim.getDuration(true);
                                const targetFrame = initialFrame * totalFrames;
                                anim.goToAndStop(Math.round(targetFrame), true);
                            }

                            loadObserver.unobserve(entry.target);
                        }
                    });
                },
                { rootMargin: "100%" }
            );

            if (containerRef.current) {
                loadObserver.observe(containerRef.current);
            }

            return () => {
                loadObserver.disconnect();
            };
        };

        loadAnimation();
    }, [path, fallbackPath, loop, autoplay, renderer, scrollSync, initialFrame, preserveAspectRatio]);

    // Autoplay lotties: play when the appear-in-place slide container reaches top of viewport
    // On mobile (no sticky), just play immediately
    useEffect(() => {
        if (!autoplay || scrollSync || scrollProgress) return;

        if (isMobile) {
            // No sticky context on mobile — play as soon as animation is loaded
            const check = () => {
                const anim = animationRef.current;
                if (anim) { anim.goToAndPlay(0); return; }
                // Animation may not be loaded yet; poll briefly
                const id = setInterval(() => {
                    const a = animationRef.current;
                    if (a) { a.goToAndPlay(0); clearInterval(id); }
                }, 100);
                return () => clearInterval(id);
            };
            return check();
        }

        let trackEl = null;
        let playing = false;
        const handleScroll = () => {
            const anim = animationRef.current;
            const el = containerRef.current;
            if (!anim || !el) return;

            if (!trackEl) {
                let node = el.parentElement;
                while (node && node !== document.body) {
                    if (node.style.opacity !== "") {
                        trackEl = node;
                        break;
                    }
                    node = node.parentElement;
                }
                trackEl = trackEl || el;
            }

            const rect = trackEl.getBoundingClientRect();
            const isVisible = rect.top <= 0 && rect.bottom > 0;

            if (isVisible && !playing) {
                playing = true;
                anim.goToAndPlay(0);
            } else if (!isVisible && playing) {
                playing = false;
                anim.pause();
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, [autoplay, scrollSync, scrollProgress, isMobile]);

    // Handle scroll-synced animation (legacy window scroll)
    useEffect(() => {
        if (!scrollSync || !animationRef.current || !containerRef.current) {
            return;
        }

        const handleScroll = () => {
            const container = containerRef.current;
            const animation = animationRef.current;

            if (!container || !animation) return;

            // Get container position relative to viewport
            const rect = container.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // Calculate scroll progress (0 to 1)
            // Animation plays as element scrolls from bottom of viewport to top
            const scrollProgress = 1 - rect.top / (windowHeight + rect.height);
            const clampedProgress = Math.max(0, Math.min(1, scrollProgress));

            // Get total frames and calculate target frame
            const totalFrames = animation.getDuration(true); // true = in frames
            const targetFrame = clampedProgress * totalFrames;

            // Move animation to frame based on scroll
            animation.goToAndStop(targetFrame, true);
        };

        window.addEventListener("scroll", handleScroll, false);
        return () => {
            window.removeEventListener("scroll", handleScroll, false);
        };
    }, [scrollSync]);

    // Handle framer-motion scroll progress (only when scrollProgress MotionValue is provided)
    useEffect(() => {
        if (!scrollProgress) return;
        const unsubscribe = scrollProgress.onChange((latest) => {
            const animation = animationRef.current;
            if (!animation) {
                console.warn("[LottieAnimation] Animation not loaded yet");
                return;
            }

            const totalFrames = animation.getDuration(true);
            // Animate from initialFrame to finalFrame based on scroll progress
            const frameRange = finalFrame - initialFrame;
            const targetFrame = (initialFrame + latest * frameRange) * totalFrames;

            // Move animation to frame based on scroll progress
            animation.goToAndStop(Math.round(targetFrame), true);
        });

        return () => unsubscribe();
    }, [scrollProgress, initialFrame, finalFrame]);

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
