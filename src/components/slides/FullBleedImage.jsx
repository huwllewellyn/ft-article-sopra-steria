import styled from "styled-components";
import { getAssetPath } from "../../utils/assetPath";
import useScrollVideo from "../../hooks/useScrollVideo";
import useAutoplayOnView from "../../hooks/useAutoplayOnView";

const ImageSlide = styled.section`
    height: 100vh;
    width: 100%;
    overflow: hidden;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
`;

const Video = styled.video`
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
`;

export default function FullBleedImage({ src, videoSrc, poster, alt = "", scrollProgress }) {
    const scrollRef = useScrollVideo(scrollProgress);
    const autoplayRef = useAutoplayOnView();
    const videoRef = scrollProgress ? scrollRef : autoplayRef;

    if (videoSrc) {
        return (
            <ImageSlide>
                <Video
                    ref={videoRef}
                    src={getAssetPath(videoSrc)}
                    poster={poster ? getAssetPath(poster) : undefined}
                    {...(scrollProgress ? { preload: "auto" } : { loop: true })}
                    muted
                    playsInline
                />
            </ImageSlide>
        );
    }

    return (
        <ImageSlide>
            <Image src={src} alt={alt} />
        </ImageSlide>
    );
}
