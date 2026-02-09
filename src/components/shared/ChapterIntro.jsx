import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import { media } from "../../utils/breakpoints";

const Container = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
`;

const ChapterLabel = styled.p`
    font-family: 'Space Grotesk', sans-serif;
    font-size: 30px;
    font-weight: 500;
    text-transform: uppercase;
    color: #ffffff;
    line-height: 1.2;
    margin: 0;
    max-width: 408px;
    background: #000;
    padding: 4px 8px;

    ${media.tablet(`
        font-size: 25px;
    `)}

    ${media.mobile(`
        font-size: 21px;
    `)}
`;

const blink = keyframes`
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
`;

const CursorBlock = styled.div`
    width: 20px;
    height: 4px;
    background: #ffffff;
    animation: ${blink} 1s step-end infinite;
    margin: 4px 0;
`;

const Subtitle = styled.h2`
    font-family: 'Space Grotesk', sans-serif;
    font-size: 30px;
    font-weight: 400;
    text-transform: uppercase;
    color: #ffffff;
    line-height: 1.3;
    margin: 0;
    max-width: 408px;
    background: #000;
    padding: 4px 8px;

    ${media.tablet(`
        font-size: 25px;
    `)}

    ${media.mobile(`
        font-size: 21px;
    `)}
`;

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" }
    }
};

/**
 * ChapterIntro Component
 * Chapter header with label, blinking cursor, and subtitle
 *
 * @param {string} chapter - Chapter label (e.g., "CHAPTER_ONE")
 * @param {string} subtitle - Chapter subtitle/title
 */
export default function ChapterIntro({ chapter, subtitle }) {
    return (
        <Container
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
        >
            <motion.div variants={itemVariants}>
                <ChapterLabel>{chapter}</ChapterLabel>
            </motion.div>
            <motion.div variants={itemVariants}>
                <CursorBlock />
            </motion.div>
            <motion.div variants={itemVariants}>
                <Subtitle>&gt; {subtitle}</Subtitle>
            </motion.div>
        </Container>
    );
}
