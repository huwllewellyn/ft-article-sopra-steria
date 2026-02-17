import styled from "styled-components";
import { motion } from "framer-motion";
import { media } from "../../utils/breakpoints";
import SectionHeadingBar from "./SectionHeadingBar";

const Slide = styled.section`
    min-height: 100vh;
    background: ${({ $bg }) => $bg || '#f7ff95'};
    color: #000;
    display: flex;
    flex-direction: column;
`;

const ContentArea = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: ${({ $align }) => $align === 'bottom' ? 'flex-end' : 'center'};
    align-items: center;
    padding: ${({ $align }) => $align === 'bottom' ? '60px 80px 120px' : '60px 80px'};
    max-width: 846px;
    margin: 0 auto;
    width: 100%;
    box-sizing: border-box;

    ${media.mobile(`
        padding: 40px 20px;
    `)}

    strong {
        font-weight: 700;
    }

    a {
        color: inherit;
        text-decoration: underline;
    }
`;

export const EditorialBody = styled.div`
    p {
        font-family: 'logic-monospace', monospace;
        font-size: 24px;
        font-weight: 500;
        line-height: 1.35;
        letter-spacing: -0.96px;
        color: #000;
        margin: 0 0 16px;
        text-align: center;

        ${media.tablet(`
            font-size: 21px;
            letter-spacing: -0.84px;
        `)}

        ${media.mobile(`
            font-size: 19px;
            letter-spacing: -0.76px;
            color: #222;
        `)}
    }
`;

export default function EditorialSlide({ sectionTitle, children, backgroundColor, headingColor, contentAlign }) {
    return (
        <Slide $bg={backgroundColor}>
            {sectionTitle && <SectionHeadingBar color={headingColor}>{sectionTitle}</SectionHeadingBar>}
            <ContentArea
                as={motion.div}
                $align={contentAlign}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -50% 0px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                {children}
            </ContentArea>
        </Slide>
    );
}
