import styled from "styled-components";
import { media } from "../../utils/breakpoints";
import { getAssetPath } from "../../utils/assetPath";
import { ChapterIntro } from "../shared";
import {
    NarrativeSlide,
    EditorialSlide,
    DataGridSlide,
    StickySlide,
} from "../slides";
import SlideQuote from "../slides/SlideQuote";
import {
    DataCenter,
    DataText,
    DataAttribution,
} from "../shared/DataSlideComponents";

const ACCENT = "#c999ff";
const GRID_COLOR = "rgba(201, 153, 255, 0.15)";

const VIDEOS = {
    portOfDover: "/videos/ch3/ch3_1.mp4",
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
    min-height: 100vh;
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

const SolutionBoxes = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;
    max-width: 600px;
`;

const SolutionBox = styled.div`
    border: 1px solid ${ACCENT};
    padding: 20px 24px;
    text-align: center;

    p {
        font-family: "Space Mono", monospace;
        font-size: 21px;
        line-height: 1.35;
        letter-spacing: -0.84px;
        color: #fff;
        margin: 0;

        ${media.mobile(`
            font-size: 16px;
        `)}
    }
`;

export default function TransportChapter() {
    return (
        <Chapter>
            {/* T1 — Hero / Chapter Intro */}
            <StickySlide appearInPlace>
                <HeroSection>
                    <HeroVideo
                        src={getAssetPath(VIDEOS.portOfDover)}
                        poster={getAssetPath(POSTERS.portOfDover)}
                        autoPlay
                        loop
                        muted
                        playsInline
                    />
                    <HeroOverlay />
                    <div style={{ position: "relative", zIndex: 2 }}>
                        <ChapterIntro
                            chapter="CHAPTER_THREE"
                            subtitle="How hidden vulnerabilities grind a country’s transport network to a halt"
                        />
                    </div>
                </HeroSection>
            </StickySlide>

            {/* T2 — Port of Dover intro */}
            <StickySlide appearInPlace>
                <NarrativeSlide
                    backgroundVideo={VIDEOS.portOfDover}
                    poster={POSTERS.portOfDover}
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
                        At a major UK port, logistics drivers prepare for the
                        day ahead while commuters gather at stations across the
                        country.
                    </p>
                    <br />
                    <br />
                    <p>
                        But just as the morning rush begins, unexpected glitches
                        creep into navigation systems – this is the first sign
                        of a broader attack targeting transport nationwide.
                    </p>
                </NarrativeSlide>
            </StickySlide>

            {/* T3 — 8:00am sat-nav freezes */}
            <StickySlide appearInPlace>
                <NarrativeSlide
                    timestamp="8:00am"
                    backgroundVideo={VIDEOS.satNav}
                    poster={POSTERS.satNav}
                    textPosition="top"
                    highlightText
                    accentColor={ACCENT}
                >
                    <p>
                        A driver taps the first delivery address for the day
                        into his sat-nav, only for the screen to freeze.
                    </p>
                    <br />
                    <br />
                    <p>He keeps tapping, but nothing displays.</p>
                </NarrativeSlide>
            </StickySlide>

            {/* T4 — 8:15am depot issues */}
            <StickySlide appearInPlace>
                <NarrativeSlide
                    timestamp="8:15am"
                    backgroundVideo={VIDEOS.truckDepot}
                    poster={POSTERS.truckDepot}
                    textPosition="top"
                    highlightText
                    accentColor={ACCENT}
                >
                    <p>
                        Others in the depot face similar issues and management
                        wonders why vans aren’t moving.
                    </p>
                    <br />
                    <br />
                    <p>
                        Thousands of pounds of revenue could be lost from a late
                        departure.
                    </p>
                </NarrativeSlide>
            </StickySlide>

            {/* T5 — 9:00am GPS jamming */}
            <StickySlide appearInPlace>
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

            {/* T6 — Editorial: GPS vulnerability + Lecoq quote */}
            <StickySlide appearInPlace>
                <EditorialSlide
                    sectionTitle="HACKERS EXPLOIT EMERGING VULNERABILITIES"
                    backgroundColor={ACCENT}
                    headingColor={ACCENT}
                >
                    <p>
                        While the Global Positioning System (GPS) has been a
                        trusted navigation system since the mid-1990s, it’s far
                        from invulnerable.
                    </p>
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
                    <p>
                        Transport is the second most targeted sector in the EU,
                        with the majority of attacks concentrated in air and
                        logistics.
                    </p>
                </EditorialSlide>
            </StickySlide>

            {/* T7 — Data grid: EU transport incidents */}
            <StickySlide appearInPlace>
                <DataGridSlide
                    sectionTitle="HACKERS EXPLOIT EMERGING VULNERABILITIES"
                    headingColor={ACCENT}
                    backgroundColor={ACCENT}
                    gridColor={GRID_COLOR}
                    backgroundVideo={VIDEOS.dataPoint}
                    poster={POSTERS.dataPoint}
                >
                    <DataText $bg={ACCENT}>
                        <span>EU Transport Sector Cyber Incidents (2025)</span>
                    </DataText>
                    {/* <DataCenter $bg="#fff"></DataCenter> */}
                    <DataAttribution $bg={"#fff"}>
                        <span>Source: ENISA 2025 Report</span>
                    </DataAttribution>
                </DataGridSlide>
            </StickySlide>

            {/* T8 — Editorial: Garczynski quote */}
            <StickySlide appearInPlace>
                <EditorialSlide
                    sectionTitle="HACKERS EXPLOIT EMERGING VULNERABILITIES"
                    backgroundColor={ACCENT}
                    headingColor={ACCENT}
                >
                    <SlideQuote
                        quote="Aircraft, ground systems and even airport gates are now deeply interconnected. This creates new vulnerabilities: imagine someone disrupting digital flight‑planning systems during peak travel or manipulating airport operational networks"
                        name="Stefan Garczynski"
                        role="Managing Security Architect, Sopra Steria"
                    />
                </EditorialSlide>
            </StickySlide>

            {/* T9 — 12:00pm deliveries at slower pace */}
            <StickySlide appearInPlace>
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

            {/* T10 — 3:00pm military jet GPS disturbance */}
            <StickySlide appearInPlace>
                <NarrativeSlide
                    timestamp="3:00pm"
                    backgroundVideo={VIDEOS.satellite}
                    poster={POSTERS.satellite}
                    textPosition="top"
                    accentColor={ACCENT}
                >
                    <p>
                        Over the radio, news breaks about a disruption to a UK
                        military jet carrying an MP over Russian airspace. Early
                        reports suggest it was a GPS disturbance.
                    </p>
                </NarrativeSlide>
            </StickySlide>

            {/* T11 — 3:30pm airports security measures */}
            <StickySlide appearInPlace>
                <NarrativeSlide
                    timestamp="3:30pm"
                    backgroundVideo={VIDEOS.satellite}
                    poster={POSTERS.satellite}
                    textPosition="top"
                    accentColor={ACCENT}
                >
                    <p>
                        UK airports implement additional security measures,
                        delaying arrivals and departures.
                    </p>
                </NarrativeSlide>
            </StickySlide>

            {/* T12 — Editorial: GPS reliance + 13 EU states */}
            <StickySlide appearInPlace>
                <EditorialSlide
                    sectionTitle="SEEKING SECURITY IN DIGITAL SOVEREIGNTY"
                    backgroundColor={ACCENT}
                    headingColor={ACCENT}
                >
                    <p>
                        Europe’s reliance on GPS – a US-owned satellite service
                        – poses a strategic risk in times of global tension.
                    </p>
                    <p>
                        13 EU member states have already{" "}
                        <a href="https://navisp.esa.int/news/article/13%20EU%20Member%20States%20call%20for%20common%20actions%20in%20response%20to%20GNSS%20jamming%20and%20spoofing%20threats">
                            called
                        </a>{" "}
                        on the European Commission to accelerate the deployment
                        of interference-resistant Global Navigation Satellite
                        System (GNSS) technologies to accelerate Europe’s
                        digital sovereignty.
                    </p>
                </EditorialSlide>
            </StickySlide>

            {/* T13 — Editorial: Julia Carver intro */}
            <StickySlide appearInPlace>
                <EditorialSlide
                    sectionTitle="SEEKING SECURITY IN DIGITAL SOVEREIGNTY"
                    backgroundColor={ACCENT}
                    headingColor={ACCENT}
                >
                    <p>
                        Julia Carver, an assistant professor focusing on
                        Europe’s cybersecurity policy and strategic affairs at
                        Leiden University, explains that the EU’s vision of
                        digital sovereignty emphasises self-determination.
                    </p>
                </EditorialSlide>
            </StickySlide>

            {/* T14 — Editorial: Julia Carver quote */}
            <StickySlide appearInPlace>
                <EditorialSlide
                    sectionTitle="SEEKING SECURITY IN DIGITAL SOVEREIGNTY"
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
            <StickySlide appearInPlace>
                <EditorialSlide
                    sectionTitle="SEEKING SECURITY IN DIGITAL SOVEREIGNTY"
                    backgroundColor={ACCENT}
                    headingColor={ACCENT}
                >
                    <p>
                        But from a legal perspective, digital sovereignty is
                        tricky.
                    </p>
                    <p>
                        “Digital sovereignty sounds compelling, but, in legal
                        terms, it goes in many directions,” says Elaine Fahey,
                        Professor of EU Law at City St George’s, University of
                        London. “It’s rooted in internal market law, while the
                        threats themselves are cross-border.”
                    </p>
                </EditorialSlide>
            </StickySlide>

            {/* T16 — Editorial: Elaine Fahey quote */}
            <StickySlide appearInPlace>
                <EditorialSlide
                    sectionTitle="SEEKING SECURITY IN DIGITAL SOVEREIGNTY"
                    backgroundColor={ACCENT}
                    headingColor={ACCENT}
                >
                    <SlideQuote
                        quote="That’s the paradox of the digital era; the EU has limited powers, yet it faces limitless, transboundary risks"
                        name="Elaine Fahey"
                        role="Professor of EU Law, City St George’s, University of London"
                    />
                </EditorialSlide>
            </StickySlide>

            {/* T17 — 6:00pm overtime */}
            <StickySlide appearInPlace>
                <NarrativeSlide
                    timestamp="6:00pm"
                    heading="CHAOS CONTINUES INTO THE EVENING"
                    backgroundVideo={VIDEOS.mapDark}
                    poster={POSTERS.mapDark}
                    textPosition="top"
                    accentColor={ACCENT}
                >
                    <p>
                        Drivers are told they will need to work overtime to
                        recoup the company’s revenue losses.
                    </p>
                </NarrativeSlide>
            </StickySlide>

            {/* T18 — 7:00pm train delayed */}
            <StickySlide appearInPlace>
                <NarrativeSlide
                    timestamp="7:00pm"
                    backgroundVideo={VIDEOS.mapDark}
                    poster={POSTERS.mapDark}
                    textPosition="top"
                    accentColor={ACCENT}
                >
                    <p>
                        As the driver heads home, his usual train is delayed by
                        two hours.
                    </p>
                </NarrativeSlide>
            </StickySlide>

            {/* T19 — 7:30pm trains cancelled */}
            <StickySlide appearInPlace>
                <NarrativeSlide
                    timestamp="7:30pm"
                    backgroundVideo={VIDEOS.trainStation}
                    poster={POSTERS.trainStation}
                    textPosition="top"
                    highlightText
                    accentColor={ACCENT}
                >
                    <p>
                        A news alert says trains have been cancelled and delayed
                        due to a coordinated attack on the Wi-Fi networks at UK
                        train stations.
                    </p>
                    <br />
                    <br />
                    <p>
                        Cyber analysts believe a foreign entity is behind the
                        travel chaos throughout the country.
                    </p>
                </NarrativeSlide>
            </StickySlide>

            {/* T20 — Solutions data grid */}
            <StickySlide appearInPlace>
                <DataGridSlide
                    sectionTitle="THE SOLUTIONS"
                    headingColor={ACCENT}
                    backgroundColor={ACCENT}
                    gridColor={GRID_COLOR}
                    backgroundVideo={VIDEOS.dataPoint}
                    poster={POSTERS.dataPoint}
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
