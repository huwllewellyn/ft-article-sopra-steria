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
    z-index: 99;
    position: relative;
    ${({ $bordered }) => $bordered ? `border-bottom: 1px solid #fff;` : ""}

    ${media.mobile(`
        padding-top: 76px;
    `)}
`;

const Title = styled.span`
    font-family: ${({ $fontFamily }) => $fontFamily || "'logic-monospace', monospace"};
    font-weight: ${({ $fontWeight }) => $fontWeight || 700};
    font-size: 24px;
    text-transform: uppercase;
    color: ${({ $color }) => $color || "#f7ff95"};
    line-height: 1.2;
    text-align: center;

    ${media.mobile(`
        font-size: 19px;
    `)}
`;

export default function SectionHeadingBar({ children, color, bordered, fontFamily, fontWeight }) {
    return (
        <Bar $bordered={bordered}>
            <Title $color={color} $fontFamily={fontFamily} $fontWeight={fontWeight}>{children}</Title>
        </Bar>
    );
}
