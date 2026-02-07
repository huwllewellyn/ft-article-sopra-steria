import styled from "styled-components";
import { motion } from "framer-motion";

const Container = styled.section`
    width: 100%;
    min-height: 100vh;
    background: #111;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`;

const Text = styled(motion.p)`
    font-family: 'Space Mono', monospace;
    font-size: 24px;
    font-weight: 500;
    color: #f7ff95;
    text-align: center;
    text-transform: uppercase;
    line-height: 1.4;
    margin: 0;
`;

export default function OneClickSection() {
    return (
        <Container>
            <Text
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                One click...
            </Text>
        </Container>
    );
}
