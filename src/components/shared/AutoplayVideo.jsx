import useAutoplayOnView from "../../hooks/useAutoplayOnView";
import useIsMobile from "../../hooks/useIsMobile";
import { getMobilePath } from "../../utils/assetPath";

export default function AutoplayVideo({ src, ...props }) {
    const videoRef = useAutoplayOnView();
    const isMobile = useIsMobile();
    const resolvedSrc = isMobile ? getMobilePath(src) : src;
    return <video ref={videoRef} src={resolvedSrc} {...props} />;
}
