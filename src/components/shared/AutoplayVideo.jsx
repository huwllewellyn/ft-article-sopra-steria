import styled from "styled-components";
import { media } from "../../utils/breakpoints";
import useAutoplayOnView from "../../hooks/useAutoplayOnView";

const StyledVideo = styled.video`
    ${({ $mobileObjectPosition }) =>
        $mobileObjectPosition
            ? media.mobile(`object-position: ${$mobileObjectPosition};`)
            : ""}
`;

export default function AutoplayVideo({ mobileVideoPosition, ...props }) {
    const videoRef = useAutoplayOnView();
    return (
        <StyledVideo
            ref={videoRef}
            $mobileObjectPosition={mobileVideoPosition}
            {...props}
        />
    );
}
