import styled from "styled-components";
import { motion } from "framer-motion";
import { media } from "../../utils/breakpoints";

export const QuoteContainer = styled.div`
    padding: 0;
`;

export const QuoteText = styled(motion.p)`
    color: #000000;
    text-align: center;
    font-family: "EB Garamond", serif;
    font-size: 40px;
    font-style: italic;
    font-weight: 400;
    line-height: 120%; /* 48px */
    margin: 0 0 32px 0;
    letter-spacing: 0;

    ${media.tablet(`
        font-size: 30px;
    `)}
    ${media.mobile(`
        font-size: 21px;
    `)}

    ${media.wide(`
        font-size: 68px;
    `)}
`;

export const QuoteAttribution = styled(motion.p)`
    color: #000000;
    text-align: center;
    font-family: "dm-sans", "DM Sans", -apple-system, BlinkMacSystemFont,
        "Segoe UI", sans-serif;
    font-size: 17px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%; /* 20.4px */
    margin: 0;
    letter-spacing: 0;
    ${media.tablet(`
        font-size: 14px;
    `)}
    ${media.mobile(`
        font-size: 12px;
    `)}

    ${media.wide(`
        font-size: 32px;
    `)}
`;

const quoteAnimationVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

/**
 * Quote Component
 * A reusable quote block with text and attribution
 *
 * @param {string|ReactNode} text - The main quote text (supports strings or JSX elements like <br/>)
 * @param {string} attribution - The attribution (author/source)
 * @param {object} variants - Optional Framer Motion variants for animations
 */
export default function Quote({ text, attribution, variants }) {
    return (
        <QuoteContainer variants={variants}>
            <QuoteText
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={quoteAnimationVariants}
            >
                {text}
            </QuoteText>
            <QuoteAttribution
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={quoteAnimationVariants}
            >
                {attribution}
            </QuoteAttribution>
        </QuoteContainer>
    );
}
