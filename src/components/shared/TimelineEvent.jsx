import styled from "styled-components";
import { motion } from "framer-motion";
import { media } from "../../utils/breakpoints";
import FlashingTime from "./FlashingTime";

const EventContainer = styled(motion.div)`
    display: flex;
    gap: 16px;
    margin-bottom: 24px;
    text-align: left;

    ${media.mobile(`
        flex-direction: column;
        gap: 8px;
    `)}
`;

const Time = styled.span`
    font-family: "dm-sans", "DM Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    font-size: 17px;
    font-weight: 700;
    color: ${props => props.$color || "#fff"};
    min-width: 80px;
    flex-shrink: 0;

    ${media.mobile(`
        font-size: 15px;
        min-width: auto;
    `)}
`;

const Description = styled.span`
    font-family: "dm-sans", "DM Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    font-size: 17px;
    font-weight: 400;
    color: ${props => props.$color || "rgba(255, 255, 255, 0.9)"};
    line-height: 1.6;

    ${media.mobile(`
        font-size: 15px;
    `)}
`;

const eventVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.5, ease: "easeOut" }
    }
};

/**
 * TimelineEvent Component
 * Displays a timestamped event in the narrative
 *
 * @param {string} time - The timestamp (e.g., "4:45pm")
 * @param {string} description - The event description
 * @param {string} color - Optional text color
 */
export default function TimelineEvent({ time, description, color }) {
    return (
        <EventContainer
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={eventVariants}
        >
            <Time $color={color}><FlashingTime time={time} /></Time>
            <Description $color={color}>– {description}</Description>
        </EventContainer>
    );
}
