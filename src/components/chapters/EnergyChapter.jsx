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

// Image paths — replace with actual assets
const IMAGES = {
    osloCityscape: "/images/energy/oslo-cityscape.jpg",
    hackerScene: "/images/energy/hacker-scene.jpg",
    globe: "/images/energy/globe-ascii.jpg",
    elevator: "/images/energy/elevator-buttons.jpg",
    signalLost: "/images/energy/signal-lost.jpg",
    glitchyCityscape: "/images/energy/glitchy-cityscape.jpg",
    womanScreens: "/images/energy/woman-screens.jpg",
    escalator: "/images/energy/escalator-crowd.jpg",
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
    background: linear-gradient(
        180deg,
        rgba(13, 17, 23, 0.4) 0%,
        rgba(13, 17, 23, 0.2) 40%,
        rgba(13, 17, 23, 0.4) 100%
    );
    z-index: 1;
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
    border: 1px solid #f7ff95;
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

export default function EnergyChapter() {
    return (
        <Chapter>
            {/* Hero / Chapter Intro */}
            <HeroSection>
                <HeroBackground />
                <div style={{ position: 'relative', zIndex: 2 }}>
                    <ChapterIntro
                        chapter="CHAPTER_ONE"
                        subtitle="When vital infrastructure is held hostage by hacktivists"
                    />
                </div>
            </HeroSection>

            {/* S1 — Oslo intro */}
            <NarrativeSlide
                backgroundImage={IMAGES.osloCityscape}
                heading="TUESDAY / OSLO, NORWAY"
                textPosition="top"
            >
                <p>
                    The sun sets early in December, and by mid-afternoon the city
                    is slipping into darkness. As workers wrap up for the day, the
                    grid that keeps Norway – and several neighbouring countries –
                    running begins to falter.
                </p>
                <p>
                    A lead engineer at one of Norway's top energy companies logs
                    in for the evening shift and is immediately locked out of the
                    grid's control system. Something is seriously wrong.
                </p>
            </NarrativeSlide>

            {/* S3 — Full bleed hacker scene */}
            <FullBleedImage
                src={IMAGES.hackerScene}
                alt="Person silhouetted at multiple computer screens"
            />

            {/* S4 — 5:00pm DDoS attack */}
            <NarrativeSlide
                timestamp="5:00pm"
                backgroundImage={IMAGES.globe}
                textPosition="top"
            >
                <p>
                    Remotely, a hacktivist group is in the process of
                    systematically taking out the smart grids of the country's
                    leading energy providers via a{" "}
                    <strong>distributed denial-of-service attack</strong>. By
                    targeting smart meters, they are overwhelming the central
                    servers that power the grids.
                </p>
            </NarrativeSlide>

            {/* S5 — 5:10pm elevator */}
            <NarrativeSlide
                timestamp="5:10pm"
                backgroundImage={IMAGES.elevator}
                textPosition="top"
            >
                <p>
                    Across town, the CTO of a prominent investment firm is ready
                    to leave for the day. She presses the elevator button on the
                    14th floor of the company's building, but nothing happens.
                </p>
                <p>
                    Moments later, the entire floor is plunged into darkness.
                </p>
                <p>
                    Employees try their laptops, which are still running on
                    battery. But the WiFi and internal servers are down. The
                    trading floor, normally alive with data, is blank.
                </p>
            </NarrativeSlide>

            {/* S6 — 5:15pm signal lost */}
            <NarrativeSlide
                timestamp="5:15pm"
                backgroundImage={IMAGES.signalLost}
                textPosition="top"
            >
                <p>
                    Outside, the city's skyline no longer shines brightly. Mobile
                    and internet services are down. People across Oslo start to
                    panic.
                </p>
            </NarrativeSlide>

            {/* S7 — Evolving threat intro */}
            <EditorialSlide sectionTitle="AN EVOLVING THREAT LANDSCAPE">
                <p>
                    Energy powers everything. But as energy networks become
                    "smarter", with automated load balancing, remote sensors and
                    increasing reliance on digital infrastructure, cyber criminals
                    can find novel ways of exploiting cracks in the system.
                </p>
                <p>
                    A growing number of sophisticated attackers are targeting
                    operational technology that controls physical infrastructure
                    directly — not just IT systems.
                </p>
            </EditorialSlide>

            {/* S8 — Cyber attacks data grid */}
            <DataGridSlide sectionTitle="AN EVOLVING THREAT LANDSCAPE">
                <DataCallout>
                    <p>
                        Cyber attacks <strong>doubled</strong> between 2020 and
                        2022 in <strong>Europe's power sector</strong>
                    </p>
                    <DataAttribution>
                        Eurelectric, a federation for the European electricity
                        industry
                    </DataAttribution>
                </DataCallout>
            </DataGridSlide>

            {/* S9 — Sopra Steria + Robert M Lee quote */}
            <EditorialSlide sectionTitle="AN EVOLVING THREAT LANDSCAPE">
                <p>
                    Sopra Steria, a technology and consulting company that
                    provides cybersecurity services, identified in its State of
                    Cybersecurity 2025 report that Advanced Persistent Threat
                    (APT) groups are increasingly collaborating with cyber
                    criminals, particularly on destructive attacks.
                </p>
                <SlideQuote
                    quote="Historically, cyber attacks have been high-consequence and low-frequency. When you get hacktivists and criminals who are able to target operational technology and who understand how to do it, you eventually get high-consequence, high-frequency events"
                    name="Robert M Lee"
                    role="Leading expert in operational technology security, CEO of Dragos"
                />
            </EditorialSlide>

            {/* S10 — 5:20pm blackouts */}
            <NarrativeSlide
                timestamp="5:20pm"
                backgroundImage={IMAGES.glitchyCityscape}
                textPosition="bottom"
            >
                <p>
                    As the grid's automated load balancers struggle to cope with
                    the intensity of a sustained attack, safety shutdowns are
                    being triggered across energy grids, causing blackouts.
                </p>
            </NarrativeSlide>

            {/* S11 — 5:30pm phone torches */}
            <NarrativeSlide
                timestamp="5:30pm"
                textPosition="bottom"
                backgroundColor="#000"
            >
                <p>
                    Workers use phone torches to find their way to the stairwell
                    and towards the lobby. Confusion is widespread; every building
                    is impacted.
                </p>
            </NarrativeSlide>

            {/* S12 — 7:00pm C-suite */}
            <NarrativeSlide
                timestamp="7:00pm"
                backgroundImage={IMAGES.womanScreens}
                textPosition="bottom"
                highlightText
            >
                <p>
                    C-suite executives across the various energy firms are
                    struggling to get a sense of the impact as internal systems,
                    including monitoring tools, have been compromised. Engineers
                    no longer have real-time visibility.
                </p>
            </NarrativeSlide>

            {/* S13 — Operating while under attack */}
            <EditorialSlide sectionTitle="OPERATING WHILE UNDER ATTACK">
                <p>
                    Most of the investment in cybersecurity in the energy sector
                    has gone into prevention rather than visibility and
                    monitoring. This presents challenges for root-cause analysis
                    and improving prevention strategies, explains Lee.
                </p>
                <SlideQuote
                    quote="Energy systems being as complex as they are, it is much more difficult to know what actually happened"
                    name="Robert M Lee"
                    role="Leading expert in operational technology security, CEO of Dragos"
                />
            </EditorialSlide>

            {/* S14 — Policymakers */}
            <EditorialSlide sectionTitle="OPERATING WHILE UNDER ATTACK">
                <p>
                    Europe's policymakers are starting to recognise the risks. In
                    2025, the European Commission signed a €36mn agreement with
                    the EU's Agency for Cybersecurity (ENISA) to administer a
                    reserve that can be used by critical sectors – including
                    energy – to support the response and recovery from cyber
                    incidents.
                </p>
                <SlideQuote
                    quote="Critical operators are moving toward defensible architectures where there's an assumption that breaches will occur"
                    name="Jørgen Rørvik"
                    role="Director of Cybersecurity and Connectivity, Sopra Steria Nordics"
                />
            </EditorialSlide>

            {/* S15 — Islands architecture */}
            <EditorialSlide sectionTitle="OPERATING WHILE UNDER ATTACK">
                <p>
                    This can include breaking the grid into "islands", which can
                    distribute power locally, to prevent cascading failures, or
                    building a parallel network for monitoring and management to
                    prevent loss of visibility, Rørvik says.
                </p>
                <SlideQuote
                    quote="Within this architecture, essential assets can continue functioning, even while under sustained attack"
                    name="Jørgen Rørvik"
                    role="Director of Cybersecurity and Connectivity, Sopra Steria Nordics"
                />
            </EditorialSlide>

            {/* S16 — 8:00pm work through the night */}
            <NarrativeSlide
                timestamp="8:00pm"
                heading="WORK CONTINUES THROUGH THE NIGHT"
                backgroundImage={IMAGES.escalator}
                textPosition="top"
            >
                <p>
                    Policymakers, emergency services and cybersecurity experts
                    gather to implement emergency procedures.
                </p>
            </NarrativeSlide>

            {/* S17 — 2:00am */}
            <NarrativeSlide
                timestamp="2:00am"
                backgroundImage={IMAGES.escalator}
                textPosition="top"
            >
                <p>
                    Cyber experts work with internet service providers to divert
                    malicious traffic and implement recovery protocols.
                </p>
            </NarrativeSlide>

            {/* S18 — 8:00am */}
            <NarrativeSlide
                timestamp="8:00am"
                backgroundImage={IMAGES.escalator}
                textPosition="top"
            >
                <p>
                    Power has returned, but public services reel from the human
                    and financial cost of this major incident.
                </p>
            </NarrativeSlide>

            {/* S19 — Solutions data grid */}
            <DataGridSlide
                sectionTitle="THE SOLUTIONS"
                headingColor="#fff"
            >
                <SolutionBoxes>
                    <SolutionBox>
                        <p>State-led cyber defence policies</p>
                    </SolutionBox>
                    <SolutionBox>
                        <p>Regular penetration testing and threat simulations</p>
                    </SolutionBox>
                    <SolutionBox>
                        <p>24/7 Security Operation Centres with real-time monitoring</p>
                    </SolutionBox>
                    <SolutionBox>
                        <p>Cross-sector coordination across energy, telecoms and media</p>
                    </SolutionBox>
                    <SolutionBox>
                        <p>A threat-driven approach beyond compliance</p>
                    </SolutionBox>
                </SolutionBoxes>
            </DataGridSlide>
        </Chapter>
    );
}
