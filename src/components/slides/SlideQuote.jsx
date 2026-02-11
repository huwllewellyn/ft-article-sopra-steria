import styled from "styled-components";
import { media } from "../../utils/breakpoints";

const QuoteWrapper = styled.blockquote`
    margin: 40px auto;
    padding: 0;
    max-width: 846px;
    text-align: center;
`;

const QuoteMark = styled.span`
    display: block;
    font-family: 'logic-monospace', monospace;
    font-size: 44px;
    font-weight: 600;
    line-height: 1;
    color: #000;
    margin-bottom: 8px;
`;

const QuoteText = styled.p`
    font-family: 'Space Mono', monospace;
    font-size: 30px;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: -0.54px;
    line-height: 1.1;
    color: #000;
    margin: 0 0 16px;

    ${media.mobile(`
        font-size: 20px;
    `)}
`;

const Attribution = styled.p`
    font-family: 'Space Mono', monospace;
    font-size: 17px;
    font-weight: 700;
    color: #000;
    margin: 0;
    line-height: 1.1;
    text-transform: uppercase;
`;

export default function SlideQuote({ quote, name, role }) {
    return (
        <QuoteWrapper>
            <QuoteMark>&ldquo;</QuoteMark>
            <QuoteText>{quote}</QuoteText>
            <Attribution>{name}{role ? `, ${role}` : ''}</Attribution>
        </QuoteWrapper>
    );
}
