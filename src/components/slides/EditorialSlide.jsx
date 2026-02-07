import styled from "styled-components";
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
    justify-content: center;
    align-items: center;
    padding: 60px 80px;
    max-width: 846px;
    margin: 0 auto;
    width: 100%;
    box-sizing: border-box;

    ${media.mobile(`
        padding: 40px 20px;
    `)}

    p {
        font-family: 'Space Mono', monospace;
        font-size: 21px;
        line-height: 1.35;
        letter-spacing: -0.84px;
        color: #000;
        margin: 0 0 16px;
        text-align: center;

        ${media.mobile(`
            font-size: 16px;
        `)}
    }

    strong {
        font-weight: 700;
    }
`;

export default function EditorialSlide({ sectionTitle, children, backgroundColor, headingColor }) {
    return (
        <Slide $bg={backgroundColor}>
            <SectionHeadingBar color={headingColor}>{sectionTitle}</SectionHeadingBar>
            <ContentArea>{children}</ContentArea>
        </Slide>
    );
}
