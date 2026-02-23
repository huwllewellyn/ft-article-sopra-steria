import "./App.css";
import styled from "styled-components";
import { media } from "./utils/breakpoints";
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
import { getAssetPath } from "./utils/assetPath";

const AppContainer = styled.div``;

const IntroVideoWrapper = styled.div`
    position: relative;
`;

const StickyVideo = styled.div`
    position: sticky;
    top: 0;
    height: 100svh;
    z-index: 0;
    overflow: hidden;
`;

const BackgroundVideo = styled.video`
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const VideoOverlay = styled.div`
    position: absolute;
    inset: 0;
    background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.55) 0%,
        rgba(0, 0, 0, 0.55) 100%
    );
`;

const IntroContent = styled.div`
    position: relative;
    z-index: 1;
    margin-top: -100svh;
`;

const ChapterContainer = styled.div`
    scroll-margin-top: 40px;
    isolation: isolate;

    ${media.mobile(`
        scroll-margin-top: 70px;
    `)}
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
    const [navVisible, setNavVisible] = useState(false);
    const chapterRefs = useRef([]);

    // Handle tab click - scroll to chapter
    const handleTabChange = (index) => {
        setActiveTab(index);
        chapterRefs.current[index]?.scrollIntoView({ behavior: "smooth" });
    };

    // Update active tab and nav visibility based on scroll position
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 200;

            // Show nav only between start of chapter 1 and end of chapter 3
            const firstChapter = chapterRefs.current[0];
            const lastChapter = chapterRefs.current[2];
            if (firstChapter && lastChapter) {
                const chaptersStart = firstChapter.offsetTop;
                const chaptersEnd =
                    lastChapter.offsetTop + lastChapter.offsetHeight;
                setNavVisible(scrollPosition >= chaptersStart);
            }

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
            <IntroVideoWrapper>
                <StickyVideo>
                    <BackgroundVideo
                        autoPlay
                        loop
                        muted
                        playsInline
                        fetchpriority="high"
                        poster={getAssetPath("videos/posters/intro/GettyImages-1444535963.jpg")}
                        src={getAssetPath("videos/intro/GettyImages-1444535963.mp4")}
                    />
                    <VideoOverlay />
                </StickyVideo>
                <IntroContent>
                    <IntroSection />
                    <WarningSection />
                </IntroContent>
            </IntroVideoWrapper>
            <OneClickSection />
            <IntroTextSection />

            <TabNavigation
                tabs={tabs}
                activeTab={activeTab}
                onTabChange={handleTabChange}
                visible={navVisible}
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
