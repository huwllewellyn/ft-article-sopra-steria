import { useState, useEffect, useRef, useLayoutEffect } from "react";
import { useScroll } from "framer-motion";

/**
 * A scroll-tracked sticky section that switches between multiple slides
 * based on scroll progress. Unlike StickySlide, it does NOT collapse its
 * height with a negative margin — so the full trackHeight contributes to
 * the document flow, giving each phase real scroll distance.
 *
 * Each slide receives { scrollYProgress } (spanning the entire section).
 *
 * Optional `background` render prop persists across all phases (ideal for
 * a shared video that shouldn't restart between slides).
 *
 * Usage:
 *   <ContinuousSlide
 *       trackHeight="300vh"
 *       appearInPlace
 *       background={({ scrollYProgress }) => <Video ... />}
 *       slides={[
 *           () => <TextContent />,
 *           () => <TextContent />,
 *       ]}
 *   />
 */
export default function ContinuousSlide({
    slides,
    background,
    trackHeight = "300vh",
    flowHeight,
    appearInPlace = false,
}) {
    const trackRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: trackRef,
        offset: ["start start", "end end"],
    });
    const [phase, setPhase] = useState(0);

    // z-index + initial hide (mirrors StickySlide's useZIndexAndAppear)
    useLayoutEffect(() => {
        const el = trackRef.current;
        const siblings = Array.from(el.parentElement.children);
        el.style.zIndex = siblings.indexOf(el) + 1;
        if (appearInPlace) {
            el.style.opacity = "0";
        }
    }, [appearInPlace]);

    // appear when scrolled into place
    useEffect(() => {
        if (!appearInPlace) return;
        const el = trackRef.current;
        const handleScroll = () => {
            el.style.opacity = el.getBoundingClientRect().top <= 0 ? "1" : "0";
        };
        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [appearInPlace]);

    // switch phase based on scroll progress
    useEffect(() => {
        const count = slides.length;
        return scrollYProgress.on("change", (v) => {
            const next = Math.min(Math.floor(v * count), count - 1);
            setPhase((prev) => (prev === next ? prev : next));
        });
    }, [scrollYProgress, slides.length]);

    return (
        <div
            ref={trackRef}
            style={{
                position: "relative",
                height: trackHeight,
                ...(flowHeight && { marginBottom: `calc(${flowHeight} - ${trackHeight})` }),
            }}
        >
            <div style={{ position: "sticky", top: 0, height: "100vh", overflow: "hidden" }}>
                {background?.({ scrollYProgress })}
                {slides[phase]({ scrollYProgress })}
            </div>
        </div>
    );
}
