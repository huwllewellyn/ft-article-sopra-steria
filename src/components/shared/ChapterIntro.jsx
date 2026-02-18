import { useState, useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import { media } from "../../utils/breakpoints";
import { glitchEffect } from "../../utils/glitchEffect";

const Container = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
`;

const ChapterLabel = styled.p`
    font-family: "Space Grotesk", sans-serif;
    font-size: 30px;
    font-weight: 500;
    text-transform: uppercase;
    color: #ffffff;
    line-height: 1.2;
    margin: 0;
    max-width: 408px;
    background: #000;
    padding: 4px 8px;
    ${glitchEffect}

    ${media.tablet(`
        font-size: 25px;
    `)}

    ${media.mobile(`
        font-size: 21px;
    `)}

    ${media.wide(`
        font-size: 51px;
    `)}
`;

const blink = keyframes`
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
`;

const Cursor = styled.span`
    display: inline-block;
    width: 2px;
    height: 0.8em;
    background: #000;
    margin-left: 4px;
    margin-bottom: 6px;
    vertical-align: middle;
    animation: ${blink} 0.7s step-end infinite;
`;

const TitleLabel = styled(ChapterLabel)`
    color: #000;
    background: #fff;
    padding: 2px 8px;
    margin: 4px 2px;
    margin-bottom: 8px;

    &::before,
    &::after {
        display: none;
    }
`;

const Subtitle = styled.h2`
    font-family: "Space Grotesk", sans-serif;
    font-size: 30px;
    font-weight: 400;
    text-transform: uppercase;
    color: #ffffff;
    line-height: 1.3;
    margin: 0;
    max-width: 408px;
    background: #000;
    padding: 4px 8px;
    display: inline;
    box-decoration-break: clone;
    -webkit-box-decoration-break: clone;

    ${media.tablet(`
        font-size: 25px;
    `)}

    ${media.mobile(`
        font-size: 21px;
    `)}

    ${media.wide(`
        font-size: 51px;
    `)}
`;

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" },
    },
};

/**
 * ChapterIntro Component
 * Chapter header with label, blinking cursor, and subtitle
 *
 * @param {string} chapter - Chapter label (e.g., "CHAPTER_ONE")
 * @param {string} subtitle - Chapter subtitle/title
 */
export default function ChapterIntro({ chapter, title, subtitle }) {
    const [typedTitle, setTypedTitle] = useState("");
    const [hasStarted, setHasStarted] = useState(false);
    const titleRef = useRef(null);

    useEffect(() => {
        if (!title) return;
        const el = titleRef.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasStarted) {
                    setHasStarted(true);
                }
            },
            { threshold: 0.5 },
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [title, hasStarted]);

    useEffect(() => {
        if (!hasStarted || !title) return;

        const fullText = `_${title}`;
        let i = 0;

        const interval = setInterval(() => {
            i++;
            setTypedTitle(fullText.slice(0, i));
            if (i >= fullText.length) clearInterval(interval);
        }, 150);

        return () => clearInterval(interval);
    }, [hasStarted, title]);

    return (
        <Container
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
        >
            <motion.div variants={itemVariants}>
                <ChapterLabel data-text={chapter}>{chapter}</ChapterLabel>
            </motion.div>
            {title && (
                <motion.div variants={itemVariants}>
                    <TitleLabel ref={titleRef}>
                        {typedTitle}
                        <Cursor />
                    </TitleLabel>
                </motion.div>
            )}
            <motion.div variants={itemVariants}>
                <Subtitle>&gt; {subtitle}</Subtitle>
            </motion.div>
        </Container>
    );
}
