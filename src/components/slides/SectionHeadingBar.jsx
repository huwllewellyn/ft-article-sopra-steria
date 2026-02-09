import styled from "styled-components";
import { media } from "../../utils/breakpoints";

const Bar = styled.div`
    width: 100%;
    background: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 50px 20px 8px 20px;
    box-sizing: border-box;

    ${media.mobile(`
        padding-top: 76px;
    `)}
`;

const Title = styled.span`
    font-family: 'logic-monospace', monospace;
    font-weight: 700;
    font-size: 24px;
    text-transform: uppercase;
    color: ${({ $color }) => $color || "#f7ff95"};
    line-height: 1.24;
    text-align: center;

    ${media.mobile(`
        font-size: 19px;
    `)}
`;

export default function SectionHeadingBar({ children, color }) {
    return (
        <Bar>
            <Title $color={color}>{children}</Title>
        </Bar>
    );
}
