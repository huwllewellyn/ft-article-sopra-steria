import styled, { keyframes } from "styled-components";

const blink = keyframes`
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
`;

const Colon = styled.span`
    animation: ${blink} 1s step-end infinite;
`;

/**
 * Renders a time string with a flashing colon like a digital clock.
 * e.g. "5:00pm" → "5" + flashing ":" + "00pm"
 */
export default function FlashingTime({ time }) {
    const colonIndex = time.indexOf(":");
    if (colonIndex === -1) return time;

    const before = time.slice(0, colonIndex);
    const after = time.slice(colonIndex + 1);

    return (
        <>
            {before}
            <Colon>:</Colon>
            {after}
        </>
    );
}
