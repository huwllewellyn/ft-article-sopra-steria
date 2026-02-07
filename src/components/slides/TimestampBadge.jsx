import styled from "styled-components";

const Badge = styled.span`
    display: inline-block;
    font-family: 'Space Grotesk', sans-serif;
    font-size: 21px;
    font-weight: 400;
    color: #000;
    background: ${({ $color }) => $color || '#f7ff95'};
    padding: 4px 8px 4px 16px;
    line-height: 1.35;
`;

export default function TimestampBadge({ time, color }) {
    return <Badge $color={color}>{time}</Badge>;
}
