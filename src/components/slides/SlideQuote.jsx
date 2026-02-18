import styled from "styled-components";
import { media } from "../../utils/breakpoints";

const QuoteWrapper = styled.blockquote`
    margin: 40px auto;
    padding: 0;
    max-width: 846px;
    text-align: center;

    ${media.mobile(`
        text-align: left;
    `)}
`;

const QuoteMark = styled.span`
    display: block;
    font-family: 'logic-monospace', monospace;
    font-size: 44px;
    font-weight: 600;
    line-height: 1;
    color: #000;
    margin-bottom: 8px;

    ${media.wide(`
        font-size: 75px;
    `)}
`;

const QuoteText = styled.p`
    font-family: 'logic-monospace', monospace;
    font-size: 30px;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: -0.88px;
    line-height: 1.3;
    color: #000;
    margin: 0 0 16px;

    ${media.mobile(`
        font-size: 20px;
    `)}

    ${media.wide(`
        font-size: 51px;
        letter-spacing: -1.56px;
    `)}
`;

const Attribution = styled.p`
    font-family: 'logic-monospace', monospace;
    font-size: 17px;
    font-style: normal;
    font-weight: 700;
    color: #000;
    margin: 0;
    line-height: 120%;
    text-transform: uppercase;

    ${media.wide(`
        font-size: 32px;
    `)}
`;

export default function SlideQuote({ quote, name, role }) {
    return (
        <QuoteWrapper>
            <QuoteMark>&ldquo;</QuoteMark>
            <QuoteText>{quote}</QuoteText>
            <Attribution>{name}{role ? <>,<br />{role}</> : ''}</Attribution>
        </QuoteWrapper>
    );
}
