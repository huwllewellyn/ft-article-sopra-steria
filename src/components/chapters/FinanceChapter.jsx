import styled from "styled-components";
import { media } from "../../utils/breakpoints";
import { ChapterIntro } from "../shared";
import {
    NarrativeSlide,
    EditorialSlide,
    FullBleedImage,
    DataGridSlide,
} from "../slides";
import SlideQuote from "../slides/SlideQuote";

const ACCENT = "#8eb8ff";
const GRID_COLOR = "rgba(142, 184, 255, 0.15)";

// Image paths — replace with actual assets
const IMAGES = {
    madridCityscape: "/images/finance/madrid-cityscape.jpg",
    supermarket: "/images/finance/supermarket.jpg",
    supermarketBlurred: "/images/finance/supermarket-blurred.jpg",
    warehousePhone: "/images/finance/warehouse-phone.jpg",
    ironGate: "/images/finance/iron-gate.jpg",
    phoneInHand: "/images/finance/phone-in-hand.jpg",
    warehouse: "/images/finance/warehouse.jpg",
    idVerification: "/images/finance/id-verification.jpg",
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

const HeroBackground = styled.div`
    position: absolute;
    inset: 0;
    background-image: url(${IMAGES.madridCityscape});
    background-size: cover;
    background-position: center;

    &::after {
        content: '';
        position: absolute;
        inset: 0;
        background: linear-gradient(
            180deg,
            rgba(0, 0, 0, 0.5) 0%,
            rgba(0, 0, 0, 0.2) 40%,
            rgba(0, 0, 0, 0.6) 100%
        );
    }
`;

const DataCallout = styled.div`
    text-align: center;
    max-width: 600px;

    p {
        font-family: 'Space Mono', monospace;
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

export default function FinanceChapter() {
    return (
        <Chapter>
            {/* F1 — Hero / Chapter Intro */}
            <HeroSection>
                <HeroBackground />
                <div style={{ position: 'relative', zIndex: 2 }}>
                    <ChapterIntro
                        chapter="CHAPTER_TWO"
                        subtitle="How a single email could crash a continent's payment systems"
                    />
                </div>
            </HeroSection>

            {/* F2 — Madrid intro */}
            <NarrativeSlide
                backgroundImage={IMAGES.madridCityscape}
                heading="THURSDAY / MADRID, SPAIN"
                textPosition="top"
                accentColor={ACCENT}
            >
                <p>
                    In Madrid, a single phishing email sets off a chain reaction
                    that brings payment systems to a standstill.
                </p>
                <p>
                    It begins quietly, with a distracted employee and a
                    convincingly urgent email.
                </p>
            </NarrativeSlide>

            {/* F3 — Supermarket escalation */}
            <NarrativeSlide
                backgroundImage={IMAGES.supermarket}
                textPosition="top"
                highlightText
                accentColor={ACCENT}
            >
                <p>
                    Within hours, an issue at a local supermarket in Madrid
                    escalates into a multi-million-euro crisis, with malware
                    spreading from one store to thousands and damage reaching far
                    beyond one retailer.
                </p>
            </NarrativeSlide>

            {/* F4 — 12:00pm store manager clicks link */}
            <NarrativeSlide
                timestamp="12:00pm"
                backgroundImage={IMAGES.supermarket}
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

            {/* F5 — 12:20pm POS malware */}
            <NarrativeSlide
                timestamp="12:20pm"
                backgroundImage={IMAGES.supermarketBlurred}
                textPosition="top"
                highlightText
                accentColor={ACCENT}
            >
                <p>
                    Cyber attackers can now traverse the network and deploy
                    malware to the retailer&rsquo;s POS system. Sensitive
                    payment data is sent in batches to an external server.
                </p>
            </NarrativeSlide>

            {/* F6 — 1:05pm contacts IT helpdesk */}
            <NarrativeSlide
                timestamp="1:05pm"
                backgroundImage={IMAGES.warehousePhone}
                textPosition="top"
                highlightText
                accentColor={ACCENT}
            >
                <p>
                    Concerned about the email chain, the store manager contacts
                    the IT helpdesk.
                </p>
            </NarrativeSlide>

            {/* F7 — 1:35pm payment systems fail */}
            <NarrativeSlide
                timestamp="1:35pm"
                backgroundColor="#000"
                textPosition="top"
                accentColor={ACCENT}
            >
                <p>
                    As the malware overloads resources, payment systems across
                    stores fail.
                </p>
            </NarrativeSlide>

            {/* F8 — 2:00pm helpdesk flooded */}
            <NarrativeSlide
                timestamp="2:00pm"
                backgroundColor="#000"
                textPosition="top"
                accentColor={ACCENT}
            >
                <p>
                    The helpdesk is flooded with reports from stores experiencing
                    outages.
                </p>
            </NarrativeSlide>

            {/* F9 — Editorial: phishing attacks */}
            <EditorialSlide
                sectionTitle="WHEN HUMAN BEHAVIOUR BECOMES THE ENTRY POINT"
                backgroundColor={ACCENT}
                headingColor={ACCENT}
            >
                <p>
                    Today&rsquo;s <strong>phishing attacks</strong> are
                    meticulous &ndash; they mimic corporate tone, structure and
                    urgency. An employee&rsquo;s decision to trust an email
                    while under pressure provides the attackers with everything
                    they need to prowl the network and access a vulnerable
                    system.
                </p>
                <p>
                    Artificial intelligence (AI) enables attackers to craft
                    flawless, personalised phishing emails free of spelling
                    errors or awkward phrasing.
                </p>
            </EditorialSlide>

            {/* F10 — Editorial: AI + inline Arsenio quote */}
            <EditorialSlide
                sectionTitle="WHEN HUMAN BEHAVIOUR BECOMES THE ENTRY POINT"
                backgroundColor={ACCENT}
                headingColor={ACCENT}
            >
                <p>
                    AI enables them to use real-time company data and social
                    media to make each message convincingly authentic.
                    &ldquo;Entire campaigns are being run by machines &ndash;
                    targeting the right person, at the right time, with the
                    right message,&rdquo; says Arsenio P&eacute;rez Gavira,
                    Cybersecurity Manager at Sopra Steria Spain.
                </p>
            </EditorialSlide>

            {/* F11 — Editorial: Arsenio quote */}
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

            {/* F12 — Editorial: 60% + training */}
            <EditorialSlide
                sectionTitle="WHEN HUMAN BEHAVIOUR BECOMES THE ENTRY POINT"
                backgroundColor={ACCENT}
                headingColor={ACCENT}
            >
                <p>
                    Around <strong>60 per cent</strong> of all cybersecurity
                    incidents reported by customers to Sopra Steria&rsquo;s
                    clients were phishing-related.
                </p>
                <p>
                    To prevent these attacks, organisations must train staff with
                    scenario-based and department-specific simulations to respond
                    to attacks in real time.
                </p>
            </EditorialSlide>

            {/* F13 — Editorial: 41% data point */}
            <EditorialSlide
                sectionTitle="WHEN HUMAN BEHAVIOUR BECOMES THE ENTRY POINT"
                backgroundColor={ACCENT}
                headingColor={ACCENT}
            >
                <DataCallout>
                    <p>
                        <strong>41 per cent</strong> is the approximate amount of
                        organisations that suffered a material incident in the
                        past 12 months, and say it was caused by a third party
                    </p>
                    <DataAttribution>
                        World Economic Forum&rsquo;s 2024 Cybersecurity Outlook
                    </DataAttribution>
                </DataCallout>
            </EditorialSlide>

            {/* F14 — 3:00pm stores close */}
            <NarrativeSlide
                timestamp="3:00pm"
                heading="FROM A COMPANY BREACH TO MAJOR DISRUPTION"
                backgroundImage={IMAGES.ironGate}
                textPosition="top"
                accentColor={ACCENT}
            >
                <p>
                    All of the retailer&rsquo;s stores close as payments and
                    inventory systems fail.
                </p>
            </NarrativeSlide>

            {/* F15 — Full bleed phone image */}
            <FullBleedImage
                src={IMAGES.phoneInHand}
                alt="Person holding a phone"
            />

            {/* F16 — 6:30pm media reports */}
            <NarrativeSlide
                timestamp="6:30pm"
                backgroundImage={IMAGES.phoneInHand}
                textPosition="top"
                accentColor={ACCENT}
            >
                <p>
                    The first media reports break as customers report phishing
                    attacks.
                </p>
            </NarrativeSlide>

            {/* F17 — Editorial: interconnected systems */}
            <EditorialSlide
                sectionTitle="WHEN SYSTEMS CONNECT, FAILURE IS EXPONENTIAL"
                backgroundColor={ACCENT}
                headingColor={ACCENT}
            >
                <p>
                    The attack exposes the fragility of interconnected systems.
                    Attackers launch fresh intrusions from the breach, while
                    banks compound the disruption with tightened security that
                    leads consumer spending to grind to a halt.
                </p>
                <p>
                    The cost of these attacks is high: both financially and in
                    terms of customer trust.
                </p>
            </EditorialSlide>

            {/* F18 — Editorial: M&S £300mn */}
            <EditorialSlide
                sectionTitle="WHEN SYSTEMS CONNECT, FAILURE IS EXPONENTIAL"
                backgroundColor={ACCENT}
                headingColor={ACCENT}
            >
                <p>
                    In 2025, UK retailer Marks &amp; Spencer estimated that
                    there had been a <strong>&pound;300mn hit</strong> to profits
                    following a cyber incident that stole customer data and
                    disrupted operations and product availability.
                </p>
            </EditorialSlide>

            {/* F19 — Editorial: inline Stefan quote */}
            <EditorialSlide
                sectionTitle="WHEN SYSTEMS CONNECT, FAILURE IS EXPONENTIAL"
                backgroundColor={ACCENT}
                headingColor={ACCENT}
            >
                <p>
                    &ldquo;With everything being connected, or wanting to be
                    connected to every other system, firms must examine their
                    architecture and make sure there aren&rsquo;t any security
                    gaps,&rdquo; says Stefan Garczynski, Managing Security
                    Architect at Sopra Steria.
                </p>
            </EditorialSlide>

            {/* F20 — Editorial: Stefan quote */}
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

            {/* F21 — 7:00am the next day */}
            <NarrativeSlide
                timestamp="7:00am"
                heading="THE NEXT DAY"
                backgroundImage={IMAGES.warehouse}
                textPosition="top"
                accentColor={ACCENT}
            >
                <p>
                    It emerges that supplier credentials were exploited. Other
                    European retailers are targeted.
                </p>
            </NarrativeSlide>

            {/* F22 — 2:00pm banks tighten fraud checks */}
            <NarrativeSlide
                timestamp="2:00pm"
                backgroundImage={IMAGES.idVerification}
                textPosition="top"
                accentColor={ACCENT}
            >
                <p>Banks introduce tighter fraud checks.</p>
            </NarrativeSlide>

            {/* F23 — Solutions data grid */}
            <DataGridSlide
                sectionTitle="THE SOLUTIONS"
                headingColor={ACCENT}
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
        </Chapter>
    );
}
