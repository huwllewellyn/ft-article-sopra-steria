import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { media } from "../../utils/breakpoints";
import SectionHeadingBar from "./SectionHeadingBar";

const Slide = styled.section`
    min-height: 100vh;
    background: ${({ $bg }) => $bg || "#f7ff95"};
    color: #000;
    display: flex;
    flex-direction: column;
`;

const ContentArea = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: ${({ $align }) =>
        $align === "bottom" ? "flex-end" : "center"};
    align-items: center;
    padding: ${({ $align }) =>
        $align === "bottom" ? "60px 80px 120px" : "60px 80px"};
    max-width: 846px;
    margin: 0 auto;
    width: 100%;
    box-sizing: border-box;

    ${media.mobile(`
        padding: 40px 20px;
    `)}

    strong {
        font-weight: 700;
    }

    a {
        color: inherit;
        text-decoration: underline;
    }
`;

export const EditorialBody = styled.div`
    p {
        font-family: "logic-monospace", monospace;
        font-size: 24px;
        font-weight: 500;
        line-height: 1.35;
        letter-spacing: -0.96px;
        color: #000;
        margin: 0 0 16px;
        text-align: center;

        ${media.tablet(`
            font-size: 21px;
            letter-spacing: -0.84px;
        `)}

        ${media.mobile(`
            font-size: 19px;
            letter-spacing: -0.76px;
            color: #222;
            text-align: left;
        `)}

        ${media.wide(`
            font-size: 42px;
            letter-spacing: -1.7px;
        `)}
    }
`;

export default function EditorialSlide({
    sectionTitle,
    children,
    backgroundColor,
    headingColor,
    contentAlign,
}) {
    const contentRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        let trackEl = null;
        let isAppearInPlace = false;

        const handleScroll = () => {
            const el = contentRef.current;
            if (!el || isVisible) return;

            // Walk up to find the appear-in-place track ancestor (has inline opacity set)
            if (!trackEl) {
                let node = el.parentElement;
                while (node && node !== document.body) {
                    if (node.style.opacity !== "") {
                        trackEl = node;
                        isAppearInPlace = true;
                        break;
                    }
                    node = node.parentElement;
                }
                trackEl = trackEl || el;
            }

            const rect = trackEl.getBoundingClientRect();
            if (isAppearInPlace) {
                // Appear-in-place: trigger when track reaches top of viewport
                if (rect.top <= 0 && rect.bottom > 0) {
                    setIsVisible(true);
                }
            } else {
                // Normal scroll-in: trigger when element is halfway up the page
                if (rect.top <= window.innerHeight / 2) {
                    setIsVisible(true);
                }
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isVisible]);

    return (
        <Slide $bg={backgroundColor}>
            {sectionTitle && (
                <SectionHeadingBar color={headingColor}>
                    {sectionTitle}
                </SectionHeadingBar>
            )}
            <ContentArea
                ref={contentRef}
                as={motion.div}
                $align={contentAlign}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
            >
                {children}
            </ContentArea>
        </Slide>
    );
}
