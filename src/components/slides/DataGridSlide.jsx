import { useRef, useLayoutEffect, useEffect, useState } from "react";
import styled from "styled-components";
import { media } from "../../utils/breakpoints";
import { getAssetPath } from "../../utils/assetPath";
import useIsMobile from "../../hooks/useIsMobile";
import SectionHeadingBar from "./SectionHeadingBar";
import LottieAnimation from "../LottieAnimation";
import ResponsiveLottieAnimation from "../ResponsiveLottieAnimation";

const GLITCH_CHARS =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&*!?<>{}[]~/\\|";

const SlideWrapper = styled.div`
    position: relative;
    height: 200vh;
`;

const StickyInner = styled.div`
    position: sticky;
    top: 0;
    height: 100lvh;
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

const BackgroundImage = styled.div`
    position: absolute;
    inset: 0;
    background-image: url(${({ $src }) => $src});
    background-size: cover;
    background-position: center;
    z-index: 0;
`;

const BackgroundVideo = styled.video`
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 0;
`;

const BackgroundLottie = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    ${({ $top, $bottom, $height }) => {
        if ($height) {
            // Custom height: only apply the specified anchor, default to bottom: 0
            if ($top != null) return `top: ${$top};`;
            return `bottom: ${$bottom || "0"};`;
        }
        // No custom height: fill the parent
        return "top: 0; bottom: 0;";
    }}
    width: 100%;
    height: ${({ $height }) => $height || "100%"};
    z-index: 0;
    overflow: hidden;

    ${({ $mobileScale }) =>
        $mobileScale
            ? media.mobile(`
                transform: scale(${$mobileScale});
                transform-origin: center;
            `)
            : ""}
`;

const ScaleInImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
    transform: scale(${({ $visible }) => ($visible ? 1 : 0.5)});
    opacity: ${({ $visible }) => ($visible ? 1 : 0)};
    transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.5s ease-out;
`;

const HEADING_BAR_MOBILE = 107;
const TAB_NAV_MOBILE = 40;

const MobileContentHeight = styled.div`
    width: 100%;
    display: contents;

    @media (max-width: 767px) {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        min-height: calc(
            100dvh -
                ${({ $hasHeader }) => ($hasHeader ? HEADING_BAR_MOBILE : 0)}px -
                ${TAB_NAV_MOBILE}px
        );

        > * {
            margin-top: 0;
        }
    }
`;

const ContentArea = styled.div`
    position: relative;
    z-index: 1;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 60px 80px;
    max-width: ${({ $maxWidth }) => $maxWidth || "846px"};
    margin: 0 auto;
    width: 100%;
    box-sizing: border-box;

    ${media.mobile(`
        padding: 10px 20px;
        align-items: flex-start;
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

        ${media.wide(`
            font-size: 42px;
            letter-spacing: -1.7px;
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
    headingBordered,
    headingFontFamily,
    headingFontWeight,
    backgroundVideo,
    backgroundImage,
    lottieAnimation,
    lottieHeight,
    lottieBottom,
    lottieTop,
    poster,
    backgroundColor,
    maxWidth,
    children,
    mobileScale,
    mobileBackgroundImage,
    mobileLottieAnimation,
    lottieLoop = true,
    revealInterval = 500,
}) {
    const isMobile = useIsMobile();
    const slideRef = useRef();
    const contentRef = useRef();
    const itemsRef = useRef([]);
    const revealedRef = useRef(new Set());
    const hasStartedRef = useRef(false);
    const hasAppearedRef = useRef(false);
    const [hasAppeared, setHasAppeared] = useState(false);

    // Appear-in-place: z-index stacking + show when scrolled into position
    useLayoutEffect(() => {
        const el = slideRef.current;
        if (!el) return;
        const siblings = Array.from(el.parentElement.children);
        el.style.zIndex = siblings.indexOf(el) + 1;
        el.style.opacity = "0";
    }, []);

    useEffect(() => {
        const el = slideRef.current;
        if (!el) return;
        const handleScroll = () => {
            const appeared = el.getBoundingClientRect().top <= 0;
            el.style.opacity = appeared ? "1" : "0";
            if (appeared && !hasAppearedRef.current) {
                hasAppearedRef.current = true;
                setHasAppeared(true);
            }
        };
        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Count <p> elements and setup items - initially hide all except first
    useLayoutEffect(() => {
        const ps = contentRef.current?.querySelectorAll("p");
        if (ps && ps.length > 0) {
            const items = Array.from(ps).map((p) => {
                const parent = p.parentElement;
                const target = parent === contentRef.current ? p : parent;
                return { p, target };
            });
            itemsRef.current = items;

            items.forEach(({ target }, i) => {
                target.style.transition = "opacity 50ms ease";
                if (i === 0) {
                    target.style.opacity = "1";
                    revealedRef.current.add(0);
                } else {
                    target.style.opacity = "0";
                }
            });
        }
    }, []);

    // Auto-reveal items sequentially when slide enters viewport
    useEffect(() => {
        const el = slideRef.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasStartedRef.current) {
                    hasStartedRef.current = true;
                    const items = itemsRef.current;
                    let currentIndex = 1; // 0 is already revealed

                    const interval = setInterval(() => {
                        if (currentIndex >= items.length) {
                            clearInterval(interval);
                            return;
                        }
                        const { p, target } = items[currentIndex];
                        target.style.opacity = "1";
                        revealedRef.current.add(currentIndex);
                        scrambleElement(p);
                        currentIndex++;
                    }, revealInterval);
                }
            },
            { threshold: 0.3 },
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <SlideWrapper ref={slideRef} data-slide>
            <StickyInner>
            <Slide $bg={backgroundColor}>
                {isMobile && mobileBackgroundImage && (
                    <BackgroundImage $src={getAssetPath(mobileBackgroundImage)} />
                )}
                {isMobile && mobileLottieAnimation ? (
                    <BackgroundLottie
                        $height="100%"
                        $mobileScale={mobileScale}
                    >
                        <LottieAnimation
                            path={mobileLottieAnimation}
                            loop={false}
                            autoplay={true}
                            width="100%"
                            height="100%"
                            preserveAspectRatio="xMidYMid meet"
                        />
                    </BackgroundLottie>
                ) : lottieAnimation && (
                    <BackgroundLottie
                        $height={lottieHeight}
                        $bottom={lottieBottom}
                        $top={lottieTop}
                        $mobileScale={mobileScale}
                    >
                        <ResponsiveLottieAnimation
                            animations={lottieAnimation}
                            loop={lottieLoop}
                            autoplay={true}
                            width="100%"
                            height="100%"
                            preserveAspectRatio={
                                lottieHeight
                                    ? "xMidYMid meet"
                                    : "xMidYMid slice"
                            }
                        />
                    </BackgroundLottie>
                )}
                {backgroundImage && !lottieAnimation && (
                    <BackgroundLottie
                        $height={lottieHeight}
                        $bottom={lottieBottom}
                        $top={lottieTop}
                        $mobileScale={mobileScale}
                    >
                        <ScaleInImg
                            src={getAssetPath(backgroundImage)}
                            $visible={hasAppeared}
                            alt=""
                        />
                    </BackgroundLottie>
                )}
                {backgroundVideo && !lottieAnimation && (
                    <BackgroundVideo
                        src={getAssetPath(backgroundVideo)}
                        poster={poster ? getAssetPath(poster) : undefined}
                        muted
                        playsInline
                        autoPlay
                        loop
                    />
                )}
                {sectionTitle && (
                    <SectionHeadingBar
                        color={headingColor}
                        bordered={headingBordered}
                        fontFamily={headingFontFamily}
                        fontWeight={headingFontWeight}
                    >
                        {sectionTitle}
                    </SectionHeadingBar>
                )}
                <ContentArea ref={contentRef} $maxWidth={maxWidth}>
                    <MobileContentHeight $hasHeader={!!sectionTitle}>
                        {children}
                    </MobileContentHeight>
                    <p
                        aria-hidden
                        style={{
                            position: "absolute",
                            visibility: "hidden",
                        }}
                    />
                </ContentArea>
            </Slide>
            </StickyInner>
        </SlideWrapper>
    );
}
