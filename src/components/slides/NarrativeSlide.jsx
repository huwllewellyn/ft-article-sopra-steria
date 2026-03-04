import styled from "styled-components";
import { media } from "../../utils/breakpoints";
import { getAssetPath, getMobilePath } from "../../utils/assetPath";
import TimestampBadge from "./TimestampBadge";
import useScrollVideo from "../../hooks/useScrollVideo";
import useAutoplayOnView from "../../hooks/useAutoplayOnView";
import useIsMobile from "../../hooks/useIsMobile";
import ResponsiveLottieAnimation from "../ResponsiveLottieAnimation";

const Slide = styled.section`
    position: relative;
    ${({ $flowHeight }) => ($flowHeight ? "" : "min-height: 100lvh;")}
    background: ${({ $bg }) => $bg || "#0d1117"};
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
        content: "";
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

const LottieOverlayWrapper = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    bottom: 10vh;
    height: 60vh;
    z-index: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    ${({ $mobileScale }) =>
        $mobileScale
            ? media.mobile(`
                transform: scale(${$mobileScale});
                transform-origin: center;
            `)
            : ""}
`;

const Content = styled.div`
    position: relative;
    z-index: 1;
    padding: 120px 80px 80px;
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: ${({ $position }) =>
        $position === "bottom" ? "flex-end" : "flex-start"};

    ${media.mobile(`
        padding: 120px 20px 40px;
    `)}
`;

const TimestampWrapper = styled.div`
    position: absolute;
    top: 40px;
    left: 0;
    z-index: 1;

    ${media.mobile(`
        top: 70px;
    `)}
`;

const Heading = styled.h2`
    font-family: "Space Grotesk", sans-serif;
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

    ${media.wide(`
        font-size: 51px;
    `)}
`;

const Body = styled.div`
    max-width: 600px;

    p {
        font-family: "logic-monospace", monospace;
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

        ${media.wide(`
            font-size: 42px;
            letter-spacing: -1.7px;
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
    flowHeight = false,
    lottieOverlay,
    mobileScale,
}) {
    const isMobile = useIsMobile();
    const effectiveScrollProgress = isMobile ? null : scrollProgress;
    const scrollRef = useScrollVideo(effectiveScrollProgress);
    const autoplayRef = useAutoplayOnView();
    const videoRef = effectiveScrollProgress ? scrollRef : autoplayRef;
    const BodyWrapper = highlightText ? HighlightedBody : Body;

    const videoSrc = backgroundVideo
        ? getAssetPath(isMobile ? getMobilePath(backgroundVideo) : backgroundVideo)
        : undefined;
    const posterSrc = poster
        ? getAssetPath(isMobile ? getMobilePath(poster) : poster)
        : undefined;

    return (
        <Slide $bg={backgroundColor} $flowHeight={flowHeight}>
            {backgroundVideo ? (
                <>
                    <BackgroundVideo
                        ref={videoRef}
                        src={videoSrc}
                        poster={posterSrc}
                        {...(scrollProgress
                            ? { preload: "auto" }
                            : { loop: true })}
                        muted
                        playsInline
                    />
                    <VideoOverlay />
                </>
            ) : (
                backgroundImage && <BackgroundImage $src={backgroundImage} />
            )}
            {lottieOverlay && (
                <LottieOverlayWrapper $mobileScale={mobileScale}>
                    <ResponsiveLottieAnimation
                        animations={lottieOverlay}
                        height="100%"
                        width="100%"
                        loop={false}
                        autoplay
                        preserveAspectRatio="xMidYMid meet"
                    />
                </LottieOverlayWrapper>
            )}
            {timestamp && (
                <TimestampWrapper>
                    <TimestampBadge time={timestamp} color={accentColor} />
                </TimestampWrapper>
            )}
            <Content $position={textPosition}>
                {heading && (
                    <Heading>
                        <span>{heading}</span>
                    </Heading>
                )}
                <BodyWrapper>{children}</BodyWrapper>
            </Content>
        </Slide>
    );
}
