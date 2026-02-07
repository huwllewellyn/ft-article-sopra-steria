import "./App.css";
import styled from "styled-components";
import IntroSection from "./components/IntroSection";
import WarningSection from "./components/WarningSection";
import OneClickSection from "./components/OneClickSection";
import IntroTextSection from "./components/IntroTextSection";
import TabNavigation from "./components/TabNavigation";
import {
    EnergyChapter,
    FinanceChapter,
    TransportChapter,
    ConclusionSection,
} from "./components/chapters";
import { useState, useRef, useEffect } from "react";

const AppContainer = styled.div``;

const ChapterContainer = styled.div`
    scroll-margin-top: 60px;
`;

// Tab configuration for navigation
const tabs = [
    {
        id: "energy",
        label: "Energy",
        shortLabel: "ENER",
    },
    {
        id: "finance",
        label: "Finance",
        shortLabel: "FINAN",
    },
    {
        id: "transport",
        label: "Transport",
        shortLabel: "SPORT",
    },
];

function App() {
    const [activeTab, setActiveTab] = useState(0);
    const chapterRefs = useRef([]);

    // Handle tab click - scroll to chapter
    const handleTabChange = (index) => {
        setActiveTab(index);
        chapterRefs.current[index]?.scrollIntoView({ behavior: "smooth" });
    };

    // Update active tab based on scroll position
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 200;

            chapterRefs.current.forEach((ref, index) => {
                if (ref) {
                    const offsetTop = ref.offsetTop;
                    const offsetBottom = offsetTop + ref.offsetHeight;

                    if (
                        scrollPosition >= offsetTop &&
                        scrollPosition < offsetBottom
                    ) {
                        setActiveTab(index);
                    }
                }
            });
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <AppContainer>
            <IntroSection />
            <WarningSection />
            <OneClickSection />
            <IntroTextSection />

            <TabNavigation
                tabs={tabs}
                activeTab={activeTab}
                onTabChange={handleTabChange}
            />

            <ChapterContainer ref={(el) => (chapterRefs.current[0] = el)}>
                <EnergyChapter />
            </ChapterContainer>

            <ChapterContainer ref={(el) => (chapterRefs.current[1] = el)}>
                <FinanceChapter />
            </ChapterContainer>

            <ChapterContainer ref={(el) => (chapterRefs.current[2] = el)}>
                <TransportChapter />
            </ChapterContainer>

            <ConclusionSection />
        </AppContainer>
    );
}

export default App;
