import { useState, useRef, useLayoutEffect, useEffect } from "react";
import styled from "styled-components";
import { useScroll } from "framer-motion";
import { media } from "../../utils/breakpoints";
import { getAssetPath } from "../../utils/assetPath";
import SectionHeadingBar from "./SectionHeadingBar";
import useScrollVideo from "../../hooks/useScrollVideo";

const GLITCH_CHARS =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&*!?<>{}[]~/\\|";

const ScrollTrack = styled.div`
    position: relative;
    height: ${({ $height }) => $height};
    margin-bottom: ${({ $margin }) => $margin};
`;

const StickyInner = styled.div`
    position: sticky;
    top: 0;
    height: 100vh;
    overflow: hidden;
`;

const Slide = styled.div`
    width: 100%;
    height: 100%;
    background: ${({ $bg }) => $bg || "#0d1117"};
    color: #000;
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: hidden;
`;

const BackgroundVideo = styled.video`
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 0;
`;

const GridOverlay = styled.div`
    position: absolute;
    inset: 0;
    z-index: 0;
    background-image:
        linear-gradient(
            ${({ $gridColor }) => $gridColor || "rgba(247, 255, 149, 0.15)"} 1px,
            transparent 1px
        ),
        linear-gradient(
            90deg,
            ${({ $gridColor }) => $gridColor || "rgba(247, 255, 149, 0.15)"} 1px,
            transparent 1px
        );
    background-size: 60px 60px;
`;

const ContentArea = styled.div`
    position: relative;
    z-index: 1;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 60px 80px;
    max-width: 846px;
    margin: 0 auto;
    width: 100%;
    box-sizing: border-box;

    ${media.mobile(`
        padding: 40px 20px;
    `)}

    p {
        font-family: "logic-monospace", monospace;
        font-size: 24px;
        font-weight: 400;
        line-height: 1.25;
        letter-spacing: -0.96px;
        color: #fff;
        margin: 0 0 16px;
        text-align: center;

        ${media.mobile(`
            font-size: 19px;
            letter-spacing: -0.76px;
            line-height: 1.35;
        `)}
    }

    strong {
        font-weight: 700;
    }
`;

function scrambleElement(element) {
    const textNodes = [];
    const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT);
    while (walker.nextNode()) textNodes.push(walker.currentNode);

    const originals = textNodes.map((n) => n.textContent);
    let frame = 0;
    const totalFrames = 8;

    const interval = setInterval(() => {
        if (frame >= totalFrames) {
            textNodes.forEach((n, i) => {
                n.textContent = originals[i];
            });
            clearInterval(interval);
            return;
        }

        textNodes.forEach((n, i) => {
            n.textContent = originals[i]
                .split("")
                .map((char) => {
                    if (char === " " || char === "\n") return char;
                    return Math.random() > 0.4
                        ? GLITCH_CHARS[
                              Math.floor(Math.random() * GLITCH_CHARS.length)
                          ]
                        : char;
                })
                .join("");
        });

        frame++;
    }, 50);
}

export default function DataGridSlide({
    sectionTitle,
    headingColor,
    gridColor,
    backgroundVideo,
    poster,
    backgroundColor,
    children,
    scrollProgress,
}) {
    const trackRef = useRef();
    const contentRef = useRef();
    const itemsRef = useRef([]);
    const revealedRef = useRef(new Set());
    const [itemCount, setItemCount] = useState(0);

    const trackHeight = itemCount > 0 ? `${itemCount * 100}vh` : "100vh";
    const trackMargin = itemCount > 0 ? "-100vh" : "0";

    const { scrollYProgress } = useScroll({
        target: trackRef,
        offset: ["start start", "end end"],
    });

    const activeProgress = scrollProgress || scrollYProgress;
    const videoRef = useScrollVideo(activeProgress);

    // Count <p> elements and setup items
    useLayoutEffect(() => {
        const el = trackRef.current;
        if (!el) return;

        // Appear-in-place: z-index + initially hidden
        const siblings = Array.from(el.parentElement.children);
        el.style.zIndex = siblings.indexOf(el) + 1;
        el.style.opacity = "0";

        const ps = contentRef.current?.querySelectorAll("p");
        if (ps && ps.length > 0) {
            const items = Array.from(ps).map((p) => {
                const parent = p.parentElement;
                const target = parent === contentRef.current ? p : parent;
                return { p, target };
            });
            itemsRef.current = items;
            setItemCount(ps.length);

            items.forEach(({ p, target }, i) => {
                target.style.transition = "opacity 0.3s ease";
                if (i === 0) {
                    target.style.opacity = "1";
                    revealedRef.current.add(0);
                } else {
                    target.style.opacity = "0";
                }
            });
        }
    }, []);

    // Appear-in-place: show when scrolled to top
    useEffect(() => {
        const el = trackRef.current;
        if (!el) return;
        const handleScroll = () => {
            el.style.opacity = el.getBoundingClientRect().top <= 0 ? "1" : "0";
        };
        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Sequential reveal with scramble
    useEffect(() => {
        const items = itemsRef.current;
        if (items.length === 0) return;

        const unsubscribe = scrollYProgress.on("change", (v) => {
            const count = Math.min(
                Math.floor(v * items.length) + 1,
                items.length,
            );

            items.forEach(({ p, target }, i) => {
                if (i < count) {
                    target.style.opacity = "1";
                    if (!revealedRef.current.has(i)) {
                        revealedRef.current.add(i);
                        scrambleElement(p);
                    }
                } else {
                    target.style.opacity = "0";
                    revealedRef.current.delete(i);
                }
            });
        });

        return unsubscribe;
    }, [scrollYProgress]);

    return (
        <ScrollTrack ref={trackRef} $height={trackHeight} $margin={trackMargin}>
            <StickyInner>
                <Slide $bg={backgroundColor}>
                    {backgroundVideo && (
                        <BackgroundVideo
                            ref={videoRef}
                            src={getAssetPath(backgroundVideo)}
                            poster={poster ? getAssetPath(poster) : undefined}
                            muted
                            playsInline
                            preload="auto"
                        />
                    )}
                    <GridOverlay $gridColor={gridColor} />
                    {sectionTitle && (
                        <SectionHeadingBar color={headingColor}>
                            {sectionTitle}
                        </SectionHeadingBar>
                    )}
                    <ContentArea ref={contentRef}>
                        {children}
                        <p aria-hidden style={{ position: "absolute", visibility: "hidden" }} />
                    </ContentArea>
                </Slide>
            </StickyInner>
        </ScrollTrack>
    );
}
