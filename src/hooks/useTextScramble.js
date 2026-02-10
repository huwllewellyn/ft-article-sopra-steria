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

export default function useTextScramble({ delay = 500, duration = 1000 } = {}) {
    const ref = useRef(null);
    const originalText = useRef("");
    const hasPlayed = useRef(false);

    const scramble = useCallback(() => {
        const el = ref.current;
        if (!el) return;

        const chars = originalText.current.split("");
        const params = { progress: 0 };

        el.textContent = mask(chars, 0);

        animate(params, {
            progress: 1,
            delay,
            duration,
            ease: "inQuad",
            onUpdate: () => {
                el.textContent = mask(chars, params.progress);
            },
        });
    }, [delay, duration]);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        originalText.current = el.textContent;

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
