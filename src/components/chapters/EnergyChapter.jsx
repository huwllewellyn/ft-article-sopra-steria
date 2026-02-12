import { useRef, useEffect } from "react";
import styled from "styled-components";
import { media } from "../../utils/breakpoints";
import { getAssetPath } from "../../utils/assetPath";
import { ChapterIntro } from "../shared";
import {
    DataCenter,
    DataText,
    DataAttribution,
    SolutionBoxes,
    SolutionBox,
} from "../shared/DataSlideComponents";
import {
    NarrativeSlide,
    EditorialSlide,
    FullBleedImage,
    DataGridSlide,
    StickySlide,
    ContinuousSlide,
} from "../slides";
import { EditorialBody } from "../slides/EditorialSlide";
import SlideQuote from "../slides/SlideQuote";
import useTextScramble from "../../hooks/useTextScramble";
import useScrollVideo from "../../hooks/useScrollVideo";

const VIDEOS = {
    osloCityscape: "/videos/ch1/ch1_1.mp4",
    hackerScene: "/videos/ch1/ch1_2-2.mp4",
    globe: "/videos/ch1/ch1_2_desktop.mp4",
    elevator: "/videos/ch1/ch1_3.mp4",
    signalLost: "/videos/ch1/ch1_4.mp4",
    glitchyCityscape: "/videos/ch1/ch1_5.mp4",
    glitchyCityscape530: "/videos/ch1/ch1_6.mp4",
    womanScreens: "/videos/ch1/ch1_7.mp4",
    escalator: "/videos/ch1/ch1_8.mp4",
    dataPoint: "/videos/ch1/dp1_desktop.mp4",
};

const POSTERS = {
    osloCityscape: "/videos/posters/ch1/ch1_1.jpg",
    hackerScene: "/videos/posters/ch1/ch1_2-2.jpg",
    globe: "/videos/posters/ch1/ch1_2-2.jpg",
    elevator: "/videos/posters/ch1/ch1_3.jpg",
    signalLost: "/videos/posters/ch1/ch1_4.jpg",
    glitchyCityscape: "/videos/posters/ch1/ch1_5.jpg",
    glitchyCityscape530: "/videos/posters/ch1/ch1_6.jpg",
    womanScreens: "/videos/posters/ch1/ch1_7.jpg",
    escalator: "/videos/posters/ch1/ch1_8.jpg",
    dataPoint: "/videos/posters/ch1/dp1_desktop.jpg",
};

function ScrollReveal({ scrollProgress, threshold, children }) {
    const ref = useRef(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        el.style.transition = "opacity 0.4s ease, transform 0.4s ease";
        el.style.opacity = threshold === 0 ? "1" : "0";
        el.style.transform =
            threshold === 0 ? "translateY(0)" : "translateY(30px)";

        const unsubscribe = scrollProgress.on("change", (v) => {
            if (v >= threshold) {
                el.style.opacity = "1";
                el.style.transform = "translateY(0)";
            } else {
                el.style.opacity = "0";
                el.style.transform = "translateY(30px)";
            }
        });

        return unsubscribe;
    }, [scrollProgress, threshold]);

    return <div ref={ref}>{children}</div>;
}

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
    z-index: 1;
    background: linear-gradient(
        180deg,
        rgba(13, 17, 23, 0.4) 0%,
        rgba(13, 17, 23, 0.2) 40%,
        rgba(13, 17, 23, 0.4) 100%
    );
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

export default function EnergyChapter() {
    return (
        <Chapter>
            {/* Hero + S1 — continuous Oslo cityscape video */}
            <ContinuousSlide
                trackHeight="300vh"
                flowHeight="200vh"
                background={({ scrollYProgress }) => (
                    <>
                        <ScrollSyncHeroVideo
                            scrollProgress={scrollYProgress}
                            src={getAssetPath(VIDEOS.osloCityscape)}
                            poster={getAssetPath(POSTERS.osloCityscape)}
                        />
                        <HeroOverlay />
                    </>
                )}
                slides={[
                    () => (
                        <HeroSection>
                            <div style={{ position: "relative", zIndex: 2 }}>
                                <ChapterIntro
                                    chapter="CHAPTER_ONE"
                                    title="ENERGY"
                                    subtitle="When vital infrastructure is held hostage by hacktivists"
                                />
                            </div>
                        </HeroSection>
                    ),
                    () => (
                        <NarrativeSlide
                            backgroundColor="transparent"
                            heading={
                                <>
                                    TUESDAY
                                    <br />
                                    OSLO, NORWAY
                                </>
                            }
                            textPosition="top"
                        >
                            <p>
                                The sun sets early in December, and by
                                mid-afternoon the city is slipping into
                                darkness.
                            </p>
                            <p>
                                As workers wrap up for the day, the grid that
                                keeps Norway – and several neighbouring
                                countries – running begins to falter.
                            </p>
                        </NarrativeSlide>
                    ),
                ]}
            />

            {/* S3 — 5:00pm DDoS attack */}
            <StickySlide appearInPlace trackHeight="300vh">
                {({ scrollYProgress }) => (
                    <NarrativeSlide
                        timestamp="4:45pm"
                        backgroundVideo={VIDEOS.globe}
                        poster={POSTERS.globe}
                        scrollProgress={scrollYProgress}
                        textPosition="top"
                    >
                        <p>
                            A lead engineer at one of Norway's top energy
                            companies logs in for the evening shift and is
                            immediately locked out of the grid's control system.
                        </p>
                        <br />
                        <br />
                        <p>Something is seriously wrong.</p>
                    </NarrativeSlide>
                )}
            </StickySlide>

            {/* S4 — 5:00pm DDoS attack */}
            <StickySlide appearInPlace trackHeight="300vh">
                {({ scrollYProgress }) => (
                    <NarrativeSlide
                        timestamp="5:00pm"
                        backgroundVideo={VIDEOS.hackerScene}
                        poster={POSTERS.hackerScene}
                        scrollProgress={scrollYProgress}
                        textPosition="top"
                    >
                        <p>
                            Remotely, a hacktivist group is in the process of
                            systematically taking out the smart grids of the
                            country's leading energy providers via a{" "}
                            <strong>
                                distributed denial-of-service attack
                            </strong>
                            .
                        </p>
                        <br />
                        <br />
                        <p>
                            By targeting smart meters, they are overwhelming the
                            central servers that power the grids.
                        </p>
                    </NarrativeSlide>
                )}
            </StickySlide>

            {/* S5 — 5:10pm elevator */}
            <StickySlide appearInPlace trackHeight="300vh">
                {({ scrollYProgress }) => (
                    <NarrativeSlide
                        timestamp="5:10pm"
                        backgroundVideo={VIDEOS.elevator}
                        poster={POSTERS.elevator}
                        scrollProgress={scrollYProgress}
                        textPosition="top"
                    >
                        <p>
                            Across town, the CTO of a prominent investment firm
                            is ready to leave for the day.
                        </p>
                        <br />
                        <br />
                        <p>
                            She presses the elevator button on the 14th floor of
                            the company's building, but nothing happens.
                        </p>
                        <br />
                        <br />
                        <p>
                            Moments later, the entire floor is plunged into
                            darkness.
                        </p>
                    </NarrativeSlide>
                )}
            </StickySlide>

            {/* S6 — 5:15pm signal lost */}
            <StickySlide appearInPlace trackHeight="300vh">
                {({ scrollYProgress }) => (
                    <NarrativeSlide
                        timestamp="5:15pm"
                        backgroundVideo={VIDEOS.signalLost}
                        poster={POSTERS.signalLost}
                        scrollProgress={scrollYProgress}
                        textPosition="top"
                    >
                        <p>
                            Outside, the city's skyline no longer shines
                            brightly. Mobile and internet services are down.
                        </p>
                        <br />
                        <br />
                        <p>People across Oslo start to panic.</p>
                    </NarrativeSlide>
                )}
            </StickySlide>

            {/* S7 — Evolving threat intro */}
            <StickySlide>
                <EditorialSlide sectionTitle="AN EVOLVING THREAT LANDSCAPE">
                    <EditorialBody>
                        <p>Energy powers everything.</p>
                        <br />
                        <br />
                        <p>
                            But as energy networks become "smarter", with
                            automated load balancing, remote sensors and
                            increasing reliance on digital infrastructure, cyber
                            criminals can find novel ways of exploiting cracks
                            in the system.
                        </p>
                    </EditorialBody>
                </EditorialSlide>
            </StickySlide>

            {/* S8 — Cyber attacks data grid */}
            <StickySlide appearInPlace flowHeight="200vh" trackHeight="300vh">
                {({ scrollYProgress }) => (
                    <DataGridSlide
                        sectionTitle="AN EVOLVING THREAT LANDSCAPE"
                        headingColor="#f7ff95"
                        backgroundColor="#f7ff95"
                        lottieAnimation={{
                            mobile: "/videos/ch1/SOPRA_DigitalDisruption_DP1_M.json",
                            tablet: "/videos/ch1/SOPRA_DigitalDisruption_DP1_D.json",
                            desktop:
                                "/videos/ch1/SOPRA_DigitalDisruption_DP1_D.json",
                        }}
                        scrollProgress={scrollYProgress}
                    >
                        <ScrollReveal
                            scrollProgress={scrollYProgress}
                            threshold={0}
                        >
                            <DataText>
                                <span>
                                    Cyber attacks <strong>doubled</strong>{" "}
                                    between 2020 and 2022 in{" "}
                                    <strong>Europe's power sector</strong> with
                                </span>
                            </DataText>
                        </ScrollReveal>
                        <ScrollReveal
                            scrollProgress={scrollYProgress}
                            threshold={0.33}
                        >
                            <DataCenter $bg="#fff">
                                48 attacks on Europe's energy infrastructure
                            </DataCenter>
                        </ScrollReveal>
                        <ScrollReveal
                            scrollProgress={scrollYProgress}
                            threshold={0.66}
                        >
                            <DataAttribution>
                                <span>
                                    in 2022, according to Eurelectric, a
                                    federation for the European electricity
                                    industry.
                                </span>
                            </DataAttribution>
                        </ScrollReveal>
                    </DataGridSlide>
                )}
            </StickySlide>

            {/* S9 — Sopra Steria + Robert M Lee quote */}
            <StickySlide appearInPlace>
                <EditorialSlide sectionTitle="AN EVOLVING THREAT LANDSCAPE">
                    <EditorialBody>
                        <p>
                            Sopra Steria, a technology and consulting company
                            that provides cybersecurity services, identified in
                            its State of Cybersecurity 2025 report that Advanced
                            Persistent Threat (APT) groups are increasingly
                            collaborating with cyber criminals, particularly on
                            destructive attacks.
                        </p>
                    </EditorialBody>
                </EditorialSlide>
            </StickySlide>
            <StickySlide appearInPlace>
                <EditorialSlide sectionTitle="AN EVOLVING THREAT LANDSCAPE">
                    <SlideQuote
                        quote="Historically, cyber attacks have been high-consequence and low-frequency. When you get hacktivists and criminals who are able to target operational technology and who understand how to do it, you eventually get high-consequence, high-frequency events"
                        name="Robert M Lee"
                        role="Leading expert in operational technology security, CEO of Dragos"
                    />
                </EditorialSlide>
            </StickySlide>

            {/* S10 — 5:20pm blackouts */}
            <StickySlide appearInPlace>
                <NarrativeSlide
                    timestamp="5:20pm"
                    backgroundVideo={VIDEOS.glitchyCityscape}
                    poster={POSTERS.glitchyCityscape}
                    textPosition="top"
                >
                    <p>
                        As the grid's automated load balancers struggle to cope
                        with the intensity of a sustained attack, safety
                        shutdowns are being triggered across energy grids,
                        causing blackouts.
                    </p>
                </NarrativeSlide>
            </StickySlide>

            {/* S11 — 5:30pm phone torches */}
            <StickySlide appearInPlace>
                <NarrativeSlide
                    timestamp="5:30pm"
                    backgroundVideo={VIDEOS.glitchyCityscape530}
                    poster={POSTERS.glitchyCityscape530}
                    textPosition="top"
                >
                    <p>
                        Workers use phone torches to find their way to the
                        stairwell and towards the lobby. Confusion is
                        widespread; every building is impacted.
                    </p>
                </NarrativeSlide>
            </StickySlide>

            {/* S12 — 7:00pm C-suite */}
            <StickySlide appearInPlace trackHeight="300vh">
                {({ scrollYProgress }) => (
                    <NarrativeSlide
                        timestamp="7:00pm"
                        backgroundVideo={VIDEOS.womanScreens}
                        poster={POSTERS.womanScreens}
                        scrollProgress={scrollYProgress}
                        textPosition="bottom"
                        highlightText
                    >
                        <p>
                            C-suite executives across the various energy firms
                            are struggling to get a sense of the impact as
                            internal systems, including monitoring tools, have
                            been compromised. Engineers no longer have real-time
                            visibility.
                        </p>
                    </NarrativeSlide>
                )}
            </StickySlide>

            {/* S13 — Operating while under attack */}
            <StickySlide appearInPlace>
                <EditorialSlide sectionTitle="OPERATING WHILE UNDER ATTACK">
                    <EditorialBody>
                        <p>
                            Most of the investment in cybersecurity in the
                            energy sector has gone into prevention rather than
                            visibility and monitoring. This presents challenges
                            for root-cause analysis and improving prevention
                            strategies, explains Lee.
                        </p>
                    </EditorialBody>
                </EditorialSlide>
            </StickySlide>
            <StickySlide appearInPlace>
                <EditorialSlide sectionTitle="OPERATING WHILE UNDER ATTACK">
                    <SlideQuote
                        quote="Energy systems being as complex as they are, it is much more difficult to know what actually happened"
                        name="Robert M Lee"
                        role="Leading expert in operational technology security, CEO of Dragos"
                    />
                </EditorialSlide>
            </StickySlide>

            {/* S14 — Policymakers */}
            <StickySlide appearInPlace>
                <EditorialSlide sectionTitle="OPERATING WHILE UNDER ATTACK">
                    <EditorialBody>
                        <p>
                            Europe's policymakers are starting to recognise the
                            risks. In 2025, the European Commission signed a
                            €36mn agreement with the EU's Agency for
                            Cybersecurity (ENISA) to administer a reserve that
                            can be used by critical sectors – including energy –
                            to support the response and recovery from cyber
                            incidents.
                        </p>
                    </EditorialBody>
                </EditorialSlide>
            </StickySlide>
            <StickySlide appearInPlace>
                <EditorialSlide sectionTitle="OPERATING WHILE UNDER ATTACK">
                    <SlideQuote
                        quote="Critical operators are moving toward defensible architectures where there's an assumption that breaches will occur"
                        name="Jørgen Rørvik"
                        role="Director of Cybersecurity and Connectivity, Sopra Steria Nordics"
                    />
                </EditorialSlide>
            </StickySlide>

            {/* S15 — Islands architecture */}
            <StickySlide appearInPlace>
                <EditorialSlide sectionTitle="OPERATING WHILE UNDER ATTACK">
                    <EditorialBody>
                        <p>
                            This can include breaking the grid into "islands",
                            which can distribute power locally, to prevent
                            cascading failures, or building a parallel network
                            for monitoring and management to prevent loss of
                            visibility, Rørvik says.
                        </p>
                    </EditorialBody>
                    <SlideQuote
                        quote="Within this architecture, essential assets can continue functioning, even while under sustained attack"
                        name="Jørgen Rørvik"
                        role="Director of Cybersecurity and Connectivity, Sopra Steria Nordics"
                    />
                </EditorialSlide>
            </StickySlide>

            {/* S16-S18 — 8:00pm / 2:00am / 8:00am (continuous video) */}
            <ContinuousSlide
                trackHeight="400vh"
                flowHeight="300vh"
                appearInPlace
                slides={[
                    ({ scrollYProgress }) => (
                        <NarrativeSlide
                            timestamp="8:00pm"
                            heading="WORK CONTINUES THROUGH THE NIGHT"
                            backgroundVideo={VIDEOS.escalator}
                            poster={POSTERS.escalator}
                            scrollProgress={scrollYProgress}
                            textPosition="top"
                        >
                            <p>
                                Policymakers, emergency services and
                                cybersecurity experts gather to implement
                                emergency procedures.
                            </p>
                        </NarrativeSlide>
                    ),
                    ({ scrollYProgress }) => (
                        <NarrativeSlide
                            timestamp="2:00am"
                            backgroundVideo={VIDEOS.escalator}
                            poster={POSTERS.escalator}
                            scrollProgress={scrollYProgress}
                            textPosition="top"
                        >
                            <p>
                                Cyber experts work with internet service
                                providers to divert malicious traffic and
                                implement recovery protocols.
                            </p>
                        </NarrativeSlide>
                    ),
                    ({ scrollYProgress }) => (
                        <NarrativeSlide
                            timestamp="8:00am"
                            backgroundVideo={VIDEOS.escalator}
                            poster={POSTERS.escalator}
                            scrollProgress={scrollYProgress}
                            textPosition="top"
                        >
                            <p>
                                Power has returned, but public services reel
                                from the human and financial cost of this major
                                incident.
                            </p>
                        </NarrativeSlide>
                    ),
                ]}
            />

            {/* S19 — Solutions data grid */}
            <DataGridSlide
                sectionTitle="THE SOLUTIONS"
                headingColor="#EBEBEB"
                headingBordered
                headingFontFamily="'Space Grotesk', sans-serif"
                headingFontWeight={500}
                backgroundColor="#f7ff95"
                lottieAnimation={{
                    mobile: "/videos/ch1/SOPRA_DigitalDisruption_DP1_M.json",
                    tablet: "/videos/ch1/SOPRA_DigitalDisruption_DP1_D.json",
                    desktop: "/videos/ch1/SOPRA_DigitalDisruption_DP1_D.json",
                }}
            >
                <SolutionBoxes>
                    <SolutionBox>
                        <p>State-led cyber defence policies</p>
                    </SolutionBox>
                    <SolutionBox>
                        <p>
                            Regular penetration testing and threat simulations
                        </p>
                    </SolutionBox>
                    <SolutionBox>
                        <p>
                            24/7 Security Operation Centres with real-time
                            monitoring
                        </p>
                    </SolutionBox>
                    <SolutionBox>
                        <p>
                            Cross-sector coordination across energy, telecoms
                            and media
                        </p>
                    </SolutionBox>
                    <SolutionBox>
                        <p>A threat-driven approach beyond compliance</p>
                    </SolutionBox>
                </SolutionBoxes>
            </DataGridSlide>
        </Chapter>
    );
}
