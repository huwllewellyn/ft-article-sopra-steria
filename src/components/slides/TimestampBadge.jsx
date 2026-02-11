import styled, { keyframes } from "styled-components";
import { media } from "../../utils/breakpoints";
import FlashingTime from "../shared/FlashingTime";

const Badge = styled.span`
    display: inline-block;
    font-family: 'Space Grotesk', sans-serif;
    font-size: 26px;
    font-weight: 400;
    color: #000;
    background: ${({ $color }) => $color || '#f7ff95'};
    padding: 4px 8px 4px 16px;
    line-height: normal;

    ${media.mobile(`
        font-size: 21px;
    `)}
`;

export default function TimestampBadge({ time, color }) {
    return <Badge $color={color}><FlashingTime time={time} /></Badge>;
}
