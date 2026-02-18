import styled from "styled-components";
import { motion } from "framer-motion";
import { media } from "../../utils/breakpoints";

const Text = styled(motion.p)`
    font-family: "dm-sans", "DM Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    font-size: 17px;
    font-weight: 400;
    color: ${props => props.$color || "rgba(255, 255, 255, 0.9)"};
    line-height: 1.7;
    margin: 0 0 24px 0;
    text-align: left;

    &:last-child {
        margin-bottom: 0;
    }

    ${media.mobile(`
        font-size: 15px;
        margin-bottom: 20px;
    `)}

    ${media.wide(`
        font-size: 32px;
    `)}
`;

const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" }
    }
};

/**
 * BodyText Component
 * Standard body paragraph with animation
 *
 * @param {ReactNode} children - Text content
 * @param {string} color - Optional text color
 */
export default function BodyText({ children, color }) {
    return (
        <Text
            $color={color}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={textVariants}
        >
            {children}
        </Text>
    );
}
