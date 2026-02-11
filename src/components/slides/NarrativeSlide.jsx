import styled from "styled-components";
import { media } from "../../utils/breakpoints";
import { getAssetPath } from "../../utils/assetPath";
import TimestampBadge from "./TimestampBadge";
import useScrollVideo from "../../hooks/useScrollVideo";

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
    font-size: 30px;
    font-weight: 500;
    color: #fff;
    text-transform: uppercase;
    margin: 0 0 16px;
    line-height: 1.2;
    letter-spacing: 0;

    span {
        background: #000;
        padding: 4px 8px;
        display: inline;
        box-decoration-break: clone;
        -webkit-box-decoration-break: clone;
    }

    ${media.tablet(`
        font-size: 25px;
    `)}

    ${media.mobile(`
        font-size: 21px;
        line-height: 1.3;
    `)}
`;

const Body = styled.div`
    max-width: 600px;

    p {
        font-family: 'logic-monospace', monospace;
        font-size: 24px;
        font-weight: 400;
        line-height: 1.35;
        letter-spacing: -0.96px;
        color: #ebebeb;
        margin: 0 0 16px;
        background: #000;
        padding: 4px 8px;
        display: inline;
        box-decoration-break: clone;
        -webkit-box-decoration-break: clone;

        ${media.mobile(`
            font-size: 19px;
            font-weight: 500;
            letter-spacing: -0.76px;
        `)}
    }

    strong {
        font-weight: 700;
    }
`;

const HighlightedBody = styled(Body)`
    p {
        background: #000;
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
    scrollProgress,
}) {
    const videoRef = useScrollVideo(scrollProgress);
    const BodyWrapper = highlightText ? HighlightedBody : Body;

    return (
        <Slide $bg={backgroundColor}>
            {backgroundVideo ? (
                <>
                    <BackgroundVideo
                        ref={scrollProgress ? videoRef : undefined}
                        src={getAssetPath(backgroundVideo)}
                        poster={poster ? getAssetPath(poster) : undefined}
                        {...(scrollProgress ? { preload: "auto" } : { autoPlay: true, loop: true })}
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
                {heading && <Heading><span>{heading}</span></Heading>}
                <BodyWrapper>{children}</BodyWrapper>
            </Content>
        </Slide>
    );
}
