import { useRef, useLayoutEffect, useEffect } from "react";
import styled from "styled-components";
import { useScroll } from "framer-motion";

const StickyWrapper = styled.div`
    position: sticky;
    top: 0;
    height: 100vh;
    overflow: hidden;
`;

const ScrollTrack = styled.div`
    position: relative;
    height: ${(props) => props.$trackHeight};
    margin-bottom: calc(-1 * (${(props) => props.$trackHeight} - ${(props) => props.$flowHeight || "100vh"}));
`;

function useZIndexAndAppear(ref, appearInPlace) {
    useLayoutEffect(() => {
        const el = ref.current;
        const siblings = Array.from(el.parentElement.children);
        el.style.zIndex = siblings.indexOf(el) + 1;
        if (appearInPlace) {
            el.style.opacity = "0";
        }
    }, [appearInPlace]);

    useEffect(() => {
        if (!appearInPlace) return;
        const el = ref.current;

        const handleScroll = () => {
            el.style.opacity = el.getBoundingClientRect().top <= 0 ? "1" : "0";
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [appearInPlace]);
}

function ScrollTrackedSlide({ children, trackHeight, flowHeight, appearInPlace }) {
    const trackRef = useRef();

    const { scrollYProgress } = useScroll({
        target: trackRef,
        offset: ["start start", "end end"],
    });

    useZIndexAndAppear(trackRef, appearInPlace);

    return (
        <ScrollTrack ref={trackRef} $trackHeight={trackHeight} $flowHeight={flowHeight}>
            <StickyWrapper>
                {typeof children === "function" ? children({ scrollYProgress }) : children}
            </StickyWrapper>
        </ScrollTrack>
    );
}

const FlowTrack = styled.div`
    position: relative;
    height: ${(props) => props.$flowHeight};
    margin-bottom: calc(-1 * (${(props) => props.$flowHeight} - 100vh));
`;

function BaseStickySlide({ children, appearInPlace, flowHeight }) {
    const ref = useRef();
    const flowRef = useRef();
    useZIndexAndAppear(flowHeight ? flowRef : ref, appearInPlace);

    if (flowHeight) {
        return (
            <FlowTrack ref={flowRef} $flowHeight={flowHeight}>
                <StickyWrapper>{children}</StickyWrapper>
            </FlowTrack>
        );
    }

    return <StickyWrapper ref={ref}>{children}</StickyWrapper>;
}

export default function StickySlide({ children, appearInPlace, trackHeight, flowHeight }) {
    if (trackHeight) {
        return <ScrollTrackedSlide trackHeight={trackHeight} flowHeight={flowHeight} appearInPlace={appearInPlace}>{children}</ScrollTrackedSlide>;
    }

    return <BaseStickySlide appearInPlace={appearInPlace} flowHeight={flowHeight}>{children}</BaseStickySlide>;
}
