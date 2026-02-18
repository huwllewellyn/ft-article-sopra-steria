import styled from "styled-components";
import { motion } from "framer-motion";
import { media } from "../../utils/breakpoints";

const Container = styled(motion.div)`
    margin: 40px 0;
    text-align: left;
`;

const Title = styled.h4`
    font-family: "dm-sans", "DM Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: ${props => props.$accentColor || "#FFD700"};
    margin: 0 0 24px 0;

    ${media.mobile(`
        font-size: 12px;
        margin-bottom: 16px;
    `)}

    ${media.wide(`
        font-size: 26px;
        letter-spacing: 3.6px;
    `)}
`;

const List = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

const ListItem = styled(motion.li)`
    font-family: "dm-sans", "DM Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    font-size: 17px;
    font-weight: 400;
    color: ${props => props.$color || "rgba(255, 255, 255, 0.9)"};
    line-height: 1.5;
    padding-left: 24px;
    position: relative;

    &::before {
        content: "•";
        position: absolute;
        left: 0;
        color: ${props => props.$accentColor || "#FFD700"};
        font-weight: 700;
    }

    ${media.mobile(`
        font-size: 15px;
        padding-left: 20px;
    `)}

    ${media.wide(`
        font-size: 32px;
    `)}
`;

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.4, ease: "easeOut" }
    }
};

/**
 * SolutionsList Component
 * Displays a list of solutions/recommendations
 *
 * @param {string[]} items - Array of solution items
 * @param {string} title - Optional title (defaults to "The solutions")
 * @param {string} accentColor - Accent color for bullets and title
 */
export default function SolutionsList({ items, title = "The solutions", accentColor }) {
    return (
        <Container
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
        >
            <Title $accentColor={accentColor}>{title}</Title>
            <List>
                {items.map((item, index) => (
                    <ListItem
                        key={index}
                        $accentColor={accentColor}
                        variants={itemVariants}
                    >
                        {item}
                    </ListItem>
                ))}
            </List>
        </Container>
    );
}
