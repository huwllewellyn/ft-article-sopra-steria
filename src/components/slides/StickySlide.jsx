import { useRef, useLayoutEffect, useEffect } from "react";
import styled from "styled-components";
import { useScroll } from "framer-motion";
import useIsMobile from "../../hooks/useIsMobile";

const StickyWrapper = styled.div`
    position: sticky;
    top: 0;
    height: 100lvh;
    overflow: hidden;
`;

const ScrollTrack = styled.div`
    position: relative;
    height: ${(props) => props.$trackHeight};
    margin-bottom: calc(-1 * (${(props) => props.$trackHeight} - ${(props) => props.$flowHeight || "100lvh"}));
`;

const MobileWrapper = styled.div`
    position: relative;
    min-height: 100lvh;
    overflow: hidden;
`;

function useZIndexAndAppear(ref, appearInPlace) {
    useLayoutEffect(() => {
        const el = ref.current;
        const siblings = Array.from(el.parentElement.children);
        el.style.zIndex = siblings.indexOf(el) + 1;
        if (appearInPlace) {
            el.style.opacity = "0";
            el.style.pointerEvents = "none";
        }
    }, [appearInPlace]);

    useEffect(() => {
        if (!appearInPlace) return;
        const el = ref.current;

        const handleScroll = () => {
            const appeared = el.getBoundingClientRect().top <= 0;
            el.style.opacity = appeared ? "1" : "0";
            el.style.pointerEvents = appeared ? "auto" : "none";
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
        <ScrollTrack ref={trackRef} $trackHeight={trackHeight} $flowHeight={flowHeight} data-slide>
            <StickyWrapper>
                {typeof children === "function" ? children({ scrollYProgress }) : children}
            </StickyWrapper>
        </ScrollTrack>
    );
}

const FlowTrack = styled.div`
    position: relative;
    height: ${(props) => props.$flowHeight};
    margin-bottom: calc(-1 * (${(props) => props.$flowHeight} - 100lvh));
`;

function BaseStickySlide({ children, appearInPlace, flowHeight }) {
    const ref = useRef();
    const flowRef = useRef();
    useZIndexAndAppear(flowHeight ? flowRef : ref, appearInPlace);

    if (flowHeight) {
        return (
            <FlowTrack ref={flowRef} $flowHeight={flowHeight} data-slide>
                <StickyWrapper>{children}</StickyWrapper>
            </FlowTrack>
        );
    }

    return <StickyWrapper ref={ref} data-slide>{children}</StickyWrapper>;
}

export default function StickySlide({ children, appearInPlace, trackHeight, flowHeight, mobileSimplify = true }) {
    const isMobile = useIsMobile();

    if (isMobile && mobileSimplify) {
        return (
            <MobileWrapper data-slide>
                {typeof children === "function" ? children({ scrollYProgress: null }) : children}
            </MobileWrapper>
        );
    }

    if (trackHeight) {
        return <ScrollTrackedSlide trackHeight={trackHeight} flowHeight={flowHeight} appearInPlace={appearInPlace}>{children}</ScrollTrackedSlide>;
    }

    return <BaseStickySlide appearInPlace={appearInPlace} flowHeight={flowHeight}>{children}</BaseStickySlide>;
}
