import styled from "styled-components";
import { motion } from "framer-motion";
import { media } from "../utils/breakpoints";

const SectionContainer = styled(motion.section)`
    background-color: ${props => props.$backgroundColor};
    min-height: 100vh;
`;

const SlideContainer = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 80px 40px;
    border-bottom: 1px solid rgba(255,255,255,0.2);

    &:last-child {
        border-bottom: none;
    }

    ${media.mobile(`
        padding: 60px 20px;
    `)}
`;

const SlideContent = styled.div`
    max-width: 900px;
    text-align: center;
`;

const SlideTitle = styled(motion.h2)`
    font-family: freight-big-pro, Georgia, serif;
    font-size: 48px;
    font-weight: 400;
    color: #fff;
    margin-bottom: 24px;
    line-height: 1.2;

    ${media.tablet(`
        font-size: 40px;
    `)}

    ${media.mobile(`
        font-size: 32px;
    `)}

    ${media.wide(`
        font-size: 77px;
    `)}
`;

const SlideText = styled(motion.p)`
    font-family: "dm-sans", "DM Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    font-size: 18px;
    color: rgba(255,255,255,0.9);
    line-height: 1.6;
    max-width: 700px;
    margin: 0 auto;

    ${media.mobile(`
        font-size: 16px;
    `)}

    ${media.wide(`
        font-size: 33px;
    `)}
`;

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.5 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

export default function TabSection({ tab }) {
    return (
        <SectionContainer
            $backgroundColor={tab.backgroundColor}
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            {tab.slides.map((slide, index) => (
                <SlideContainer key={index}>
                    <SlideContent>
                        <SlideTitle
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={itemVariants}
                        >
                            {slide.title}
                        </SlideTitle>
                        <SlideText
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={itemVariants}
                        >
                            {slide.content}
                        </SlideText>
                    </SlideContent>
                </SlideContainer>
            ))}
        </SectionContainer>
    );
}
