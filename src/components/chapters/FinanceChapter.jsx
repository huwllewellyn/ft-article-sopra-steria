import styled from "styled-components";
import { media } from "../../utils/breakpoints";
import { getAssetPath } from "../../utils/assetPath";
import { ChapterIntro } from "../shared";
import {
    NarrativeSlide,
    EditorialSlide,
    FullBleedImage,
    DataGridSlide,
    StickySlide,
} from "../slides";
import SlideQuote from "../slides/SlideQuote";
import useScrollVideo from "../../hooks/useScrollVideo";

const ACCENT = "#8eb8ff";
const GRID_COLOR = "rgba(142, 184, 255, 0.15)";

const VIDEOS = {
    madridCityscape: "/videos/ch2/ch2_1.mp4",
    supermarket: "/videos/ch2/ch2_2_glitch.mp4",
    supermarketBlurred: "/videos/ch2/ch2_3.mp4",
    warehousePhone: "/videos/ch2/ch2_4_desktop.mp4",
    ironGate: "/videos/ch2/ch2_5.mp4",
    phoneInHand: "/videos/ch2/ch2_6_desktop.mp4",
    warehouse: "/videos/ch2/ch2_7.mp4",
    idVerification: "/videos/ch2/ch2_8.mp4",
};

const POSTERS = {
    madridCityscape: "/videos/posters/ch2/ch2_1.jpg",
    supermarket: "/videos/posters/ch2/ch2_2_glitch.jpg",
    supermarketBlurred: "/videos/posters/ch2/ch2_3.jpg",
    warehousePhone: "/videos/posters/ch2/ch2_4_desktop.jpg",
    ironGate: "/videos/posters/ch2/ch2_5.jpg",
    phoneInHand: "/videos/posters/ch2/ch2_6_desktop.jpg",
    warehouse: "/videos/posters/ch2/ch2_7.jpg",
    idVerification: "/videos/posters/ch2/ch2_8.jpg",
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
        font-family: "Space Mono", monospace;
        font-size: 27px;
        line-height: 1.35;
        letter-spacing: -0.54px;
        color: #000;
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

function ScrollSyncHeroVideo({ scrollProgress, src, poster }) {
    const videoRef = useScrollVideo(scrollProgress);
    return (
        <HeroVideo
            ref={videoRef}
            src={src}
            poster={poster}
            muted
            playsInline
            preload="auto"
        />
    );
}

export default function FinanceChapter() {
    return (
        <Chapter>
            {/* F1 — Hero / Chapter Intro */}
            <StickySlide appearInPlace trackHeight="300vh">
                {({ scrollYProgress }) => (
                    <HeroSection>
                        <ScrollSyncHeroVideo
                            scrollProgress={scrollYProgress}
                            src={getAssetPath(VIDEOS.madridCityscape)}
                            poster={getAssetPath(POSTERS.madridCityscape)}
                        />
                        <HeroOverlay />
                        <div style={{ position: "relative", zIndex: 2 }}>
                            <ChapterIntro
                                chapter="CHAPTER_TWO"
                                title="FINANCE"
                                subtitle="How a single email could crash a continent's payment systems"
                            />
                        </div>
                    </HeroSection>
                )}
            </StickySlide>

            {/* F2 — Madrid intro */}
            <StickySlide appearInPlace trackHeight="300vh">
                {({ scrollYProgress }) => (
                    <NarrativeSlide
                        backgroundVideo={VIDEOS.madridCityscape}
                        poster={POSTERS.madridCityscape}
                        scrollProgress={scrollYProgress}
                        heading={
                            <>
                                THURSDAY
                                <br />
                                MADRID, SPAIN
                            </>
                        }
                        textPosition="top"
                        accentColor={ACCENT}
                    >
                        <p>
                            In Madrid, a single phishing email sets off a chain
                            reaction that brings payment systems to a standstill.
                        </p>
                        <br />
                        <br />
                        <p>
                            It begins quietly, with a distracted employee and a
                            convincingly urgent email.
                        </p>
                    </NarrativeSlide>
                )}
            </StickySlide>

            {/* F3 — Supermarket escalation */}
            <StickySlide appearInPlace trackHeight="300vh">
                {({ scrollYProgress }) => (
                    <NarrativeSlide
                        backgroundVideo={VIDEOS.supermarket}
                        poster={POSTERS.supermarket}
                        scrollProgress={scrollYProgress}
                        textPosition="top"
                        highlightText
                        accentColor={ACCENT}
                    >
                        <p>
                            Within hours, an issue at a local supermarket in Madrid
                            escalates into a multi-million-euro crisis, with malware
                            spreading from one store to thousands and damage
                            reaching far beyond one retailer.
                        </p>
                    </NarrativeSlide>
                )}
            </StickySlide>

            {/* F4 — 12:00pm store manager clicks link */}
            <StickySlide appearInPlace trackHeight="300vh">
                {({ scrollYProgress }) => (
                    <NarrativeSlide
                        timestamp="12:00pm"
                        backgroundVideo={VIDEOS.supermarket}
                        poster={POSTERS.supermarket}
                        scrollProgress={scrollYProgress}
                        textPosition="top"
                        highlightText
                        accentColor={ACCENT}
                    >
                        <p>
                            A stressed store manager clicks a link to a lookalike
                            inventory portal in an &ldquo;urgent&rdquo; email from a
                            supposed HQ executive.
                        </p>
                    </NarrativeSlide>
                )}
            </StickySlide>

            {/* F5 — 12:20pm POS malware */}
            <StickySlide appearInPlace trackHeight="300vh">
                {({ scrollYProgress }) => (
                    <NarrativeSlide
                        timestamp="12:20pm"
                        backgroundVideo={VIDEOS.supermarketBlurred}
                        poster={POSTERS.supermarketBlurred}
                        scrollProgress={scrollYProgress}
                        textPosition="top"
                        highlightText
                        accentColor={ACCENT}
                    >
                        <p>
                            Cyber attackers can now traverse the network and deploy
                            malware to the retailer's POS system.
                        </p>
                        <br />
                        <br />
                        <p>
                            Sensitive payment data is sent in batches to an external
                            server.
                        </p>
                    </NarrativeSlide>
                )}
            </StickySlide>

            {/* F6 — 1:05pm contacts IT helpdesk */}
            <StickySlide appearInPlace trackHeight="300vh">
                {({ scrollYProgress }) => (
                    <NarrativeSlide
                        timestamp="1:05pm"
                        backgroundVideo={VIDEOS.warehousePhone}
                        poster={POSTERS.warehousePhone}
                        scrollProgress={scrollYProgress}
                        textPosition="top"
                        highlightText
                        accentColor={ACCENT}
                    >
                        <p>
                            Concerned about the email chain, the store manager
                            contacts the IT help desk.
                        </p>
                    </NarrativeSlide>
                )}
            </StickySlide>

            {/* F7 — 1:35pm payment systems fail */}
            <StickySlide appearInPlace>
                <NarrativeSlide
                    timestamp="1:35pm"
                    backgroundColor="#000"
                    textPosition="top"
                    accentColor={ACCENT}
                >
                    <p>
                        As the malware overloads resources, payment systems
                        across stores fail.
                    </p>
                </NarrativeSlide>
            </StickySlide>

            {/* F8 — 2:00pm helpdesk flooded */}
            <StickySlide appearInPlace>
                <NarrativeSlide
                    timestamp="2:00pm"
                    backgroundColor="#000"
                    textPosition="top"
                    accentColor={ACCENT}
                >
                    <p>
                        The help desk is flooded with reports from stores
                        experiencing outages.
                    </p>
                </NarrativeSlide>
            </StickySlide>

            {/* F9 — Editorial: phishing attacks */}
            <StickySlide appearInPlace>
                <EditorialSlide
                    sectionTitle="WHEN HUMAN BEHAVIOUR BECOMES THE ENTRY POINT"
                    backgroundColor={ACCENT}
                    headingColor={ACCENT}
                >
                    <p>
                        Today’s <strong>phishing attacks</strong> are meticulous
                        &ndash; they mimic corporate tone, structure and
                        urgency. An employee’s decision to trust an email while
                        under pressure provides the attackers with everything
                        they need to prowl the network and access a vulnerable
                        system.
                    </p>
                    <p>
                        Artificial intelligence (AI) enables attackers to craft
                        flawless, personalised phishing emails free of spelling
                        errors or awkward phrasing.
                    </p>
                </EditorialSlide>
            </StickySlide>

            {/* F10 — Editorial: AI + inline Arsenio quote */}
            <StickySlide appearInPlace>
                <EditorialSlide
                    sectionTitle="WHEN HUMAN BEHAVIOUR BECOMES THE ENTRY POINT"
                    backgroundColor={ACCENT}
                    headingColor={ACCENT}
                >
                    <p>
                        AI enables them to use real-time company data and social
                        media to make each message convincingly authentic.
                        “Entire campaigns are being run by machines – targeting
                        the right person, at the right time, with the right
                        message,” says Arsenio Pérez Gavira, Cybersecurity
                        Manager at Sopra Steria Spain.
                    </p>
                </EditorialSlide>
            </StickySlide>

            {/* F11 — Editorial: Arsenio quote */}
            <StickySlide appearInPlace>
                <EditorialSlide
                    sectionTitle="WHEN HUMAN BEHAVIOUR BECOMES THE ENTRY POINT"
                    backgroundColor={ACCENT}
                    headingColor={ACCENT}
                >
                    <SlideQuote
                        quote="Defending against this demands adaptive defences powered by the same intelligence, capable of detecting patterns and responding in real time"
                        name="Arsenio Pérez Gavira"
                        role="Cybersecurity Manager, Sopra Steria Spain"
                    />
                </EditorialSlide>
            </StickySlide>

            {/* F12 — Editorial: 60% + training */}
            <StickySlide appearInPlace>
                <EditorialSlide
                    sectionTitle="WHEN HUMAN BEHAVIOUR BECOMES THE ENTRY POINT"
                    backgroundColor={ACCENT}
                    headingColor={ACCENT}
                >
                    <p>
                        Around <strong>60 per cent</strong> of all cybersecurity
                        incidents{" "}
                        <a href="https://www.soprasteria.com/docs/librariesprovider2/sopra-steria-corporate/publications/en_25.08.20---sopra-steria---%C3%A9tat-de-la-cybers%C3%A9curit%C3%A9-en-2025.pdf?sfvrsn=216234db_6">
                            reported
                        </a>{" "}
                        by customers to Sopra Steria’s clients were
                        phishing-related.
                    </p>
                    <p>
                        To prevent these attacks, organisations must train staff
                        with scenario-based and department-specific simulations
                        to respond to attacks in real time.
                    </p>
                </EditorialSlide>
            </StickySlide>

            {/* F13 — Editorial: 41% data point */}
            <StickySlide appearInPlace>
                <EditorialSlide
                    sectionTitle="WHEN HUMAN BEHAVIOUR BECOMES THE ENTRY POINT"
                    backgroundColor={ACCENT}
                    headingColor={ACCENT}
                >
                    <DataCallout>
                        <p>
                            <strong>41 per cent</strong> is the approximate
                            amount of organisations that suffered a material
                            incident in the past 12 months, and say it was
                            caused by a third party, according to the World
                            Economic Forum’s 2024 Cybersecurity Outlook.
                        </p>
                        {/* <DataAttribution>
                            World Economic Forum&rsquo;s 2024 Cybersecurity
                            Outlook
                        </DataAttribution> */}
                    </DataCallout>
                </EditorialSlide>
            </StickySlide>

            {/* F14 — 3:00pm stores close */}
            <StickySlide appearInPlace trackHeight="300vh">
                {({ scrollYProgress }) => (
                    <NarrativeSlide
                        timestamp="3:00pm"
                        heading="FROM A COMPANY BREACH TO MAJOR DISRUPTION"
                        backgroundVideo={VIDEOS.ironGate}
                        poster={POSTERS.ironGate}
                        scrollProgress={scrollYProgress}
                        textPosition="top"
                        accentColor={ACCENT}
                    >
                        <p>
                            All of the retailer's stores close as payments and
                            inventory systems fail.
                        </p>
                    </NarrativeSlide>
                )}
            </StickySlide>

            {/* F15 — Full bleed phone video */}
            <StickySlide appearInPlace trackHeight="300vh">
                {({ scrollYProgress }) => (
                    <NarrativeSlide
                        timestamp="4:30pm"
                        backgroundVideo={VIDEOS.phoneInHand}
                        poster={POSTERS.phoneInHand}
                        scrollProgress={scrollYProgress}
                        textPosition="top"
                        accentColor={ACCENT}
                    >
                        <p>
                            Internal forensics reveals loyalty card and e-receipt
                            data were compromised.
                        </p>
                    </NarrativeSlide>
                )}
            </StickySlide>

            {/* F16 — 6:30pm media reports */}
            <StickySlide appearInPlace trackHeight="300vh">
                {({ scrollYProgress }) => (
                    <NarrativeSlide
                        timestamp="6:30pm"
                        backgroundVideo={VIDEOS.phoneInHand}
                        poster={POSTERS.phoneInHand}
                        scrollProgress={scrollYProgress}
                        textPosition="top"
                        accentColor={ACCENT}
                    >
                        <p>
                            The first media reports break as customers report
                            phishing attacks.
                        </p>
                    </NarrativeSlide>
                )}
            </StickySlide>

            {/* F17 — Editorial: interconnected systems */}
            <StickySlide appearInPlace>
                <EditorialSlide
                    sectionTitle="WHEN SYSTEMS CONNECT, FAILURE IS EXPONENTIAL"
                    backgroundColor={ACCENT}
                    headingColor={ACCENT}
                >
                    <p>
                        The attack exposes the fragility of interconnected
                        systems. Attackers launch fresh intrusions from the
                        breach, while banks compound the disruption with
                        tightened security that leads consumer spending to grind
                        to a halt.
                    </p>
                    <p>
                        The cost of these attacks is high: both financially and
                        in terms of customer trust.
                    </p>
                </EditorialSlide>
            </StickySlide>

            {/* F18 — Editorial: M&S £300mn */}
            <StickySlide appearInPlace>
                <EditorialSlide
                    sectionTitle="WHEN SYSTEMS CONNECT, FAILURE IS EXPONENTIAL"
                    backgroundColor={ACCENT}
                    headingColor={ACCENT}
                >
                    <p>
                        In 2025, UK retailer Marks & Spencer estimated that
                        there had been a <strong>£300mn</strong> hit to profits
                        following a cyber incident that stole customer data and
                        disrupted operations and product availability.
                    </p>
                </EditorialSlide>
            </StickySlide>

            {/* F19 — Editorial: inline Stefan quote */}
            <StickySlide appearInPlace>
                <EditorialSlide
                    sectionTitle="WHEN SYSTEMS CONNECT, FAILURE IS EXPONENTIAL"
                    backgroundColor={ACCENT}
                    headingColor={ACCENT}
                >
                    <p>
                        “With everything being connected, or wanting to be
                        connected to every other system, firms must examine
                        their architecture and make sure there aren’t any
                        security gaps,” says Stefan Garczynski, Managing
                        Security Architect at Sopra Steria.
                    </p>
                </EditorialSlide>
            </StickySlide>

            {/* F20 — Editorial: Stefan quote */}
            <StickySlide appearInPlace>
                <EditorialSlide
                    sectionTitle="WHEN SYSTEMS CONNECT, FAILURE IS EXPONENTIAL"
                    backgroundColor={ACCENT}
                    headingColor={ACCENT}
                >
                    <SlideQuote
                        quote="A zero-trust architecture eliminates the ability for attackers to traverse the network, by ensuring authentication is always required and nothing is trusted automatically"
                        name="Stefan Garczynski"
                        role="Managing Security Architect, Sopra Steria"
                    />
                </EditorialSlide>
            </StickySlide>

            {/* F21 — 7:00am the next day */}
            <StickySlide appearInPlace trackHeight="300vh">
                {({ scrollYProgress }) => (
                    <NarrativeSlide
                        timestamp="7:00am"
                        heading="THE NEXT DAY"
                        backgroundVideo={VIDEOS.warehouse}
                        poster={POSTERS.warehouse}
                        scrollProgress={scrollYProgress}
                        textPosition="top"
                        accentColor={ACCENT}
                    >
                        <p>It emerges that supplier credentials were exploited.</p>
                    </NarrativeSlide>
                )}
            </StickySlide>

            {/* F22 — 2:00pm banks tighten fraud checks */}
            <StickySlide appearInPlace trackHeight="300vh">
                {({ scrollYProgress }) => (
                    <NarrativeSlide
                        timestamp="2:00pm"
                        backgroundVideo={VIDEOS.idVerification}
                        poster={POSTERS.idVerification}
                        scrollProgress={scrollYProgress}
                        textPosition="top"
                        accentColor={ACCENT}
                    >
                        <p>Banks introduce tighter fraud checks.</p>
                    </NarrativeSlide>
                )}
            </StickySlide>

            {/* F23 — Solutions data grid */}
            <StickySlide appearInPlace>
                <DataGridSlide
                    sectionTitle="THE SOLUTIONS"
                    headingColor={ACCENT}
                    backgroundColor={ACCENT}
                    gridColor={GRID_COLOR}
                >
                    <SolutionBoxes>
                        <SolutionBox>
                            <p>Zero-trust architecture</p>
                        </SolutionBox>
                        <SolutionBox>
                            <p>Network segmentation</p>
                        </SolutionBox>
                        <SolutionBox>
                            <p>Targeted phishing training</p>
                        </SolutionBox>
                        <SolutionBox>
                            <p>Supplier security checks</p>
                        </SolutionBox>
                        <SolutionBox>
                            <p>AI-driven threat monitoring</p>
                        </SolutionBox>
                        <SolutionBox>
                            <p>Cross-sector drills</p>
                        </SolutionBox>
                    </SolutionBoxes>
                </DataGridSlide>
            </StickySlide>
        </Chapter>
    );
}
