import { useRef, useEffect } from "react";
import styled from "styled-components";
import { media } from "../../utils/breakpoints";
import { getAssetPath } from "../../utils/assetPath";
import { ChapterIntro } from "../shared";
import {
    NarrativeSlide,
    EditorialSlide,
    DataGridSlide,
    StickySlide,
    ContinuousSlide,
} from "../slides";
import { EditorialBody } from "../slides/EditorialSlide";
import SlideQuote from "../slides/SlideQuote";
import {
    DataCenter,
    DataText,
    DataAttribution,
    SolutionBoxes,
    SolutionBox,
} from "../shared/DataSlideComponents";
import useScrollVideo from "../../hooks/useScrollVideo";
import useAutoplayOnView from "../../hooks/useAutoplayOnView";
import useIsMobile from "../../hooks/useIsMobile";
import AutoplayVideo from "../shared/AutoplayVideo";
import ResponsiveLottieAnimation from "../ResponsiveLottieAnimation";

const ACCENT = "#c999ff";
const GRID_COLOR = "rgba(201, 153, 255, 0.15)";

const VIDEOS = {
    portOfDover: "/videos/ch3/ch3_1.mp4",
    portOfDoverMobile: "/videos/ch3/ch3_1_mobile.mp4",
    satNav: "/videos/ch3/ch3_2.mp4",
    truckDepot: "/videos/ch3/ch3_3.mp4",
    airportBoard: "/videos/ch3/ch3_4.mp4",
    truckRoad: "/videos/ch3/ch3_5.mp4",
    satellite: "/videos/ch3/ch3_6.mp4",
    mapDark: "/videos/ch3/ch3_7.mp4",
    trainStation: "/videos/ch3/ch3_8.mp4",
    dataPoint: "/videos/ch3/dp3_desktop.mp4",
};

const POSTERS = {
    portOfDover: "/videos/posters/ch3/ch3_1.jpg",
    satNav: "/videos/posters/ch3/ch3_2.jpg",
    truckDepot: "/videos/posters/ch3/ch3_3.jpg",
    airportBoard: "/videos/posters/ch3/ch3_4.jpg",
    truckRoad: "/videos/posters/ch3/ch3_5.jpg",
    satellite: "/videos/posters/ch3/ch3_6.jpg",
    mapDark: "/videos/posters/ch3/ch3_7.jpg",
    trainStation: "/videos/posters/ch3/ch3_8.jpg",
    dataPoint: "/videos/posters/ch3/dp3_desktop.jpg",
};

const Chapter = styled.div`
    background: #0d1117;
    color: #fff;
`;

const HeroSection = styled.section`
    position: relative;
    min-height: 100lvh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 102px 80px 80px;
    overflow: hidden;

    ${media.mobile(`
        padding: 80px 20px 60px;
    `)}
`;

const HeroVideo = styled.video`
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const HeroOverlay = styled.div`
    position: absolute;
    inset: 0;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.5) 0%,
        rgba(0, 0, 0, 0.2) 40%,
        rgba(0, 0, 0, 0.6) 100%
    );
`;

const T7_PADDING = 20;

function T7Content() {
    const topRef = useRef(null);
    const bottomRef = useRef(null);
    const lottieRef = useRef(null);

    useEffect(() => {
        const measure = () => {
            const top = topRef.current;
            const bottom = bottomRef.current;
            const lottie = lottieRef.current;
            if (!top || !bottom || !lottie) return;

            const parent =
                top
                    .closest("[data-slide]")
                    ?.querySelector(":scope > div > div") || top.parentElement;
            const parentRect = parent.getBoundingClientRect();
            const topRect = top.getBoundingClientRect();
            const bottomRect = bottom.getBoundingClientRect();

            const offsetTop = topRect.bottom - parentRect.top + T7_PADDING;
            const height =
                bottomRect.top - parentRect.top - offsetTop - T7_PADDING;

            lottie.style.position = "absolute";
            lottie.style.top = `${offsetTop}px`;
            lottie.style.height = `${Math.max(0, height)}px`;
            lottie.style.left = "0";
            lottie.style.right = "0";
        };

        // Run on mount, resize, and periodically until positioned
        measure();
        window.addEventListener("resize", measure);
        const interval = setInterval(measure, 200);
        const timeout = setTimeout(() => clearInterval(interval), 3000);

        return () => {
            window.removeEventListener("resize", measure);
            clearInterval(interval);
            clearTimeout(timeout);
        };
    }, []);

    return (
        <>
            <DataText ref={topRef} $bg={ACCENT}>
                <span>EU transport sector cyber incidents (2025)</span>
            </DataText>
            <div
                ref={lottieRef}
                style={{
                    transformOrigin: "center bottom",
                    transform: "scale(1.1)",
                }}
            >
                <ResponsiveLottieAnimation
                    animations={{
                        mobile: "/videos/ch3/SOPRA_DigitalDisruption_D3_NOBKG.json",
                        tablet: "/videos/ch3/SOPRA_DigitalDisruption_D3_NOBKG.json",
                        desktop:
                            "/videos/ch3/SOPRA_DigitalDisruption_D3_NOBKG.json",
                    }}
                    loop={true}
                    autoplay={true}
                    width="100%"
                    height="100%"
                    preserveAspectRatio="xMidYMid meet"
                />
            </div>
            <DataAttribution
                ref={bottomRef}
                $bg={"#fff"}
                style={{
                    position: "absolute",
                    bottom: 60,
                    left: 20,
                    right: 0,
                    margin: "0 auto",
                    maxWidth: 600,
                }}
            >
                <span>Source: ENISA 2025 report</span>
            </DataAttribution>
        </>
    );
}

function ScrollSyncHeroVideo({ scrollProgress, src, mobileSrc, poster }) {
    const isMobile = useIsMobile();
    const scrollVideoRef = useScrollVideo(isMobile ? null : scrollProgress);
    const autoplayRef = useAutoplayOnView();

    if (isMobile && mobileSrc) {
        return (
            <HeroVideo
                ref={autoplayRef}
                src={mobileSrc}
                poster={poster}
                muted
                playsInline
                autoPlay
                loop
            />
        );
    }

    return (
        <HeroVideo
            ref={scrollVideoRef}
            src={src}
            poster={poster}
            muted
            playsInline
            preload="auto"
        />
    );
}

export default function TransportChapter() {
    const isMobile = useIsMobile();
    return (
        <Chapter>
            {/* Hero + T1 — continuous Port of Dover video */}
            <ContinuousSlide
                trackHeight="300vh"
                flowHeight="200vh"
                background={({ scrollYProgress }) => (
                    <>
                        <ScrollSyncHeroVideo
                            scrollProgress={scrollYProgress}
                            src={getAssetPath(VIDEOS.portOfDover)}
                            mobileSrc={getAssetPath(VIDEOS.portOfDoverMobile)}
                            poster={getAssetPath(POSTERS.portOfDover)}
                        />
                        <HeroOverlay />
                    </>
                )}
                slides={[
                    () => (
                        <HeroSection>
                            <div style={{ position: "relative", zIndex: 2 }}>
                                <ChapterIntro
                                    chapter="CHAPTER_THREE"
                                    title="TRANSPORT"
                                    subtitle="How hidden vulnerabilities could grind a country’s transport network to a halt"
                                />
                            </div>
                        </HeroSection>
                    ),
                    () => (
                        <NarrativeSlide
                            backgroundColor="transparent"
                            heading={
                                <>
                                    MONDAY
                                    <br />
                                    PORT OF DOVER, UK
                                </>
                            }
                            textPosition="top"
                            accentColor={ACCENT}
                        >
                            <p>
                                At a major UK port, logistics drivers prepare
                                for the day ahead while commuters gather at
                                stations across the country.
                            </p>
                            <br />
                            <br />
                            <p>
                                Just as the morning rush begins, unexpected
                                glitches creep into navigation systems. This is
                                the first sign of a broader attack targeting
                                transport nationwide.
                            </p>
                        </NarrativeSlide>
                    ),
                ]}
            />

            {/* T3 — 8:00am sat-nav freezes */}
            <StickySlide
                appearInPlace
                trackHeight="300vh"
                mobileSimplify={!isMobile}
            >
                <NarrativeSlide
                    timestamp="8:00am"
                    backgroundVideo={VIDEOS.satNav}
                    poster={POSTERS.satNav}
                    textPosition="top"
                    highlightText
                    accentColor={ACCENT}
                >
                    <p>
                        A driver taps the day’s first delivery address into his
                        satnav, only for the screen to freeze.
                    </p>
                    <br />
                    <br />
                    <p>He keeps tapping, but nothing displays.</p>
                </NarrativeSlide>
            </StickySlide>

            {/* T4 — 8:15am depot issues */}
            <StickySlide
                appearInPlace
                trackHeight="300vh"
                mobileSimplify={!isMobile}
            >
                <NarrativeSlide
                    timestamp="8:15am"
                    backgroundVideo={VIDEOS.truckDepot}
                    poster={POSTERS.truckDepot}
                    textPosition="top"
                    highlightText
                    accentColor={ACCENT}
                >
                    <p>
                        Others in the depot face similar issues, and management
                        wonders why vans aren’t moving.
                    </p>
                    <br />
                    <br />
                    <p>
                        Thousands of pounds of revenue could be lost because of
                        a late departure.
                    </p>
                </NarrativeSlide>
            </StickySlide>

            {/* T5 — 9:00am GPS jamming */}
            <StickySlide appearInPlace mobileSimplify={false}>
                <NarrativeSlide
                    timestamp="9:00am"
                    backgroundVideo={VIDEOS.airportBoard}
                    poster={POSTERS.airportBoard}
                    textPosition="top"
                    highlightText
                    accentColor={ACCENT}
                >
                    <p>
                        A foreign hacker group is using a technique called{" "}
                        <strong>GPS jamming</strong> to block signals and
                        interfere with the GPS network, disrupting travel in the
                        UK.
                    </p>
                </NarrativeSlide>
            </StickySlide>
            {/* T6a — Editorial: GPS vulnerability + Lecoq quote */}
            <StickySlide appearInPlace>
                <EditorialSlide
                    sectionTitle="HACKERS EXPLOIT EMERGING VULNERABILITIES"
                    backgroundColor={ACCENT}
                    headingColor={ACCENT}
                >
                    <EditorialBody>
                        <p>
                            While the Global Positioning System (GPS) has been a
                            trusted navigation system since the mid-1990s, it’s
                            far from invulnerable.
                        </p>
                    </EditorialBody>
                </EditorialSlide>
            </StickySlide>

            {/* T6b — Editorial: GPS vulnerability + Lecoq quote */}
            <StickySlide appearInPlace>
                <EditorialSlide
                    sectionTitle="HACKERS EXPLOIT EMERGING VULNERABILITIES"
                    hideSectionTitle={isMobile}
                    backgroundColor={ACCENT}
                    headingColor={ACCENT}
                >
                    <SlideQuote
                        quote={
                            <>
                                <strong>Jamming</strong> can block the signals,
                                while <strong>spoofing</strong> tricks systems
                                into misreading locations
                            </>
                        }
                        name="Fabien Lecoq"
                        role="Cybersecurity Director, Sopra Steria"
                    />
                    <EditorialBody>
                        <p>
                            Transport is the second most targeted sector in the
                            EU, with the majority of attacks concentrated in air
                            and logistics.
                        </p>
                    </EditorialBody>
                </EditorialSlide>
            </StickySlide>

            {/* T7 — Data grid: EU transport incidents */}
            <StickySlide appearInPlace flowHeight="100vh" trackHeight="200vh" background={`repeating-linear-gradient(90deg, ${ACCENT} 0px, ${ACCENT} 2px, transparent 2px, transparent 40px), repeating-linear-gradient(0deg, ${ACCENT} 0px, ${ACCENT} 2px, #000 2px, #000 40px)`}>
                <DataGridSlide
                    sectionTitle="HACKERS EXPLOIT EMERGING VULNERABILITIES"
                    hideSectionTitle={isMobile}
                    headingColor={ACCENT}
                    backgroundColor="transparent"
                    // mobileBackgroundImage="/videos/ch3/SOPRA_DigitalDisruption_D3_BKG.png"
                >
                    <T7Content />
                </DataGridSlide>
            </StickySlide>

            {/* T8 — Editorial: Garczynski quote */}
            <StickySlide appearInPlace flowHeight="200vh" trackHeight="200vh">
                <EditorialSlide
                    sectionTitle="HACKERS EXPLOIT EMERGING VULNERABILITIES"
                    hideSectionTitle={isMobile}
                    backgroundColor={ACCENT}
                    headingColor={ACCENT}
                >
                    <SlideQuote
                        quote={
                            <>
                                Aircraft, ground systems and even airport gates
                                are now deeply interconnected.
                                <br />
                                <br />
                                This creates new vulnerabilities: imagine
                                someone disrupting digital flight‑planning
                                systems during peak travel or manipulating
                                airport operational networks
                            </>
                        }
                        name="Stefan Garczynski"
                        role="Managing Security Architect, Sopra Steria"
                    />
                </EditorialSlide>
            </StickySlide>

            {/* T9 — 12:00pm deliveries at slower pace */}
            <StickySlide trackHeight="300vh" mobileSimplify={!isMobile}>
                <NarrativeSlide
                    timestamp="12:00pm"
                    heading="WHEN DISRUPTION CROSSES BORDERS"
                    backgroundVideo={VIDEOS.truckRoad}
                    poster={POSTERS.truckRoad}
                    textPosition="top"
                    accentColor={ACCENT}
                >
                    <p>
                        The driver makes deliveries, albeit at a slower pace,
                        using maps and institutional knowledge.
                    </p>
                </NarrativeSlide>
            </StickySlide>

            {/* T10-T11 — Military jet / airports (continuous video) */}
            <ContinuousSlide
                trackHeight="200vh"
                flowHeight="200vh"
                appearInPlace
                background={() => (
                    <AutoplayVideo
                        src={getAssetPath(VIDEOS.satellite)}
                        poster={getAssetPath(POSTERS.satellite)}
                        loop
                        muted
                        playsInline
                        style={{
                            position: "absolute",
                            inset: 0,
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                        }}
                    />
                )}
                slides={[
                    () => (
                        <NarrativeSlide
                            timestamp="3:00pm"
                            backgroundColor="transparent"
                            textPosition="top"
                            accentColor={ACCENT}
                        >
                            <p>
                                Over the radio, news breaks about a disruption
                                to a UK military jet carrying an MP over Russian
                                airspace. Early reports suggest it was a GPS
                                disturbance.
                            </p>
                            <br />
                            <br />
                            <p>
                                UK airports implement additional security
                                measures, delaying arrivals and departures.
                            </p>
                        </NarrativeSlide>
                    ),
                ]}
            />

            {/* T12 — Editorial: GPS reliance + 13 EU states */}
            <StickySlide>
                <EditorialSlide
                    sectionTitle="SEEKING SECURITY IN DIGITAL SOVEREIGNTY"
                    backgroundColor={ACCENT}
                    headingColor={ACCENT}
                >
                    <EditorialBody>
                        <p>
                            Europe’s reliance on GPS – a US-owned satellite
                            service – poses a strategic risk in times of global
                            tension.
                        </p>
                        <p>
                            13 EU member states have already{" "}
                            <a href="https://navisp.esa.int/news/article/13%20EU%20Member%20States%20call%20for%20common%20actions%20in%20response%20to%20GNSS%20jamming%20and%20spoofing%20threats">
                                called
                            </a>{" "}
                            on the European Commission to accelerate the
                            deployment of interference-resistant Global
                            Navigation Satellite System (GNSS) technologies to
                            accelerate Europe’s digital sovereignty.
                        </p>
                    </EditorialBody>
                </EditorialSlide>
            </StickySlide>

            {/* T13 — Editorial: Julia Carver intro */}
            <StickySlide appearInPlace>
                <EditorialSlide
                    sectionTitle="SEEKING SECURITY IN DIGITAL SOVEREIGNTY"
                    hideSectionTitle={isMobile}
                    backgroundColor={ACCENT}
                    headingColor={ACCENT}
                >
                    <EditorialBody>
                        <p>
                            Julia Carver, an assistant professor focusing on
                            Europe’s cybersecurity policy and strategic affairs
                            at Leiden University, explains that the EU’s vision
                            of digital sovereignty emphasises
                            self-determination.
                        </p>
                    </EditorialBody>
                </EditorialSlide>
            </StickySlide>

            {/* T14 — Editorial: Julia Carver quote */}
            <StickySlide appearInPlace>
                <EditorialSlide
                    sectionTitle="SEEKING SECURITY IN DIGITAL SOVEREIGNTY"
                    hideSectionTitle={isMobile}
                    backgroundColor={ACCENT}
                    headingColor={ACCENT}
                >
                    <SlideQuote
                        quote="Europe wants to choose its digital vendors and set the regulations and parameters for how its digital devices are used. It also wants to have greater control over personal and non-personal data"
                        name="Julia Carver"
                        role="Assistant Professor, Leiden University"
                    />
                </EditorialSlide>
            </StickySlide>

            {/* T15 — Editorial: legal perspective + inline Fahey quote */}
            <StickySlide appearInPlace trackHeight="200vh" flowHeight="200vh">
                <EditorialSlide
                    sectionTitle="SEEKING SECURITY IN DIGITAL SOVEREIGNTY"
                    hideSectionTitle={isMobile}
                    backgroundColor={ACCENT}
                    headingColor={ACCENT}
                >
                    <EditorialBody>
                        <p>
                            From a legal perspective, digital sovereignty is
                            tricky.
                        </p>
                    </EditorialBody>
                    <SlideQuote
                        quote={
                            <>
                                <p>
                                    Digital sovereignty sounds compelling but,
                                    in legal terms, it goes in many directions.
                                    It’s rooted in internal market law, yet the
                                    threats themselves are cross-border.
                                </p>
                                <p>
                                    That’s the paradox of the digital era; the
                                    EU has limited powers, yet it faces
                                    limitless, transboundary risks
                                </p>
                            </>
                        }
                        name="Elaine Fahey"
                        role="Professor of EU Law, City St George’s, University of London"
                    />
                </EditorialSlide>
            </StickySlide>

            {/* T17-T18 — Overtime / train station */}
            <ContinuousSlide
                trackHeight="400vh"
                flowHeight="300vh"
                slides={[
                    () => (
                        <NarrativeSlide
                            timestamp="6:00pm"
                            heading="CHAOS CONTINUES INTO THE EVENING"
                            backgroundVideo={VIDEOS.mapDark}
                            poster={POSTERS.mapDark}
                            textPosition="top"
                            accentColor={ACCENT}
                        >
                            <p>
                                Drivers are told they will need to work overtime
                                to recoup the company’s revenue losses.
                            </p>
                            <br />
                            <br />
                            <p>
                                As the driver heads home, his usual train is
                                delayed by two hours.
                            </p>
                        </NarrativeSlide>
                    ),
                    () => (
                        <NarrativeSlide
                            timestamp="7:30pm"
                            backgroundVideo={VIDEOS.trainStation}
                            poster={POSTERS.trainStation}
                            textPosition="top"
                            highlightText
                            accentColor={ACCENT}
                        >
                            <p>
                                A news alert says trains have been cancelled or
                                delayed owing to a coordinated attack on wifi
                                networks at UK train stations.
                            </p>
                            <br />
                            <br />
                            <p>
                                Cyber analysts believe a foreign entity is
                                behind travel chaos throughout the country.
                            </p>
                        </NarrativeSlide>
                    ),
                ]}
            />

            {/* T20 — Solutions data grid */}
            <StickySlide
                trackHeight="200vh"
                flowHeight="200vh"
                mobileSimplify={false}
            >
                <DataGridSlide
                    sectionTitle="THE SOLUTIONS"
                    headingColor="#EBEBEB"
                    headingBordered
                    headingFontFamily="'Space Grotesk', sans-serif"
                    headingFontWeight={500}
                    backgroundColor="#000"
                    lottieAnimation={{
                        mobile: "/videos/ch3/SOLUTIONS_3.json",
                        tablet: "/videos/ch3/SOLUTIONS_3.json",
                        desktop: "/videos/ch3/SOLUTIONS_3.json",
                    }}
                >
                    <SolutionBoxes>
                        <SolutionBox>
                            <p>Expanding European investment in GNSS</p>
                        </SolutionBox>
                        <SolutionBox>
                            <p>
                                Manufacturing critical GPS and satellite
                                components
                            </p>
                        </SolutionBox>
                        <SolutionBox>
                            <p>
                                Promoting EU-developed navigation software and
                                apps
                            </p>
                        </SolutionBox>
                        <SolutionBox>
                            <p>Zero-trust architectures</p>
                        </SolutionBox>
                    </SolutionBoxes>
                </DataGridSlide>
            </StickySlide>
        </Chapter>
    );
}
