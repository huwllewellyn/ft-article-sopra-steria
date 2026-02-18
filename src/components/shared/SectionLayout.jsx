/* eslint-disable react-refresh/only-export-components */
import styled from "styled-components";
import { motion } from "framer-motion";
import React, { useState, useEffect, useRef } from "react";
import { media, getCurrentBreakpoint } from "../../utils/breakpoints";

// ============================================================================
// CORE CONSTANTS
// ============================================================================

export const CIRCLE_SIZE = 22.8;

// ============================================================================
// UTILITY COMPONENTS
// ============================================================================

export const MobileBreak = styled.div`
    display: none;
    height: ${(props) => props.height || "1em"};

    ${media.mobile(`
        display: block;
    `)}
`;

export const DesktopBreak = styled.div`
    display: block;
    height: ${(props) => props.height || "1em"};

    ${media.mobile(`
        display: none;
    `)}
`;

export const TabletBreak = styled.div`
    display: none;
    height: ${(props) => props.height || "1em"};

    ${media.tablet(`
        display: block;
    `)}
`;

export const Spacer = styled.div`
    height: ${(props) => props.height || "16px"};
`;

// ============================================================================
// HOOKS
// ============================================================================

export const useDrawingAnimation = (animationDuration = 5, reverse = false) => {
    const [inView, setInView] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                }
            },
            { threshold: 0.1, rootMargin: "0px 0px -10% 0px" }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, []);

    const animatePathChildren = (children) => {
        return React.Children.map(children, (child) => {
            if (React.isValidElement(child) && child.type === "path") {
                // --- THE FIX ---
                // We define specific animation variants for Normal vs Reverse

                const variants = {
                    hidden: {
                        pathLength: 0,
                        pathOffset: reverse ? 1.5 : 0, // If reverse, start the dash at the very end
                    },
                    visible: {
                        pathLength: 1.5, // Overshoot slightly to ensure full closure
                        pathOffset: 0, // Always end at 0 offset (covering the whole line)
                    },
                };

                return (
                    <motion.path
                        key={child.key}
                        {...child.props}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        variants={variants}
                        transition={{
                            duration: animationDuration,
                            ease: "easeInOut",
                        }}
                    />
                );
            }
            return child;
        });
    };

    return { ref, animatePathChildren, inView };
};

export const useIndependentParagraphAnimation = (animationDuration = 0.6) => {
    const [inView, setInView] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                }
            },
            { threshold: 0.1, rootMargin: "0px 0px -10% 0px" }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, []);

    const variants = {
        hidden: { opacity: 0, y: 80 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: animationDuration, ease: "easeOut" },
        },
    };

    return { ref, variants, inView };
};

// ============================================================================
// BACKGROUND & CONTAINER
// ============================================================================

export const BackgroundContainer = styled.div`
    width: 100%;
    background: ${(props) => props.backgroundColor || "#f2f0ea"};
    z-index: -1;
`;

export const Container = styled.section`
    width: 100%;
    max-width: ${(props) => props.maxWidth || "1036px"};
    margin: 0 auto;
    padding: ${(props) => props.padding || "0px 40px"};
    font-family: "dm-sans", "DM Sans", -apple-system, BlinkMacSystemFont,
        "Segoe UI", sans-serif;
    position: relative;

    ${media.mobile(`
        padding: 0px 20px};
    `)}
`;

export const ContentWrapper = styled.div`
    margin: 0 auto;
    position: relative;
`;

// ============================================================================
// SVG WRAPPERS
// ============================================================================

const StyledSVGWrapper = styled(motion.svg)`
    top: 0;
    left: 0;
    width: 100%;
    height: ${(props) => props.height || "150px"};
    pointer-events: none;
    display: block;

    ${(props) =>
        props.desktopHeight &&
        `
        @media (min-width: ${1024}px) {
            height: ${props.desktopHeight};
        }
    `}

    ${(props) =>
        props.tabletHeight &&
        `
        @media (min-width: ${768}px) and (max-width: ${1023}px) {
            height: ${props.tabletHeight};
        }
    `}

    ${(props) =>
        props.mobileHeight &&
        `
        @media (max-width: ${767}px) {
            height: ${props.mobileHeight};
        }
    `}
`;

export const SVGWrapper = React.forwardRef(
    ({
        children,
        animationDuration = 1,
        reverse = false,
        height,
        desktopHeight,
        tabletHeight,
        mobileHeight,
        ...props
    }) => {
        const { ref: internalRef, animatePathChildren } = useDrawingAnimation(
            animationDuration,
            reverse
        );
        const animatedChildren = animatePathChildren(children);

        return (
            <StyledSVGWrapper
                ref={internalRef}
                height={height}
                desktopHeight={desktopHeight}
                tabletHeight={tabletHeight}
                mobileHeight={mobileHeight}
                {...props}
            >
                {animatedChildren}
            </StyledSVGWrapper>
        );
    }
);

export const FirstSVGWrapper = (props) => (
    <SVGWrapper
        {...props}
        style={{ transform: "translateY(10px)", ...props.style }}
    />
);

export const FullWidthSVGWrapper = (props) => (
    <SVGWrapper {...props} style={{ width: "100%", ...props.style }} />
);

export const HalfWidthRightSVGWrapper = (props) => (
    <SVGWrapper
        {...props}
        height={props.height || "200px"}
        style={{ width: "50%", marginLeft: "50%", ...props.style }}
    />
);

export const HalfWidthLeftSVGContainer = styled.div`
    position: relative;
    width: 50%;
    margin-right: auto;
`;

export const HalfWidthRightSVGContainer = styled.div`
    position: relative;
    width: 50%;
    margin-left: auto;
`;

export const HalfWidthRightParagraph = styled.div`
    z-index: 1;
    position: relative;
    width: 50%;
    margin-left: auto;
    margin-right: 10%;
    padding-left: 40px;
    background: ${(props) => props.backgroundColor || "transparent"};
    outline: 3px solid ${(props) => props.backgroundColor || "transparent"};

    ${media.tablet(`
        width: 60%;
    `)}
    ${media.mobile(`
        width: 80%;
    `)}
`;

export const HalfWidthLeftParagraph = styled.div`
    position: relative;
    width: 50%;
    margin-right: auto;
    padding-right: 40px;
    background: ${(props) => props.backgroundColor || "transparent"};
    outline: 3px solid ${(props) => props.backgroundColor || "transparent"};
    z-index: 1;

    ${media.tablet(`
        width: 60%;
    `)}
    ${media.mobile(`
        width: 90%;
    `)}
`;

const StyledQuoteSVG = styled(motion.svg)`
    width: 100%;
    height: 100%;
    display: block;
`;

export const QuoteSVGWrapper = React.forwardRef(
    ({ children, animationDuration = 1, reverse = false, ...props }) => {
        const { ref: internalRef, animatePathChildren } = useDrawingAnimation(
            animationDuration,
            reverse
        );
        const animatedChildren = animatePathChildren(children);

        return (
            <StyledQuoteSVG ref={internalRef} {...props}>
                {animatedChildren}
            </StyledQuoteSVG>
        );
    }
);

export const IntroLoopSVG = React.forwardRef(
    (
        {
            animationDuration = 1,
            height = "450px",
            tabletHeight = "300px",
            mobileHeight = "200px",
            ...props
        },
        ref
    ) => (
        <SVGWrapper
            ref={ref}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 523 469"
            fill="none"
            preserveAspectRatio="none"
            height={height}
            tabletHeight={tabletHeight}
            mobileHeight={mobileHeight}
            animationDuration={animationDuration}
            {...props}
        >
            <path
                d="M521.5 0V247.5C521.667 257.5 521.5 279 512 294.5C510 297.763 499 323 443 323H367.5H0.5V469"
                stroke="black"
                strokeWidth="1"
                vectorEffect="non-scaling-stroke"
            />
        </SVGWrapper>
    )
);

export const QuoteSVG = React.forwardRef(
    (
        { animationDuration = 1, reverse = false, tall = false, ...props },
        ref
    ) => {
        const [isMobile, setIsMobile] = useState(
            () => getCurrentBreakpoint() === "mobile"
        );

        useEffect(() => {
            const handleResize = () => {
                setIsMobile(getCurrentBreakpoint() === "mobile");
            };
            window.addEventListener("resize", handleResize);
            return () => window.removeEventListener("resize", handleResize);
        }, []);

        if (isMobile) {
            if (tall) {
                return (
                    <QuoteSVGWrapper
                        ref={ref}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 383 484"
                        fill="none"
                        preserveAspectRatio="none"
                        animationDuration={animationDuration}
                        reverse={reverse}
                        {...props}
                    >
                        <path
                            d="M1 345.501C1.00007 360.299 14.4132 372.387 31.0781 372.388H169.612C182.163 372.388 192.434 381.511 192.435 392.879V484H191.435V392.879C191.434 382.164 181.718 373.388 169.612 373.388H31.0781C13.9674 373.387 7.39752e-05 360.952 0 345.501V321.336H1V345.501ZM190.5 57.8359H355.142C370.527 57.8362 383 70.3085 383 85.6943V128.578H382V85.6943C382 70.8608 369.975 58.8362 355.142 58.8359H189.979V58H189.5V0H190.5V57.8359Z"
                            fill="black"
                            vectorEffect="non-scaling-stroke"
                        />
                    </QuoteSVGWrapper>
                );
            }
            return (
                <QuoteSVGWrapper
                    ref={ref}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 343 307"
                    fill="none"
                    preserveAspectRatio="none"
                    animationDuration={animationDuration}
                    reverse={reverse}
                    {...props}
                >
                    <path
                        d="M342.5 76.9568L342.5 27.8589C342.5 12.749 330.251 0.500031 315.141 0.500031L80.5 0.500038M0.49998 182.834L0.499978 209.137C0.499977 225.6 13.5451 238.947 29.6371 238.947L49.0255 238.947L113.932 238.947L152.567 238.947C164.315 238.947 173.838 248.689 173.838 260.707L173.838 306.5"
                        stroke="black"
                        strokeWidth="1"
                        vectorEffect="non-scaling-stroke"
                    />
                </QuoteSVGWrapper>
            );
        }

        return (
            <QuoteSVGWrapper
                ref={ref}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1038 778"
                fill="none"
                preserveAspectRatio="none"
                animationDuration={animationDuration}
                reverse={reverse}
                {...props}
            >
                <path
                    d="M1037 378.484L1037 221.996C1037 166.768 992.23 121.996 937.002 121.996L0.499935 121.996L0.499946 -9.06139e-05M1.50065 328.499L1.50063 542.999C1.50063 598.227 46.2722 642.999 101.501 642.999L301 642.999L346.502 642.999L447.394 642.999C487.85 642.999 520.591 675.9 520.393 716.355L520.393 777.5"
                    stroke="black"
                    strokeWidth="1"
                    vectorEffect="non-scaling-stroke"
                />
            </QuoteSVGWrapper>
        );
    }
);

const StyledFinalQuoteSVG = styled(motion.svg)`
    width: 100%;
    height: ${(props) => props.height || "100%"};
    display: block;

    ${(props) =>
        props.desktopHeight &&
        `
        @media (min-width: ${1024}px) {
            height: ${props.desktopHeight};
        }
    `}

    ${(props) =>
        props.tabletHeight &&
        `
        @media (min-width: ${768}px) and (max-width: ${1023}px) {
            height: ${props.tabletHeight};
        }
    `}

    ${(props) =>
        props.mobileHeight &&
        `
        @media (max-width: ${767}px) {
            height: ${props.mobileHeight};
        }
    `}
`;

export const FinalQuoteSVGWrapper = React.forwardRef(
    ({ children, animationDuration = 1, reverse = false, ...props }) => {
        const { ref: internalRef, animatePathChildren } = useDrawingAnimation(
            animationDuration,
            reverse
        );
        const animatedChildren = animatePathChildren(children);

        return (
            <StyledFinalQuoteSVG ref={internalRef} {...props}>
                {animatedChildren}
            </StyledFinalQuoteSVG>
        );
    }
);

export const FinalQuoteSVG = React.forwardRef(
    ({ animationDuration = 1, reverse = false, ...props }, ref) => {
        const [isMobile, setIsMobile] = useState(
            () => getCurrentBreakpoint() === "mobile"
        );

        useEffect(() => {
            const handleResize = () => {
                setIsMobile(getCurrentBreakpoint() === "mobile");
            };
            window.addEventListener("resize", handleResize);
            return () => window.removeEventListener("resize", handleResize);
        }, []);

        if (isMobile) {
            return (
                <FinalQuoteSVGWrapper
                    ref={ref}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 443"
                    fill="none"
                    preserveAspectRatio="none"
                    animationDuration={animationDuration}
                    reverse={reverse}
                    {...props}
                >
                    <path
                        d="M0.499973 183.172L0.499968 140.359C0.499967 125.249 12.749 113 27.8588 113L193 113L193 -1.40277e-05M383.5 276.999L383.5 301.14C383.5 316.25 368.805 328.499 350.678 328.499L248.535 328.499L260.23 328.499L181.953 328.499L181.953 443"
                        stroke="black"
                        strokeWidth="1"
                        vectorEffect="non-scaling-stroke"
                    />
                </FinalQuoteSVGWrapper>
            );
        }

        return (
            <FinalQuoteSVGWrapper
                ref={ref}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1038 558"
                fill="none"
                preserveAspectRatio="none"
                animationDuration={animationDuration}
                reverse={reverse}
                {...props}
            >
                <path
                    d="M1037.5 243.364V457C1037.5 512.228 992.729 557 937.5 557H15.4639M0.5 384.856L0.5 226.513C0.5 171.285 45.2715 126.513 100.5 126.513L521 126.945V0"
                    stroke="black"
                    strokeWidth="1"
                    vectorEffect="non-scaling-stroke"
                />
            </FinalQuoteSVGWrapper>
        );
    }
);

// ============================================================================
// CIRCLES
// ============================================================================

const StyledCircle = styled.div`
    width: ${CIRCLE_SIZE}px;
    height: ${CIRCLE_SIZE}px;
    border-radius: 50%;
    background-color: #000000;
    flex-shrink: 0;
    margin-right: 16px;
    transform: translateX(-50%);
    opacity: 0;

    ${(props) =>
        props.$animate &&
        `
        animation: circleScaleIn 0.6s 0.2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
    `}

    @keyframes circleScaleIn {
        from {
            scale: 0;
            opacity: 0;
        }
        to {
            scale: 1;
            opacity: 1;
        }
    }

    ${(props) =>
        props.hideOnMobile &&
        media.mobile(`
            display: none;
        `)}

    ${(props) =>
        props.showOnlyOnMobile &&
        `
        display: none;
        ${media.mobile(`
            display: block;
        `)}
    `}

    ${(props) =>
        props.hideOnTablet &&
        media.tablet(`
            display: none;
        `)}
`;

export const Circle = React.forwardRef(
    ({ children, hideOnMobile, showOnlyOnMobile, ...props }) => {
        const [inView, setInView] = useState(false);
        const circleRef = useRef(null);

        useEffect(() => {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setInView(true);
                    }
                },
                { threshold: 0.1, rootMargin: "0px 0px -10% 0px" }
            );

            if (circleRef.current) {
                observer.observe(circleRef.current);
            }

            return () => observer.disconnect();
        }, []);

        return (
            <StyledCircle
                ref={circleRef}
                $animate={inView}
                hideOnMobile={hideOnMobile}
                showOnlyOnMobile={showOnlyOnMobile}
                {...props}
            >
                {children}
            </StyledCircle>
        );
    }
);

export const AboveTopLeftCircle = styled(Circle)`
    ${(props) =>
        props.left || props.tabletLeft || props.mobileLeft
            ? "position:absolute"
            : ""};
    left: ${(props) => props.left || "auto"};
    transform: translateX(-50%) translateY(-10px);

    ${(props) =>
        props.tabletLeft &&
        media.tablet(`
            left: ${props.tabletLeft};
        `)}

    ${(props) =>
        props.mobileLeft &&
        media.mobile(`
            left: ${props.mobileLeft};
        `)}
`;

export const TopLeftCircle = styled(Circle)`
    position: absolute;
    left: ${(props) => props.left || `-${CIRCLE_SIZE / 2}px`};
    margin-bottom: auto;
    top: -${CIRCLE_SIZE / 2}px;
    transform: none;
`;

export const TopRightCircle = styled(Circle)`
    position: absolute;
    right: -${1.5 * CIRCLE_SIZE}px;
    margin-bottom: auto;
    top: -${CIRCLE_SIZE / 2}px;
    transform: none;
`;

export const ParagraphFourCircle = styled(Circle)`
    position: relative;
    left: -${CIRCLE_SIZE}px;
    margin-bottom: auto;
    margin-top: ${CIRCLE_SIZE / 3}px;
    transform: none;
`;

export const ParagraphFiveCircle = styled(Circle)`
    margin-right: 0;
    flex-shrink: 0;
    transform: none;
`;

export const ParagraphSixCircle = styled(Circle)`
    margin-right: 0;
    flex-shrink: 0;
    transform: none;
`;

export const BottomCenterCircle = styled(Circle)`
    position: absolute;
    bottom: ${-CIRCLE_SIZE / 2}px;
    left: ${(props) => props.left || "50%"};
    margin-right: 0;
    flex-shrink: 0;
    transform: none;
`;

export const TopCenterCircle = styled(Circle)`
    position: absolute;
    top: ${-CIRCLE_SIZE / 2}px;
    left: ${(props) => props.left || `calc(50% - ${CIRCLE_SIZE / 1.8}px)`};
    margin-right: 0;
    flex-shrink: 0;
    transform: none;
`;

export const BottomLeftCircle = styled(Circle)`
    position: absolute;
    bottom: ${-CIRCLE_SIZE / 2}px;
    left: ${(props) => props.left || `-${CIRCLE_SIZE / 2}px`};
    margin-right: 0;
    flex-shrink: 0;
    transform: none;

    ${(props) =>
        props.mobileLeft &&
        media.mobile(`
            left: ${props.mobileLeft};
        `)}
`;

export const BottomRightCircle = styled(Circle)`
    position: absolute;
    bottom: ${-CIRCLE_SIZE / 2}px;
    right: ${-CIRCLE_SIZE / 2}px;
    margin-right: 0;
    flex-shrink: 0;
    transform: none;
`;

export const NotQuiteBottomRightCircle = styled(Circle)`
    position: absolute;
    bottom: ${-CIRCLE_SIZE / 2}px;
    right: calc(2% + ${CIRCLE_SIZE / 2}px);
    flex-shrink: 0;
    transform: none;
`;

// ============================================================================
// TEXT & PARAGRAPH STYLES
// ============================================================================

const StyledParagraph = styled(motion.p)`
    line-height: 1.2;
    color: #000000;
    margin: 0;
    letter-spacing: 0;
    font-family: "dm-sans", "DM Sans", -apple-system, BlinkMacSystemFont,
        "Segoe UI", sans-serif;
    text-align: left;

    font-size: 19px;
    font-weight: 400;

    ${media.tablet(`
        font-weight: 400;
        font-size: 19px;
    `)}

    ${media.mobile(`
        font-weight: 300;
        font-size: 16px;
    `)}

    ${media.wide(`
        font-size: 35px;
    `)}

    &:last-child {
        margin-bottom: 0;
    }

    a {
        color: #000000;
        text-decoration: underline;
        transition: opacity 0.2s ease;

        &:hover {
            opacity: 0.7;
        }
    }
`;

export const Paragraph = React.forwardRef(
    ({ children, animationDuration = 0.6, ...props }) => {
        const {
            ref: animationRef,
            variants,
            inView,
        } = useIndependentParagraphAnimation(animationDuration);

        return (
            <motion.div
                ref={animationRef}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={variants}
            >
                <StyledParagraph {...props}>{children}</StyledParagraph>
            </motion.div>
        );
    }
);

export const ParagraphFourText = styled.span`
    flex: 1;
    display: block;
`;

export const ParagraphFive = styled(Paragraph)`
    width: 50%;
    display: flex;
    align-items: flex-start;
    padding-right: 32px;
`;

export const ParagraphSixWrapper = styled(motion.div)`
    max-width: 518px;
    margin: -20px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
`;

export const ParagraphSix = styled(Paragraph)`
    text-align: left;
    max-width: 100%;
`;

// ============================================================================
// QUOTE WRAPPERS
// ============================================================================

export const LeftToBottomQuoteWrapper = styled(motion.div)`
    position: relative;
    background: transparent;
    height: ${(props) => props.height || "940px"};
    ${(props) =>
        props.desktopHeight &&
        `
        @media (min-width: ${1024}px) {
            height: ${props.desktopHeight};
        }
    `}

    ${(props) =>
        props.tabletHeight &&
        `
        @media (min-width: ${768}px) and (max-width: ${1023}px) {
            height: ${props.tabletHeight};
        }
    `}

    ${(props) =>
        props.mobileHeight &&
        `
        @media (max-width: ${767}px) {
            height: ${props.mobileHeight};
        }
    `}
`;

export const QuoteContent = styled(motion.div)`
    position: absolute;
    bottom: 15px;
    left: 0;
    height: ${(props) => props.height || "100%"};
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 40px;
    padding-bottom: 80px;
    padding-top: 110px;
    ${media.tablet(`

    `)}
    ${media.mobile(`
        padding-bottom: 20px;
        padding-top: unset;
    `)}

    ${(props) =>
        props.desktopHeight &&
        `
        @media (min-width: ${1024}px) {
            height: ${props.desktopHeight};
        }
    `}

    ${(props) =>
        props.tabletHeight &&
        `
        @media (min-width: ${768}px) and (max-width: ${1023}px) {
            height: ${props.tabletHeight};
        }
    `}

    ${(props) =>
        props.mobileHeight &&
        `
        @media (max-width: ${767}px) {
            height: ${props.mobileHeight};
        }
    `}
`;

export const FinalLeftToBottomQuoteWrapper = styled(motion.div)`
    position: relative;
    background: transparent;
    height: ${(props) => props.height || "auto"};

    ${(props) =>
        props.desktopHeight &&
        `
        @media (min-width: ${1024}px) {
            height: ${props.desktopHeight};
        }
    `}

    ${(props) =>
        props.tabletHeight &&
        `
        @media (min-width: ${768}px) and (max-width: ${1023}px) {
            height: ${props.tabletHeight};
        }
    `}

    ${(props) =>
        props.mobileHeight &&
        `
        @media (max-width: ${767}px) {
            height: ${props.mobileHeight};
        }
    `}
`;

export const FinalQuoteContent = styled(motion.div)`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 50px;
    ${media.mobile(`
        padding-bottom: 160px;
    `)}
`;

// ============================================================================
// ANIMATION VARIANTS
// ============================================================================

export const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
};

export const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

export const paragraphFourVariants = {
    hidden: { opacity: 0, y: 20, x: "40%", scaleX: 1 },
    visible: {
        opacity: 1,
        y: -20,
        x: "40%",
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

export const paragraphFiveVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: -CIRCLE_SIZE,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

export const polycrisisContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.1,
        },
    },
};

export const polycrisisItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};
