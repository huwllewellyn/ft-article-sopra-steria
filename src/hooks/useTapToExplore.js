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

        // "Tap to continue" hint
        const hint = document.createElement("div");
        hint.setAttribute("aria-hidden", "true");
        Object.assign(hint.style, {
            position: "fixed",
            bottom: "24px",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: "9999",
            fontFamily: "'Space Mono', monospace",
            fontSize: "12px",
            fontWeight: "500",
            color: "#fff",
            textTransform: "uppercase",
            letterSpacing: "1px",
            opacity: "0.7",
            pointerEvents: "none",
            transition: "opacity 0.3s",
            textAlign: "center",
        });
        hint.textContent = "Tap to continue \u25BE";
        document.body.appendChild(hint);

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

            // Hide hint on first tap
            if (hint.style.opacity !== "0") {
                hint.style.opacity = "0";
            }

            const stops = buildStopList();
            const currentY = window.scrollY;

            // Find next stop beyond current position (50px threshold to avoid sticking)
            const nextStop = stops.find((y) => y > currentY + 50);

            if (nextStop != null) {
                scrollingRef.current = true;
                window.scrollTo({ top: nextStop, behavior: "smooth" });
                setTimeout(() => {
                    scrollingRef.current = false;
                }, 1000);
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
            if (hint.parentNode) hint.parentNode.removeChild(hint);
        };
    }, [isMobile]);
}
