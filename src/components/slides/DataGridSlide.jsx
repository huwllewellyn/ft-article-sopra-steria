import styled from "styled-components";
import { media } from "../../utils/breakpoints";
import SectionHeadingBar from "./SectionHeadingBar";

const Slide = styled.section`
    min-height: 100vh;
    background: #0d1117;
    color: #fff;
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: hidden;
`;

const GridOverlay = styled.div`
    position: absolute;
    inset: 0;
    z-index: 0;
    background-image:
        linear-gradient(${({ $gridColor }) => $gridColor || 'rgba(247, 255, 149, 0.15)'} 1px, transparent 1px),
        linear-gradient(90deg, ${({ $gridColor }) => $gridColor || 'rgba(247, 255, 149, 0.15)'} 1px, transparent 1px);
    background-size: 60px 60px;
`;

const ContentArea = styled.div`
    position: relative;
    z-index: 1;
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
        color: #fff;
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

export default function DataGridSlide({ sectionTitle, headingColor, gridColor, children }) {
    return (
        <Slide>
            <GridOverlay $gridColor={gridColor} />
            <SectionHeadingBar color={headingColor}>{sectionTitle}</SectionHeadingBar>
            <ContentArea>{children}</ContentArea>
        </Slide>
    );
}
