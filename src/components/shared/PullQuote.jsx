import styled from "styled-components";
import { motion } from "framer-motion";
import { media } from "../../utils/breakpoints";

const Container = styled(motion.blockquote)`
    margin: 48px 0;
    padding: 0;
    text-align: left;
    border-left: 3px solid ${props => props.$accentColor || "#FFD700"};
    padding-left: 32px;

    ${media.mobile(`
        margin: 32px 0;
        padding-left: 20px;
    `)}
`;

const QuoteText = styled.p`
    font-family: "EB Garamond", Georgia, serif;
    font-size: 28px;
    font-style: italic;
    font-weight: 400;
    color: ${props => props.$color || "#fff"};
    line-height: 1.4;
    margin: 0 0 16px 0;

    ${media.tablet(`
        font-size: 24px;
    `)}

    ${media.mobile(`
        font-size: 20px;
    `)}

    ${media.wide(`
        font-size: 49px;
    `)}
`;

const Attribution = styled.footer`
    font-family: "dm-sans", "DM Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    font-size: 15px;
    font-weight: 400;
    color: ${props => props.$color || "rgba(255, 255, 255, 0.7)"};
    line-height: 1.4;

    ${media.mobile(`
        font-size: 13px;
    `)}

    ${media.wide(`
        font-size: 28px;
    `)}
`;

const Name = styled.span`
    font-weight: 600;
    color: ${props => props.$color || "rgba(255, 255, 255, 0.9)"};
`;

const Role = styled.span`
    display: block;
    margin-top: 4px;
`;

const quoteVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

/**
 * PullQuote Component
 * A styled quote block for dark backgrounds
 *
 * @param {string} quote - The quote text
 * @param {string} name - Speaker's name
 * @param {string} role - Speaker's role/title
 * @param {string} accentColor - Border accent color
 */
export default function PullQuote({ quote, name, role, accentColor }) {
    return (
        <Container
            $accentColor={accentColor}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={quoteVariants}
        >
            <QuoteText>"{quote}"</QuoteText>
            <Attribution>
                <Name>{name}</Name>
                {role && <Role>{role}</Role>}
            </Attribution>
        </Container>
    );
}
