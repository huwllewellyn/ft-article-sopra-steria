import { useRef, useEffect, useCallback } from "react";
import { animate } from "animejs";

const randomChar = () => {
    const possible =
        "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~" +
        "0123456789" +
        "ABCDEFGHIJKLMNOPQRSTUVWXYZ" +
        "abcdefghijklmnopqrstuvwxyz";
    return possible.charAt(Math.floor(Math.random() * possible.length));
};

const mask = (chars, progress) => {
    const masked = [];
    for (let i = 0; i < chars.length; i++) {
        const position = (i + 1) / chars.length;
        if (chars[i] === " ") {
            masked.push(" ");
        } else if (position > progress) {
            masked.push(randomChar());
        } else {
            masked.push(chars[i]);
        }
    }
    return masked.join("");
};

function getTextNodes(el) {
    const nodes = [];
    for (const child of el.childNodes) {
        if (child.nodeType === Node.TEXT_NODE) {
            nodes.push(child);
        } else if (child.nodeType === Node.ELEMENT_NODE) {
            nodes.push(...getTextNodes(child));
        }
    }
    return nodes;
}

export default function useTextScramble({ delay = 500, duration = 1000 } = {}) {
    const ref = useRef(null);
    const originalTexts = useRef([]);
    const hasPlayed = useRef(false);

    const scramble = useCallback(() => {
        const el = ref.current;
        if (!el) return;

        const textNodes = getTextNodes(el);
        const params = { progress: 0 };

        // Set initial scrambled state
        textNodes.forEach((node, i) => {
            const chars = originalTexts.current[i].split("");
            node.textContent = mask(chars, 0);
        });

        animate(params, {
            progress: 1,
            delay,
            duration,
            ease: "inQuad",
            onUpdate: () => {
                textNodes.forEach((node, i) => {
                    const chars = originalTexts.current[i].split("");
                    node.textContent = mask(chars, params.progress);
                });
            },
        });
    }, [delay, duration]);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const textNodes = getTextNodes(el);
        originalTexts.current = textNodes.map((node) => node.textContent);

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasPlayed.current) {
                    hasPlayed.current = true;
                    scramble();
                }
            },
            { threshold: 0.5 }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [scramble]);

    return ref;
}
