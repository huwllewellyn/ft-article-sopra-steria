import { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Outer = styled.section`
    width: 100%;
    height: 200vh;
    position: relative;
`;

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background: #111;
    display: flex;
    align-items: center;
    justify-content: center;
    position: sticky;
    top: 0;
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

const ORIGINAL = "One click...";
const GLITCH_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&*!?<>{}[]~/\\|";

function useTextScramble(text) {
    const [display, setDisplay] = useState(text);

    const scramble = useCallback(() => {
        const chars = text.split("");
        // Scramble 2-4 random characters
        const count = 2 + Math.floor(Math.random() * 3);
        for (let i = 0; i < count; i++) {
            const idx = Math.floor(Math.random() * chars.length);
            chars[idx] = GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)];
        }
        setDisplay(chars.join(""));
        // Resolve back after a brief flash
        setTimeout(() => setDisplay(text), 80);
    }, [text]);

    useEffect(() => {
        const tick = () => {
            scramble();
            timer = setTimeout(tick, 700 + Math.random() * 300);
        };
        let timer = setTimeout(tick, 500);
        return () => clearTimeout(timer);
    }, [scramble]);

    return display;
}

export default function OneClickSection() {
    const displayText = useTextScramble(ORIGINAL);

    return (
        <Outer>
            <Container>
                <Text
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    {displayText}
                </Text>
            </Container>
        </Outer>
    );
}
