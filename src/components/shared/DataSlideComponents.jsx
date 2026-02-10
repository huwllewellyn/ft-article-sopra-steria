import styled from "styled-components";
import { media } from "../../utils/breakpoints";
import useTextScramble from "../../hooks/useTextScramble";

export const DataText = styled.div`
    text-align: center;
    max-width: 400px;
    font-family: "logic-monospace", monospace;
    font-size: 24px;
    font-weight: 400;
    line-height: 1.25;
    letter-spacing: -0.96px;
    color: #000;

    span {
        background: ${({ $bg }) => $bg || "#f7ff95"};
        padding: 4px 8px;
        display: inline;
        box-decoration-break: clone;
        -webkit-box-decoration-break: clone;
    }

    strong {
        font-weight: 700;
    }

    ${media.mobile(`
        font-size: 19px;
        line-height: 1.35;
        letter-spacing: -0.76px;
    `)}
`;

const DataCenterStyled = styled.div`
    font-family: "logic-monospace", monospace;
    font-size: 24px;
    font-weight: 400;
    line-height: 1.25;
    max-width: 400px;
    letter-spacing: -0.96px;
    color: #000;
    text-align: center;

    span {
        background: ${({ $bg }) => $bg || "#f7ff95"};
        padding: 4px 8px;
        display: inline;
        box-decoration-break: clone;
        -webkit-box-decoration-break: clone;
    }

    ${media.mobile(`
        font-size: 19px;
        line-height: 1.35;
        letter-spacing: -0.76px;
    `)}
`;

export function DataCenter({ $bg, children }) {
    const scrambleRef = useTextScramble({ delay: 500, duration: 1000 });
    return (
        <DataCenterStyled $bg={$bg}>
            <span ref={scrambleRef}>{children}</span>
        </DataCenterStyled>
    );
}

export const DataAttribution = styled.div`
    font-family: "logic-monospace", monospace;
    font-size: 24px;
    font-weight: 400;
    line-height: 1.25;
    letter-spacing: -0.96px;
    color: #000;
    text-align: center;
    max-width: 480px;

    span {
        background: ${({ $bg }) => $bg || "#f7ff95"};
        padding: 4px 8px;
        display: inline;
        box-decoration-break: clone;
        -webkit-box-decoration-break: clone;
    }

    ${media.mobile(`
        font-size: 19px;
        line-height: 1.35;
        letter-spacing: -0.76px;
    `)}
`;
