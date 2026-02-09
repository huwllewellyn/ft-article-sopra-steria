import styled from "styled-components";
import { media } from "../../utils/breakpoints";
import { getAssetPath } from "../../utils/assetPath";
import TimestampBadge from "./TimestampBadge";

const Slide = styled.section`
    position: relative;
    min-height: 100vh;
    background: ${({ $bg }) => $bg || '#0d1117'};
    color: #fff;
    display: flex;
    flex-direction: column;
    overflow: hidden;
`;

const BackgroundImage = styled.div`
    position: absolute;
    inset: 0;
    background-image: url(${({ $src }) => $src});
    background-size: cover;
    background-position: center;
    z-index: 0;

    &::after {
        content: '';
        position: absolute;
        inset: 0;
        background: linear-gradient(
            180deg,
            rgba(0, 0, 0, 0.5) 0%,
            rgba(0, 0, 0, 0.2) 40%,
            rgba(0, 0, 0, 0.6) 100%
        );
    }
`;

const BackgroundVideo = styled.video`
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 0;
`;

const VideoOverlay = styled.div`
    position: absolute;
    inset: 0;
    z-index: 0;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.5) 0%,
        rgba(0, 0, 0, 0.2) 40%,
        rgba(0, 0, 0, 0.6) 100%
    );
`;

const Content = styled.div`
    position: relative;
    z-index: 1;
    padding: 102px 80px 80px;
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: ${({ $position }) => $position === 'bottom' ? 'flex-end' : 'flex-start'};

    ${media.mobile(`
        padding: 80px 20px 40px;
    `)}
`;

const TimestampWrapper = styled.div`
    margin-bottom: 24px;
`;

const Heading = styled.h2`
    font-family: 'Space Grotesk', sans-serif;
    font-size: 42px;
    font-weight: 500;
    color: #fff;
    text-transform: uppercase;
    margin: 0 0 16px;
    line-height: 0.85;
    letter-spacing: 0;

    ${media.mobile(`
        font-size: 20px;
    `)}
`;

const Body = styled.div`
    max-width: 600px;

    p {
        font-family: 'logic-monospace', monospace;
        font-size: 19px;
        font-weight: 500;
        line-height: 1.35;
        letter-spacing: -0.04em;
        color: #fff;
        margin: 0 0 16px;

        ${media.mobile(`
            font-size: 16px;
        `)}
    }

    strong {
        font-weight: 700;
    }
`;

const HighlightedBody = styled(Body)`
    p {
        background: rgba(0, 0, 0, 0.7);
        display: inline;
        padding: 2px 4px;
        box-decoration-break: clone;
        -webkit-box-decoration-break: clone;
    }
`;

export default function NarrativeSlide({
    timestamp,
    heading,
    children,
    textPosition = "top",
    backgroundImage,
    backgroundVideo,
    poster,
    highlightText = false,
    backgroundColor,
    accentColor,
}) {
    const BodyWrapper = highlightText ? HighlightedBody : Body;

    return (
        <Slide $bg={backgroundColor}>
            {backgroundVideo ? (
                <>
                    <BackgroundVideo
                        src={getAssetPath(backgroundVideo)}
                        poster={poster ? getAssetPath(poster) : undefined}
                        autoPlay
                        loop
                        muted
                        playsInline
                    />
                    <VideoOverlay />
                </>
            ) : (
                backgroundImage && <BackgroundImage $src={backgroundImage} />
            )}
            <Content $position={textPosition}>
                {timestamp && (
                    <TimestampWrapper>
                        <TimestampBadge time={timestamp} color={accentColor} />
                    </TimestampWrapper>
                )}
                {heading && <Heading>{heading}</Heading>}
                <BodyWrapper>{children}</BodyWrapper>
            </Content>
        </Slide>
    );
}
