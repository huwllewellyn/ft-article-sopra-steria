import { useEffect, useRef } from "react";
import useIsMobile from "./useIsMobile";

function buildStopList() {
    const slides = document.querySelectorAll("[data-slide]");
    const stops = [];

    for (const el of slides) {
        const top = el.getBoundingClientRect().top + window.scrollY;
        const phases = el.dataset.slidePhases
            ? parseInt(el.dataset.slidePhases, 10)
            : 0;

        if (phases > 1) {
            const height = el.offsetHeight;
            for (let i = 0; i < phases; i++) {
                stops.push(Math.round(top + (i / phases) * height));
            }
        } else {
            stops.push(Math.round(top));
        }
    }

    stops.sort((a, b) => a - b);

    // Deduplicate stops within 30px of each other (handles nested data-slide)
    return stops.filter((stop, i) => i === 0 || stop - stops[i - 1] > 30);
}

const SCROLL_DURATION = 300; // ms — adjust to taste

function smoothScrollTo(target, callback) {
    const start = window.scrollY;
    const distance = target - start;
    const startTime = performance.now();

    function step(now) {
        const elapsed = now - startTime;
        const t = Math.min(elapsed / SCROLL_DURATION, 1);
        // ease-out cubic
        const eased = 1 - Math.pow(1 - t, 3);
        window.scrollTo(0, start + distance * eased);
        if (t < 1) {
            requestAnimationFrame(step);
        } else {
            callback?.();
        }
    }

    requestAnimationFrame(step);
}

export default function useTapToExplore() {
    const isMobile = useIsMobile();
    const scrollingRef = useRef(false);
    const touchStartRef = useRef({ x: 0, y: 0 });

    useEffect(() => {
        if (!isMobile) return;

        // Prevent native touch scrolling
        document.body.style.touchAction = "none";
        document.body.style.overscrollBehavior = "none";

        const preventScroll = (e) => e.preventDefault();
        document.addEventListener("touchmove", preventScroll, {
            passive: false,
        });

        const handleTouchStart = (e) => {
            touchStartRef.current = {
                x: e.touches[0].clientX,
                y: e.touches[0].clientY,
            };
        };

        const handleTouchEnd = (e) => {
            if (scrollingRef.current) return;

            // Only advance on tap (not drag) — 15px threshold
            const dx = e.changedTouches[0].clientX - touchStartRef.current.x;
            const dy = e.changedTouches[0].clientY - touchStartRef.current.y;
            if (Math.abs(dx) > 15 || Math.abs(dy) > 15) return;

            // Ignore taps on interactive elements
            if (
                e.target.closest(
                    "a, button, input, select, textarea, [role='button'], video",
                )
            )
                return;


            const stops = buildStopList();
            const currentY = window.scrollY;

            // Only add offset once past the intro sections
            const introEnd =
                document.querySelector("[data-slide-intro-end]");
            const pastIntro =
                introEnd &&
                currentY > introEnd.getBoundingClientRect().top + window.scrollY;
            const offset = pastIntro ? 150 : 0;

            // Find next stop beyond current position
            const nextStop = stops.find((y) => y > currentY + (pastIntro ? 150 : 50));

            if (nextStop != null) {
                scrollingRef.current = true;
                smoothScrollTo(nextStop + offset, () => {
                    scrollingRef.current = false;
                });
            } else {
                // Past the last stop — scroll to the CTA button
                const cta = document.getElementById("cta-sopra");
                if (cta) {
                    const ctaTop = cta.getBoundingClientRect().top + window.scrollY;
                    if (currentY < ctaTop - 50) {
                        scrollingRef.current = true;
                        smoothScrollTo(ctaTop, () => {
                            scrollingRef.current = false;
                        });
                    }
                }
            }
        };

        document.addEventListener("touchstart", handleTouchStart, {
            passive: true,
        });
        document.addEventListener("touchend", handleTouchEnd, {
            passive: true,
        });

        return () => {
            document.body.style.touchAction = "";
            document.body.style.overscrollBehavior = "";
            document.removeEventListener("touchmove", preventScroll);
            document.removeEventListener("touchstart", handleTouchStart);
            document.removeEventListener("touchend", handleTouchEnd);
        };
    }, [isMobile]);
}
