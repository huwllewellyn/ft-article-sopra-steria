import { useState, useEffect } from "react";
import { breakpoints } from "../utils/breakpoints";

export default function useIsMobile() {
    const [isMobile, setIsMobile] = useState(() =>
        typeof window !== "undefined"
            ? window.innerWidth < breakpoints.desktop
            : false
    );

    useEffect(() => {
        const mql = window.matchMedia(
            `(max-width: ${breakpoints.desktop - 1}px)`
        );
        const handler = (e) => setIsMobile(e.matches);
        mql.addEventListener("change", handler);
        return () => mql.removeEventListener("change", handler);
    }, []);

    return isMobile;
}
