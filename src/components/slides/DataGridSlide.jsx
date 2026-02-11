import styled from "styled-components";
import { media } from "../../utils/breakpoints";
import { getAssetPath } from "../../utils/assetPath";
import SectionHeadingBar from "./SectionHeadingBar";
import useScrollVideo from "../../hooks/useScrollVideo";

const Slide = styled.section`
    min-height: 100vh;
    background: ${({ $bg }) => $bg || '#0d1117'};
    color: #000;
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: hidden;
`;

const BackgroundVideo = styled.video`
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 0;
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
    justify-content: space-between;
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
        font-family: 'logic-monospace', monospace;
        font-size: 24px;
        font-weight: 400;
        line-height: 1.25;
        letter-spacing: -0.96px;
        color: #000;
        margin: 0 0 16px;
        text-align: center;

        ${media.mobile(`
            font-size: 19px;
            letter-spacing: -0.76px;
            line-height: 1.35;
        `)}
    }

    strong {
        font-weight: 700;
    }
`;

export default function DataGridSlide({ sectionTitle, headingColor, gridColor, backgroundVideo, poster, backgroundColor, children, scrollProgress }) {
    const videoRef = useScrollVideo(scrollProgress);

    return (
        <Slide $bg={backgroundColor}>
            {backgroundVideo && (
                <BackgroundVideo
                    ref={scrollProgress ? videoRef : undefined}
                    src={getAssetPath(backgroundVideo)}
                    poster={poster ? getAssetPath(poster) : undefined}
                    {...(scrollProgress ? { preload: "auto" } : { autoPlay: true, loop: true })}
                    muted playsInline
                />
            )}
            <GridOverlay $gridColor={gridColor} />
            {sectionTitle && <SectionHeadingBar color={headingColor}>{sectionTitle}</SectionHeadingBar>}
            <ContentArea>{children}</ContentArea>
        </Slide>
    );
}
