import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { media } from "../../utils/breakpoints";
import useIsMobile from "../../hooks/useIsMobile";
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

const F13TextStyled = styled(motion.div)`
    font-family: "logic-monospace", monospace;
    font-size: 21px;
    font-weight: 500;
    color: #000;
    text-align: center;
    line-height: 1.35;
    letter-spacing: -0.84px;
    max-width: 846px;
    width: 100%;
    margin: 0 auto;
    position: absolute;
    bottom: 60px;
    left: 0;
    right: 0;
    padding: 0 80px;
    box-sizing: border-box;
    background: #8eb8ff;
    ${media.tablet(`
        font-size: 21px;
        letter-spacing: -0.84px;
        padding: 0 40px;
    `)} ${media.mobile(`
        font-size: 17px;
        letter-spacing: -0.68px;
        color: #222;
        text-align: left;
        padding: 0 20px;
        position: relative;
        bottom: 100px;
        padding: 0;
    `)} ${media.wide(`
        font-size: 39px;
        letter-spacing: -1.5px;
    `)};
`;

function F13Text({ children }) {
    const ref = useRef(null);
    const isMobile = useIsMobile();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (isMobile) {
            setIsVisible(true);
            return;
        }
        if (isVisible) return;

        let trackEl = null;
        const handleScroll = () => {
            const el = ref.current;
            if (!el || isVisible) return;

            if (!trackEl) {
                let node = el.parentElement;
                while (node && node !== document.body) {
                    if (node.style.opacity !== "") {
                        trackEl = node;
                        break;
                    }
                    node = node.parentElement;
                }
                trackEl = trackEl || el;
            }

            const rect = trackEl.getBoundingClientRect();
            if (rect.top <= 0 && rect.bottom > 0) {
                setIsVisible(true);
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isVisible, isMobile]);

    return (
        <F13TextStyled
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
        >
            {children}
        </F13TextStyled>
    );
}

import SlideQuote from "../slides/SlideQuote";
import useScrollVideo from "../../hooks/useScrollVideo";
import useAutoplayOnView from "../../hooks/useAutoplayOnView";
import AutoplayVideo from "../shared/AutoplayVideo";

const ACCENT = "#8eb8ff";
const GRID_COLOR = "rgba(142, 184, 255, 0.15)";

const VIDEOS = {
    madridCityscape: "/videos/ch2/ch2_1.mp4",
    madridCityscapeMobile: "/videos/ch2/ch2_1_mobile.mp4",
    supermarket: "/videos/ch2/ch2_2_glitch.mp4",
    supermarketBlurred: "/videos/ch2/ch2_3.mp4",
    warehousePhone: "/videos/ch2/ch2_4_desktop.mp4",
    ironGate: "/videos/ch2/ch2_5.mp4",
    phoneInHand: "/videos/ch2/ch2_630.mp4",
    warehouse: "/videos/ch2/ch2_7.mp4",
    idVerification: "/videos/ch2/ch2_8.mp4",
};

const POSTERS = {
    madridCityscape: "/videos/posters/ch2/ch2_1.jpg",
    supermarket: "/videos/posters/ch2/ch2_2_glitch.jpg",
    supermarketBlurred: "/videos/posters/ch2/ch2_3.jpg",
    warehousePhone: "/videos/posters/ch2/ch2_4_desktop.jpg",
    ironGate: "/videos/posters/ch2/ch2_5.jpg",
    phoneInHand: "/videos/posters/ch2/ch2_630.jpg",
    warehouse: "/videos/posters/ch2/ch2_7.jpg",
    idVerification: "/videos/posters/ch2/ch2_8.jpg",
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

export default function FinanceChapter() {
    const isMobile = useIsMobile();
    return (
        <Chapter>
            {/* Hero + F1 — continuous Madrid cityscape video */}
            <ContinuousSlide
                trackHeight="300vh"
                flowHeight="200vh"
                background={({ scrollYProgress }) => (
                    <>
                        <ScrollSyncHeroVideo
                            scrollProgress={scrollYProgress}
                            src={getAssetPath(VIDEOS.madridCityscape)}
                            mobileSrc={getAssetPath(
                                VIDEOS.madridCityscapeMobile,
                            )}
                            poster={getAssetPath(POSTERS.madridCityscape)}
                        />
                        <HeroOverlay />
                    </>
                )}
                slides={[
                    () => (
                        <HeroSection>
                            <div style={{ position: "relative", zIndex: 2 }}>
                                <ChapterIntro
                                    chapter="CHAPTER_TWO"
                                    title="FINANCE"
                                    subtitle="How a single email could crash a continent’s payment systems"
                                />
                            </div>
                        </HeroSection>
                    ),
                    () => (
                        <NarrativeSlide
                            backgroundColor="transparent"
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
                                In Madrid, a single phishing email sets off a
                                chain reaction that brings payment systems to a
                                standstill.
                            </p>
                            <br />
                            <br />
                            <p>
                                An issue at a local supermarket escalates into a
                                multi-million-euro crisis. Malware spreads from
                                one store to thousands with damage reaching far
                                beyond one retailer.
                            </p>
                        </NarrativeSlide>
                    ),
                ]}
            />

            {/* F3-F5 — Supermarket escalation (continuous video) */}
            <ContinuousSlide
                trackHeight="400vh"
                flowHeight="300vh"
                appearInPlace
                background={() => (
                    <AutoplayVideo
                        src={getAssetPath(VIDEOS.supermarket)}
                        poster={getAssetPath(POSTERS.supermarket)}
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
                            timestamp="12:00pm"
                            backgroundColor="transparent"
                            textPosition="top"
                            highlightText
                            lottieOverlay={{
                                mobile: "/videos/ch2/SOPRA_CH2_12pm.json",
                                tablet: "/videos/ch2/SOPRA_CH2_12pm.json",
                                desktop: "/videos/ch2/SOPRA_CH2_12pm.json",
                            }}
                            mobileScale="1.3"
                            accentColor={ACCENT}
                        >
                            <p>
                                A stressed store manager clicks a link to a
                                lookalike inventory portal in an “urgent” email
                                from a supposed HQ executive.
                            </p>
                        </NarrativeSlide>
                    ),
                    () => (
                        <NarrativeSlide
                            timestamp="12:20pm"
                            backgroundColor="transparent"
                            textPosition="top"
                            highlightText
                            accentColor={ACCENT}
                        >
                            <p>
                                Cyber attackers can now traverse the network and
                                deploy malware to the retailer’s POS system.
                            </p>
                            <br />
                            <br />
                            <p>
                                Sensitive payment data is sent in batches to an
                                external server.
                            </p>
                        </NarrativeSlide>
                    ),
                ]}
            />

            {/* F6 — 1:05pm contacts IT helpdesk */}
            <StickySlide
                appearInPlace
                trackHeight="300vh"
                mobileSimplify={!isMobile}
            >
                <NarrativeSlide
                    timestamp="1:05pm"
                    backgroundVideo={VIDEOS.supermarketBlurred}
                    poster={POSTERS.supermarketBlurred}
                    textPosition="top"
                    highlightText
                    accentColor={ACCENT}
                >
                    <p>
                        Concerned about the email chain, the store manager
                        contacts the IT help desk.
                    </p>
                </NarrativeSlide>
            </StickySlide>

            {/* F7-F8 — Payment systems fail / helpdesk flooded (continuous video) */}
            <ContinuousSlide
                trackHeight="200vh"
                flowHeight="200vh"
                appearInPlace
                background={() => (
                    <AutoplayVideo
                        src={getAssetPath(VIDEOS.warehousePhone)}
                        poster={getAssetPath(POSTERS.warehousePhone)}
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
                            timestamp="1:35pm"
                            backgroundColor="transparent"
                            textPosition="top"
                            accentColor={ACCENT}
                        >
                            <p>
                                As the malware overloads resources, payment
                                systems across stores fail. The help desk is
                                flooded with reports from stores experiencing
                                outages.
                            </p>
                        </NarrativeSlide>
                    ),
                ]}
            />

            {/* F9 — Editorial: phishing attacks */}
            <StickySlide>
                <EditorialSlide
                    sectionTitle="WHEN HUMAN BEHAVIOUR IS THE ENTRY POINT"
                    backgroundColor={ACCENT}
                    headingColor={ACCENT}
                >
                    <EditorialBody>
                        <p>
                            Today’s <strong>phishing attacks</strong> are
                            meticulous mimicking corporate tone, structure and
                            urgency. An employee’s decision to trust an email
                            while under pressure provides the attackers with
                            everything they need to prowl the network and access
                            a vulnerable system.
                        </p>
                        <p>
                            Artificial intelligence (AI) enables attackers to
                            craft flawless, personalised phishing emails free of
                            spelling errors or awkward phrasing.
                        </p>
                    </EditorialBody>
                </EditorialSlide>
            </StickySlide>

            {/* F10 — Editorial: AI + inline Arsenio quote */}
            <StickySlide appearInPlace>
                <EditorialSlide
                    sectionTitle="WHEN HUMAN BEHAVIOUR IS THE ENTRY POINT"
                    hideSectionTitle={isMobile}
                    backgroundColor={ACCENT}
                    headingColor={ACCENT}
                >
                    <SlideQuote
                        quote={
                            <>
                                <p>
                                    Entire campaigns are being run by machines –
                                    targeting the right person, at the right
                                    time, with the right message.
                                </p>
                                <p>
                                    Defending against this demands adaptive
                                    defences powered by the same kind of
                                    intelligence, capable of detecting patterns
                                    and responding in real time
                                </p>
                            </>
                        }
                        name="Arsenio Pérez Gavira"
                        role="Cybersecurity Manager, Sopra Steria Spain"
                    />
                </EditorialSlide>
            </StickySlide>

            {/* F12 — Editorial: 60% + training */}
            <StickySlide appearInPlace>
                <EditorialSlide
                    sectionTitle="WHEN HUMAN BEHAVIOUR IS THE ENTRY POINT"
                    hideSectionTitle={isMobile}
                    backgroundColor={ACCENT}
                    headingColor={ACCENT}
                >
                    <EditorialBody>
                        <p>
                            Around <strong>60 per cent</strong> of all
                            cybersecurity incidents{" "}
                            <a href="https://www.soprasteria.com/docs/librariesprovider2/sopra-steria-corporate/publications/en_25.08.20---sopra-steria---%C3%A9tat-de-la-cybers%C3%A9curit%C3%A9-en-2025.pdf?sfvrsn=216234db_6">
                                reported
                            </a>{" "}
                            by customers to Sopra Steria’s clients were
                            phishing-related.
                        </p>
                        <p>
                            To prevent these attacks, organisations must train
                            staff with scenario-based and department-specific
                            simulations to respond to attacks in real time.
                        </p>
                    </EditorialBody>
                </EditorialSlide>
            </StickySlide>

            {/* F13 — 41% data point (lottie) */}
            <StickySlide appearInPlace flowHeight="200vh" trackHeight="200vh">
                {({ scrollYProgress }) => (
                    <DataGridSlide
                        sectionTitle="WHEN HUMAN BEHAVIOUR IS THE ENTRY POINT"
                        hideSectionTitle={isMobile}
                        headingColor={ACCENT}
                        backgroundColor={ACCENT}
                        mobileScale={isMobile ? "1.4" : "0.7"}
                        lottieAnimation={{
                            mobile: "/videos/ch2/SOPRA_DigitalDisruption_DP2_D_AD.json",
                            tablet: "/videos/ch2/SOPRA_DigitalDisruption_DP2_D_AD.json",
                            desktop:
                                "/videos/ch2/SOPRA_DigitalDisruption_DP2_D_AD.json",
                        }}
                        scrollProgress={scrollYProgress}
                        maxWidth="90vw"
                        lottieHeight={isMobile ? "50vh" : "50vh"}
                        lottieTop={isMobile ? "10vh" : "20vh"}
                        lottieLoop={false}
                    >
                        {isMobile && <div style={{ minHeight: "50vh" }} />}
                        <F13Text>
                            is the approximate share of organisations that
                            recorded a material incident during the past 12
                            months and say it was caused by a third party,
                            according to the World Economic Forum&rsquo;s 2024
                            Cybersecurity Outlook.
                        </F13Text>
                    </DataGridSlide>
                )}
            </StickySlide>

            {/* F14-F15 — Stores close / forensics (continuous video) */}
            <StickySlide mobileSimplify={!isMobile}>
                <NarrativeSlide
                    timestamp="3:00pm"
                    heading="FROM COMPANY BREACH TO MAJOR DISRUPTION"
                    backgroundColor="transparent"
                    textPosition="top"
                    accentColor={ACCENT}
                    backgroundVideo={getAssetPath(VIDEOS.ironGate)}
                    poster={getAssetPath(POSTERS.ironGate)}
                >
                    <p>
                        All of the retailer’s stores close as payments and
                        inventory systems fail. Loyalty card and e-receipt data
                        are compromised.
                    </p>
                </NarrativeSlide>
            </StickySlide>

            {/* F16 — 6:30pm media reports */}
            <StickySlide
                appearInPlace
                trackHeight="300vh"
                flowHeight="200vh"
                mobileSimplify={!isMobile}
            >
                <NarrativeSlide
                    timestamp="6:30pm"
                    backgroundVideo={VIDEOS.phoneInHand}
                    poster={POSTERS.phoneInHand}
                    lottieOverlay={{
                        mobile: "/videos/ch2/SOPRA_CH2_430pm_MOBILE.json",
                        tablet: "/videos/ch2/SOPRA_CH2_430pm_MOBILE.json",
                        desktop: "/videos/ch2/SOPRA_CH2_430pm_MOBILE.json",
                    }}
                    mobileScale={0.95}
                    textPosition="top"
                    accentColor={ACCENT}
                >
                    <p>
                        The first media stories break as customers report
                        phishing attacks.
                    </p>
                </NarrativeSlide>
            </StickySlide>

            {/* F17 — Editorial: interconnected systems */}
            <StickySlide>
                <EditorialSlide
                    sectionTitle="WHEN SYSTEMS CONNECT, FAILURE IS EXPONENTIAL"
                    backgroundColor={ACCENT}
                    headingColor={ACCENT}
                >
                    <EditorialBody>
                        <p>
                            The attack exposes the fragility of interconnected
                            systems. Attackers launch fresh intrusions from the
                            breach, while banks compound the disruption with
                            tightened security that leads consumer spending to
                            grind to a halt.
                        </p>
                        <p>
                            The cost of these attacks is high, both financially
                            and in terms of customer trust.
                        </p>
                    </EditorialBody>
                </EditorialSlide>
            </StickySlide>

            {/* F18 — Editorial: M&S £300mn */}
            <StickySlide appearInPlace>
                <EditorialSlide
                    sectionTitle="WHEN SYSTEMS CONNECT, FAILURE IS EXPONENTIAL"
                    hideSectionTitle={isMobile}
                    backgroundColor={ACCENT}
                    headingColor={ACCENT}
                >
                    <EditorialBody>
                        <p>
                            In 2025, UK retailer Marks & Spencer estimated a{" "}
                            <strong>£300mn</strong> hit to profits following a
                            cyber incident during which customer data was
                            stolen, and operations and product availability
                            disrupted.
                        </p>
                    </EditorialBody>
                </EditorialSlide>
            </StickySlide>

            {/* F19 — Editorial: inline Stefan quote */}
            <StickySlide appearInPlace>
                <EditorialSlide
                    sectionTitle="WHEN SYSTEMS CONNECT, FAILURE IS EXPONENTIAL"
                    hideSectionTitle={isMobile}
                    backgroundColor={ACCENT}
                    headingColor={ACCENT}
                >
                    <SlideQuote
                        quote="With everything connected or wanting to be connected to every other system, firms must examine their architecture and make sure there aren’t any security gaps"
                        name="Stefan Garczynski"
                        role="Managing Security Architect, Sopra Steria"
                    />
                </EditorialSlide>
            </StickySlide>

            {/* F20 — Editorial: Stefan quote */}
            <StickySlide appearInPlace>
                <EditorialSlide
                    sectionTitle="WHEN SYSTEMS CONNECT, FAILURE IS EXPONENTIAL"
                    hideSectionTitle={isMobile}
                    backgroundColor={ACCENT}
                    headingColor={ACCENT}
                >
                    <SlideQuote
                        quote="A zero-trust architecture eliminates the ability of attackers to traverse the network, by ensuring authentication is always required and nothing is trusted automatically"
                        name="Stefan Garczynski"
                        role="Managing Security Architect, Sopra Steria"
                    />
                </EditorialSlide>
            </StickySlide>

            {/* F21 — 7:00am the next day */}
            <StickySlide
                appearInPlace
                trackHeight="300vh"
                mobileSimplify={!isMobile}
            >
                <NarrativeSlide
                    timestamp="7:00am"
                    heading="THE NEXT DAY"
                    backgroundVideo={VIDEOS.warehouse}
                    poster={POSTERS.warehouse}
                    textPosition="top"
                    accentColor={ACCENT}
                >
                    <p>It emerges that supplier credentials were exploited.</p>
                    <br />
                    <br />
                    <p>Other European retailers are targeted.</p>
                </NarrativeSlide>
            </StickySlide>

            {/* F22 — 2:00pm banks tighten fraud checks */}
            <StickySlide
                appearInPlace
                trackHeight="300vh"
                mobileSimplify={!isMobile}
            >
                <NarrativeSlide
                    timestamp="2:00pm"
                    backgroundVideo={VIDEOS.idVerification}
                    poster={POSTERS.idVerification}
                    textPosition="top"
                    accentColor={ACCENT}
                >
                    <p>Banks introduce tighter fraud checks.</p>
                </NarrativeSlide>
            </StickySlide>

            {/* F23 — Solutions data grid */}
            <DataGridSlide
                sectionTitle="THE SOLUTIONS"
                headingColor="#EBEBEB"
                headingBordered
                headingFontFamily="'Space Grotesk', sans-serif"
                headingFontWeight={500}
                backgroundColor="#000"
                lottieAnimation={{
                    mobile: "/videos/ch2/SOLUTIONS_2.json",
                    tablet: "/videos/ch2/SOLUTIONS_2.json",
                    desktop: "/videos/ch2/SOLUTIONS_2.json",
                }}
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
