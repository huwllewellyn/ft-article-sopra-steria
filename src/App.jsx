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
import useIsMobile from "./hooks/useIsMobile";
import useTapToExplore from "./hooks/useTapToExplore";
import useAutoplayOnView from "./hooks/useAutoplayOnView";

const AppContainer = styled.div``;

const IntroVideoWrapper = styled.div`
    position: relative;
`;

const StickyVideo = styled.div`
    position: sticky;
    top: 0;
    height: 100lvh;
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
    margin-top: -100lvh;
`;

const ChapterContainer = styled.div`
    scroll-margin-top: 40px;
    isolation: isolate;

    ${media.mobile(`
        scroll-margin-top: 60px;
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
    const isMobile = useIsMobile();
    const heroVideoRef = useAutoplayOnView();
    useTapToExplore();

    // Handle tab click - scroll to chapter
    const handleTabChange = (index) => {
        setActiveTab(index);
        chapterRefs.current[index]?.scrollIntoView({ behavior: "smooth" });
    };

    // Update active tab and nav visibility via IntersectionObserver
    useEffect(() => {
        const intersecting = new Set();

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const index = chapterRefs.current.indexOf(entry.target);
                    if (index === -1) return;
                    if (entry.isIntersecting) intersecting.add(index);
                    else intersecting.delete(index);
                });

                if (intersecting.size > 0) {
                    setNavVisible(true);
                    setActiveTab(Math.max(...intersecting));
                }
            },
            { rootMargin: "-200px 0px 0px 0px", threshold: 0 },
        );

        chapterRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <AppContainer>
            <IntroVideoWrapper>
                <StickyVideo>
                    <BackgroundVideo
                        ref={heroVideoRef}
                        loop
                        muted
                        playsInline
                        fetchpriority="high"
                        poster={getAssetPath("videos/posters/intro/GettyImages-1444535963.jpg")}
                        src={getAssetPath(
                            isMobile
                                ? "videos/intro/GettyImages-1444535963_mobile.mp4"
                                : "videos/intro/GettyImages-1444535963.mp4",
                        )}
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
