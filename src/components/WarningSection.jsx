import styled from "styled-components";
import { motion } from "framer-motion";
import { media } from "../utils/breakpoints";

const Container = styled.section`
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
`;


const WarningBox = styled(motion.div)`
    position: relative;
    z-index: 2;
    background: #000000;
    width: 550px;
    max-width: calc(100% - 40px);
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const WarningText = styled.p`
    font-family: "Space Mono", monospace;
    font-size: 19px;
    font-weight: 500;
    color: #f7ff95;
    text-align: center;
    text-transform: uppercase;
    line-height: 1.35;
    letter-spacing: 0.19px;
    margin: 0;

    ${media.mobile(`
        font-size: 16px;
    `)}
`;

export default function WarningSection() {
    return (
        <Container>
            <WarningBox
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <WarningText>
                    Flashing lights warning:
                    <br />
                    the following content contains small glitch effects that may
                    affect those with photosensitive epilepsy
                </WarningText>
            </WarningBox>
        </Container>
    );
}
