import styled from "styled-components";
import { motion } from "framer-motion";
import { media } from "../../utils/breakpoints";

const Container = styled(motion.div)`
    background: ${props => props.$background || "rgba(255, 255, 255, 0.1)"};
    border-left: 4px solid ${props => props.$accentColor || "#FFD700"};
    padding: 32px 40px;
    margin: 40px 0;
    text-align: left;

    ${media.mobile(`
        padding: 24px 20px;
        margin: 32px 0;
    `)}
`;

const Stat = styled.div`
    font-family: freight-big-pro, Georgia, serif;
    font-size: 64px;
    font-weight: 400;
    color: ${props => props.$color || "#fff"};
    line-height: 1;
    margin-bottom: 16px;

    ${media.tablet(`
        font-size: 48px;
    `)}

    ${media.mobile(`
        font-size: 40px;
    `)}

    ${media.wide(`
        font-size: 102px;
    `)}
`;

const Description = styled.p`
    font-family: "dm-sans", "DM Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    font-size: 17px;
    font-weight: 400;
    color: ${props => props.$color || "rgba(255, 255, 255, 0.9)"};
    line-height: 1.6;
    margin: 0 0 8px 0;

    ${media.mobile(`
        font-size: 15px;
    `)}

    ${media.wide(`
        font-size: 32px;
    `)}
`;

const Source = styled.p`
    font-family: "dm-sans", "DM Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    font-size: 14px;
    font-weight: 400;
    color: ${props => props.$color || "rgba(255, 255, 255, 0.6)"};
    line-height: 1.4;
    margin: 0;
    font-style: italic;

    ${media.mobile(`
        font-size: 12px;
    `)}

    ${media.wide(`
        font-size: 26px;
    `)}
`;

const dataPointVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

/**
 * DataPoint Component
 * Displays a highlighted statistic with description and source
 *
 * @param {string} stat - The main statistic (e.g., "48", "41%")
 * @param {string} description - Description of what the stat means
 * @param {string} source - Source attribution
 * @param {string} accentColor - Border accent color
 * @param {string} background - Background color
 */
export default function DataPoint({ stat, description, source, accentColor, background }) {
    return (
        <Container
            $accentColor={accentColor}
            $background={background}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={dataPointVariants}
        >
            <Stat>{stat}</Stat>
            <Description>{description}</Description>
            {source && <Source>Source: {source}</Source>}
        </Container>
    );
}
