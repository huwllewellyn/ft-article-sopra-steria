import styled from "styled-components";
import { motion } from "framer-motion";
import { media } from "../../utils/breakpoints";

const Heading = styled(motion.h3)`
    font-family: freight-big-pro, Georgia, serif;
    font-size: 32px;
    font-weight: 400;
    color: ${props => props.$color || "#fff"};
    line-height: 1.3;
    margin: 48px 0 24px 0;
    text-align: left;

    &:first-child {
        margin-top: 0;
    }

    ${media.tablet(`
        font-size: 28px;
    `)}

    ${media.mobile(`
        font-size: 24px;
        margin: 40px 0 20px 0;
    `)}

    ${media.wide(`
        font-size: 54px;
    `)}
`;

const headingVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

/**
 * SectionHeading Component
 * Sub-section heading within a chapter
 *
 * @param {ReactNode} children - Heading text
 * @param {string} color - Optional text color
 */
export default function SectionHeading({ children, color }) {
    return (
        <Heading
            $color={color}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={headingVariants}
        >
            {children}
        </Heading>
    );
}
