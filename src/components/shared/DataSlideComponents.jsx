import styled from "styled-components";
import { media } from "../../utils/breakpoints";
import useTextScramble from "../../hooks/useTextScramble";

export const DataText = styled.div`
    text-align: center;
    max-width: 400px;
    font-family: "logic-monospace", monospace;
    font-size: 30px;
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

    ${media.tablet(`
        font-size: 28px;
    `)}

    ${media.mobile(`
        font-size: 22px;
        line-height: 1.35;
        letter-spacing: -0.76px;
    `)}
`;

const DataCenterStyled = styled.div`
    font-family: "logic-monospace", monospace;
    font-size: 30px;
    font-weight: 600;
    line-height: 1.25;
    max-width: 400px;
    letter-spacing: -0.96px;
    color: #000;
    text-align: center;
    text-transform: uppercase;

    span {
        background: ${({ $bg }) => $bg || "#f7ff95"};
        padding: 4px 8px;
        display: inline;
        box-decoration-break: clone;
        -webkit-box-decoration-break: clone;
    }

    ${media.tablet(`
        font-size: 28px;
    `)}

    ${media.mobile(`
        font-size: 22px;
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

export const SolutionBoxes = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    margin: auto 0;
    width: 2000px;
`;

export const SolutionBox = styled.div`
    display: flex;
    padding: 16px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border: 2px solid #fff;
    background: #000;

    && p {
        font-family: "logic-monospace", monospace;
        font-size: 26px;
        font-weight: 500;
        text-transform: uppercase;
        line-height: 0.9;
        text-align: center;
        color: #ebebeb;
        margin: 0;

        ${media.mobile(`
            font-size: 16px;
        `)}
    }
`;

export const DataAttribution = styled.div`
    font-family: "logic-monospace", monospace;
    font-size: 30px;
    font-weight: 400;
    line-height: 1.25;
    letter-spacing: -0.96px;
    color: #000;
    text-align: center;
    max-width: 480px;
    margin-bottom: 100px;

    span {
        background: ${({ $bg }) => $bg || "#f7ff95"};
        padding: 4px 8px;
        display: inline;
        box-decoration-break: clone;
        -webkit-box-decoration-break: clone;
    }

    ${media.tablet(`
        font-size: 28px;
    `)}

    ${media.mobile(`
        font-size: 22px;
        line-height: 1.35;
        letter-spacing: -0.76px;
    `)}
`;
