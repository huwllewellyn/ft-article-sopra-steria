import styled from "styled-components";
import { motion } from "framer-motion";
import { media } from "../utils/breakpoints";

const Container = styled.section`
    width: 100%;
    min-height: 100vh;
    background: #f7ff95;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 40px 10px;
    position: relative;
`;

const TextBlock = styled(motion.div)`
    font-family: 'Space Mono', monospace;
    font-size: 21px;
    font-weight: 400;
    color: #000000;
    text-align: center;
    line-height: 1.35;
    letter-spacing: -0.84px;
    max-width: 846px;
    width: 100%;

    ${media.mobile(`
        font-size: 18px;
        max-width: 100%;
        padding: 0 10px;
    `)}

    p {
        margin: 0 0 12px;

        &:last-child {
            margin-bottom: 0;
        }
    }

    strong {
        font-weight: 700;
    }
`;

export default function IntroTextSection() {
    return (
        <Container>
            <TextBlock
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <p>
                    <strong>That is all it takes</strong> to bring down networks, disrupt lives and cause a cascade of harm in today's hyper-connected world.
                </p>
                <p>
                    Against this backdrop, what could happen if three key European industries – <strong>energy</strong>, <strong>finance</strong> and <strong>transport</strong> – come under fire?
                </p>
                <p>
                    And what solutions exist to protect society in this<br />
                    new age of digital warfare?
                </p>
            </TextBlock>
        </Container>
    );
}
