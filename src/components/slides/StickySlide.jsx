import styled from "styled-components";

const SlideWrapper = styled.div`
    position: relative;
    min-height: 100lvh;
    overflow: hidden;
`;

export default function StickySlide({ children }) {
    return (
        <SlideWrapper data-slide>
            {typeof children === "function" ? children({ scrollYProgress: null }) : children}
        </SlideWrapper>
    );
}
