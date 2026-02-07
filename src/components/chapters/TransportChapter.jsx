import styled from "styled-components";
import { media } from "../../utils/breakpoints";
import { getAssetPath } from "../../utils/assetPath";
import { ChapterIntro } from "../shared";
import {
    NarrativeSlide,
    EditorialSlide,
    DataGridSlide,
} from "../slides";
import SlideQuote from "../slides/SlideQuote";

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

const DataCallout = styled.div`
    text-align: center;
    max-width: 600px;

    p {
        font-family: 'Space Mono', monospace;
        font-size: 27px;
        line-height: 1.35;
        letter-spacing: -0.54px;
        color: #fff;
        text-transform: uppercase;
        margin: 0 0 16px;

        ${media.mobile(`
            font-size: 20px;
        `)}
    }
`;

const DataAttribution = styled.p`
    && {
        font-size: 14px;
        font-weight: 700;
        text-transform: none;
        letter-spacing: 0;
    }
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
        font-family: 'Space Mono', monospace;
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
            <HeroSection>
                <HeroVideo
                    src={getAssetPath(VIDEOS.portOfDover)}
                    poster={getAssetPath(POSTERS.portOfDover)}
                    autoPlay loop muted playsInline
                />
                <HeroOverlay />
                <div style={{ position: 'relative', zIndex: 2 }}>
                    <ChapterIntro
                        chapter="CHAPTER_THREE"
                        subtitle="How hidden vulnerabilities grind a country's transport network to a halt"
                    />
                </div>
            </HeroSection>

            {/* T2 — Port of Dover intro */}
            <NarrativeSlide
                backgroundVideo={VIDEOS.portOfDover}
                poster={POSTERS.portOfDover}
                heading="MONDAY / PORT OF DOVER, UK"
                textPosition="top"
                accentColor={ACCENT}
            >
                <p>
                    At a major UK port, logistics drivers prepare for the day
                    ahead while commuters gather at stations across the country.
                </p>
                <p>
                    But just as the morning rush begins, unexpected glitches
                    creep into navigation systems &ndash; this is the first sign
                    of a broader attack targeting transport nationwide.
                </p>
            </NarrativeSlide>

            {/* T3 — 8:00am sat-nav freezes */}
            <NarrativeSlide
                timestamp="8:00am"
                backgroundVideo={VIDEOS.satNav}
                poster={POSTERS.satNav}
                textPosition="top"
                highlightText
                accentColor={ACCENT}
            >
                <p>
                    A driver taps the first delivery address for the day into
                    his sat-nav, only for the screen to freeze.
                </p>
                <p>He keeps tapping, but nothing displays.</p>
            </NarrativeSlide>

            {/* T4 — 8:15am depot issues */}
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
                    wonders why vans aren&rsquo;t moving.
                </p>
                <p>
                    Thousands of pounds of revenue could be lost from a late
                    departure.
                </p>
            </NarrativeSlide>

            {/* T5 — 9:00am GPS jamming */}
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
                    <strong>GPS jamming</strong> to block signals and interfere
                    with the GPS network, disrupting travel in the UK.
                </p>
            </NarrativeSlide>

            {/* T6 — Editorial: GPS vulnerability + Lecoq quote */}
            <EditorialSlide
                sectionTitle="HACKERS EXPLOIT EMERGING VULNERABILITIES"
                backgroundColor={ACCENT}
                headingColor={ACCENT}
            >
                <p>
                    While the Global Positioning System (GPS) has been a trusted
                    navigation system since the mid-1990s, it&rsquo;s far from
                    invulnerable.
                </p>
                <SlideQuote
                    quote="Jamming can block the signals, while spoofing tricks systems into misreading locations"
                    name="Fabien Lecoq"
                    role="Cybersecurity Director, Sopra Steria"
                />
                <p>
                    Transport is the second most targeted sector in the EU, with
                    the majority of attacks concentrated in air and logistics.
                </p>
            </EditorialSlide>

            {/* T7 — Data grid: EU transport incidents */}
            <DataGridSlide
                sectionTitle="HACKERS EXPLOIT EMERGING VULNERABILITIES"
                headingColor={ACCENT}
                gridColor={GRID_COLOR}
                backgroundVideo={VIDEOS.dataPoint}
                poster={POSTERS.dataPoint}
            >
                <DataCallout>
                    <p>
                        EU Transport Sector Cyber Incidents (2025)
                    </p>
                    <DataAttribution>
                        Source: ENISA 2025 Report
                    </DataAttribution>
                </DataCallout>
            </DataGridSlide>

            {/* T8 — Editorial: Garczynski quote */}
            <EditorialSlide
                sectionTitle="HACKERS EXPLOIT EMERGING VULNERABILITIES"
                backgroundColor={ACCENT}
                headingColor={ACCENT}
            >
                <SlideQuote
                    quote="Aircraft, ground systems and even airport gates are now deeply interconnected. This creates new vulnerabilities: imagine someone disrupting digital flight-planning systems during peak travel or manipulating airport operational networks"
                    name="Stefan Garczynski"
                    role="Managing Security Architect, Sopra Steria"
                />
            </EditorialSlide>

            {/* T9 — 3:00pm deliveries at slower pace */}
            <NarrativeSlide
                timestamp="3:00pm"
                heading="WHEN DISRUPTION CROSSES BORDERS"
                backgroundVideo={VIDEOS.truckRoad}
                poster={POSTERS.truckRoad}
                textPosition="top"
                accentColor={ACCENT}
            >
                <p>
                    The driver makes deliveries, albeit at a slower pace, using
                    maps and institutional knowledge.
                </p>
            </NarrativeSlide>

            {/* T10 — 3:00pm military jet GPS disturbance */}
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

            {/* T11 — 3:30pm airports security measures */}
            <NarrativeSlide
                timestamp="3:30pm"
                backgroundVideo={VIDEOS.satellite}
                poster={POSTERS.satellite}
                textPosition="top"
                accentColor={ACCENT}
            >
                <p>
                    UK airports implement additional security measures, delaying
                    arrivals and departures.
                </p>
            </NarrativeSlide>

            {/* T12 — Editorial: GPS reliance + 13 EU states */}
            <EditorialSlide
                sectionTitle="SEEKING SECURITY IN DIGITAL SOVEREIGNTY"
                backgroundColor={ACCENT}
                headingColor={ACCENT}
            >
                <p>
                    Europe&rsquo;s reliance on GPS &ndash; a US-owned satellite
                    service &ndash; poses a strategic risk in times of global
                    tension.
                </p>
                <p>
                    13 EU member states have already called on the European
                    Commission to accelerate the deployment of
                    interference-resistant Global Navigation Satellite System
                    (GNSS) technologies to accelerate Europe&rsquo;s digital
                    sovereignty.
                </p>
            </EditorialSlide>

            {/* T13 — Editorial: Julia Carver intro */}
            <EditorialSlide
                sectionTitle="SEEKING SECURITY IN DIGITAL SOVEREIGNTY"
                backgroundColor={ACCENT}
                headingColor={ACCENT}
            >
                <p>
                    Julia Carver, an assistant professor focusing on
                    Europe&rsquo;s cybersecurity policy and strategic affairs at
                    Leiden University, explains that the EU&rsquo;s vision of
                    digital sovereignty emphasises self-determination.
                </p>
            </EditorialSlide>

            {/* T14 — Editorial: Julia Carver quote */}
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

            {/* T15 — Editorial: legal perspective + inline Fahey quote */}
            <EditorialSlide
                sectionTitle="SEEKING SECURITY IN DIGITAL SOVEREIGNTY"
                backgroundColor={ACCENT}
                headingColor={ACCENT}
            >
                <p>
                    But from a legal perspective, digital sovereignty is tricky.
                </p>
                <p>
                    &ldquo;Digital sovereignty sounds compelling, but in legal
                    terms, it goes in many directions,&rdquo; says Elaine Fahey,
                    Professor of EU Law at City St George&rsquo;s, University of
                    London. &ldquo;It&rsquo;s rooted in internal market law,
                    while the threats themselves are cross-border.&rdquo;
                </p>
            </EditorialSlide>

            {/* T16 — Editorial: Elaine Fahey quote */}
            <EditorialSlide
                sectionTitle="SEEKING SECURITY IN DIGITAL SOVEREIGNTY"
                backgroundColor={ACCENT}
                headingColor={ACCENT}
            >
                <SlideQuote
                    quote="That's the paradox of the digital era; the EU has limited powers, yet it faces limitless, transboundary risks"
                    name="Elaine Fahey"
                    role="Professor of EU Law, City St George's, University of London"
                />
            </EditorialSlide>

            {/* T17 — 6:00pm overtime */}
            <NarrativeSlide
                timestamp="6:00pm"
                heading="CHAOS CONTINUES INTO THE EVENING"
                backgroundVideo={VIDEOS.mapDark}
                poster={POSTERS.mapDark}
                textPosition="top"
                accentColor={ACCENT}
            >
                <p>
                    Drivers are told they will need to work overtime to recoup
                    the company&rsquo;s revenue losses.
                </p>
            </NarrativeSlide>

            {/* T18 — 7:00pm train delayed */}
            <NarrativeSlide
                timestamp="7:00pm"
                backgroundVideo={VIDEOS.mapDark}
                poster={POSTERS.mapDark}
                textPosition="top"
                accentColor={ACCENT}
            >
                <p>
                    As the driver heads home, his usual train is delayed by two
                    hours.
                </p>
            </NarrativeSlide>

            {/* T19 — 7:30pm trains cancelled */}
            <NarrativeSlide
                timestamp="7:30pm"
                backgroundVideo={VIDEOS.trainStation}
                poster={POSTERS.trainStation}
                textPosition="top"
                highlightText
                accentColor={ACCENT}
            >
                <p>
                    A news alert says trains have been cancelled and delayed, due
                    to a coordinated attack on the WiFi networks at UK train
                    stations.
                </p>
                <p>
                    Cyber analysts believe a foreign entity is behind the travel
                    chaos throughout the country.
                </p>
            </NarrativeSlide>

            {/* T20 — Solutions data grid */}
            <DataGridSlide
                sectionTitle="THE SOLUTIONS"
                headingColor={ACCENT}
                gridColor={GRID_COLOR}
                backgroundVideo={VIDEOS.dataPoint}
                poster={POSTERS.dataPoint}
            >
                <SolutionBoxes>
                    <SolutionBox>
                        <p>Expanding European investment in GNSS</p>
                    </SolutionBox>
                    <SolutionBox>
                        <p>Manufacturing critical GPS and satellite components</p>
                    </SolutionBox>
                    <SolutionBox>
                        <p>Promoting EU-developed navigation software and apps</p>
                    </SolutionBox>
                    <SolutionBox>
                        <p>Zero-trust architectures</p>
                    </SolutionBox>
                </SolutionBoxes>
            </DataGridSlide>
        </Chapter>
    );
}
