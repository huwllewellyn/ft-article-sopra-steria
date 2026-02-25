import { useEffect, useRef } from "react";
import useIsMobile from "./useIsMobile";

function findNextStop(currentY, threshold) {
    const slides = Array.from(document.querySelectorAll("[data-slide]"));

    for (const el of slides) {
        const top = el.getBoundingClientRect().top + window.scrollY;
        const phases = el.dataset.slidePhases
            ? parseInt(el.dataset.slidePhases, 10)
            : 0;

        if (phases > 1) {
            const height = el.offsetHeight;
            for (let i = 0; i < phases; i++) {
                const phaseY = top + (i / phases) * height;
                if (phaseY > currentY + threshold) {
                    return { el, phaseIndex: i, phases };
                }
            }
        } else {
            if (top > currentY + threshold) {
                return { el, phaseIndex: 0, phases: 0 };
            }
        }
    }

    return null;
}

const SCROLL_DURATION = 300;
let activeRafId = null;

function smoothScrollTo(target, callback) {
    if (activeRafId != null) {
        cancelAnimationFrame(activeRafId);
        activeRafId = null;
    }

    const start = window.scrollY;
    const distance = target - start;
    if (Math.abs(distance) < 2) {
        callback?.();
        return;
    }
    const startTime = performance.now();

    function step(now) {
        const elapsed = now - startTime;
        const t = Math.min(elapsed / SCROLL_DURATION, 1);
        const eased = 1 - Math.pow(1 - t, 3);
        window.scrollTo(0, Math.round(start + distance * eased));
        if (t < 1) {
            activeRafId = requestAnimationFrame(step);
        } else {
            activeRafId = null;
            callback?.();
        }
    }

    activeRafId = requestAnimationFrame(step);
}

/**
 * If we're at scrollY=0, the navbar is expanded. Scrolling will collapse it,
 * shifting all element positions. Force the collapse first by jumping to 1px,
 * then wait a frame for layout to settle before returning.
 */
function ensureNavbarCollapsed() {
    return new Promise((resolve) => {
        if (window.scrollY < 1) {
            window.scrollTo(0, 1);
            // Wait two frames for the navbar transition and layout reflow
            requestAnimationFrame(() => requestAnimationFrame(resolve));
        } else {
            resolve();
        }
    });
}

export default function useTapToExplore() {
    const isMobile = useIsMobile();
    const scrollingRef = useRef(false);
    const touchStartRef = useRef({ x: 0, y: 0 });

    useEffect(() => {
        if (!isMobile) return;

        // 💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀
        // Prevent browser/FT template from resetting scroll to 0.
        // Something in the FT external scripts actively scrolls to 0
        // during page init, which also causes bounce-back on touch scrolls.
        // Starting at scrollY=1 avoids this entirely.
        // 💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀
        history.scrollRestoration = "manual";
        window.scrollTo(0, 1);
        const scrollGuard = setInterval(() => {
            if (window.scrollY < 5) window.scrollTo(0, 1);
        }, 50);
        setTimeout(() => clearInterval(scrollGuard), 3000);

        const handleTouchStart = (e) => {
            if (activeRafId != null) {
                cancelAnimationFrame(activeRafId);
                activeRafId = null;
                scrollingRef.current = false;
            }
            touchStartRef.current = {
                x: e.touches[0].clientX,
                y: e.touches[0].clientY,
            };
        };

        const handleTouchEnd = (e) => {
            if (scrollingRef.current) return;

            const dx = e.changedTouches[0].clientX - touchStartRef.current.x;
            const dy = e.changedTouches[0].clientY - touchStartRef.current.y;
            if (Math.abs(dx) > 15 || Math.abs(dy) > 15) return;

            if (
                e.target.closest(
                    "a, button, input, select, textarea, [role='button'], video",
                )
            )
                return;

            scrollingRef.current = true;

            // Intro section: scroll directly to WarningSection
            const introEnd =
                document.querySelector("[data-slide-intro-end]");
            if (
                introEnd &&
                window.scrollY <
                introEnd.getBoundingClientRect().top + window.scrollY - 50
            ) {
                const targetY =
                    introEnd.getBoundingClientRect().top + window.scrollY;
                smoothScrollTo(targetY, () => {
                    scrollingRef.current = false;
                });
                return;
            }

            // Force navbar collapse before reading positions, then scroll
            ensureNavbarCollapsed().then(() => {
                const currentY = window.scrollY;

                const introEnd =
                    document.querySelector("[data-slide-intro-end]");
                const pastIntro =
                    introEnd &&
                    currentY >
                    introEnd.getBoundingClientRect().top + window.scrollY;
                const offset = pastIntro ? 150 : 0;
                const threshold = pastIntro ? 150 : 50;

                const match = findNextStop(currentY, threshold);

                if (match != null) {
                    const { el, phaseIndex, phases } = match;
                    let targetY;

                    if (phaseIndex > 0 && phases > 1) {
                        targetY =
                            el.getBoundingClientRect().top +
                            window.scrollY +
                            (phaseIndex / phases) * el.offsetHeight +
                            offset;
                    } else {
                        targetY =
                            el.getBoundingClientRect().top +
                            window.scrollY +
                            offset;
                    }

                    smoothScrollTo(targetY, () => {
                        scrollingRef.current = false;
                    });
                } else {
                    const cta = document.getElementById("cta-sopra");
                    if (cta) {
                        const ctaTop =
                            cta.getBoundingClientRect().top + window.scrollY;
                        smoothScrollTo(ctaTop - 200, () => {
                            scrollingRef.current = false;
                        });
                    } else {
                        scrollingRef.current = false;
                    }
                }
            });
        };

        document.addEventListener("touchstart", handleTouchStart, {
            passive: true,
        });
        document.addEventListener("touchend", handleTouchEnd, {
            passive: true,
        });

        return () => {
            document.removeEventListener("touchstart", handleTouchStart);
            document.removeEventListener("touchend", handleTouchEnd);
            if (activeRafId != null) {
                cancelAnimationFrame(activeRafId);
                activeRafId = null;
            }
        };
    }, [isMobile]);
}
