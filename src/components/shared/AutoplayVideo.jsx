import useAutoplayOnView from "../../hooks/useAutoplayOnView";

export default function AutoplayVideo(props) {
    const videoRef = useAutoplayOnView();
    return <video ref={videoRef} {...props} />;
}
