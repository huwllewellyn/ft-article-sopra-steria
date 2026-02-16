import styled from "styled-components";
import { EditorialSlide, SectionHeadingBar } from "../slides";
import { EditorialBody } from "../slides/EditorialSlide";
import SlideQuote from "../slides/SlideQuote";

const BG = "#d96a38";
const HEADING_COLOR = "#dc7941";

const BannerScope = styled.div`
    position: relative;
`;

const StickyBanner = styled.div`
    position: sticky;
    top: 0;
    z-index: 9;
`;

export default function ConclusionSection() {
    return (
        <div>
            <BannerScope>
                <StickyBanner>
                    <SectionHeadingBar color={HEADING_COLOR}>
                        THE LESSON IS CLEAR
                    </SectionHeadingBar>
                </StickyBanner>

                {/* C1 — Opening statement */}
                <EditorialSlide backgroundColor={BG}>
                    <EditorialBody>
                        <p>
                            Cyber threats do not respect borders, digital or
                            physical.
                        </p>
                    </EditorialBody>
                </EditorialSlide>

                {/* C2 — Hypothetical scenarios */}
                <EditorialSlide backgroundColor={BG}>
                    <EditorialBody>
                        <p>
                            From corrupted payment infrastructure in Madrid to a
                            disrupted transport network throughout the UK and
                            blackouts in Oslo, these hypothetical scenarios show
                            how quickly disruption could ripple across Europe's
                            daily life – crossing industries and countries in
                            hours, sometimes minutes.
                        </p>
                    </EditorialBody>
                </EditorialSlide>
            </BannerScope>

            {/* C3 — Cross-border response */}
            <EditorialSlide backgroundColor={BG}>
                <EditorialBody>
                    <p>
                        The sophistication of these attacks demands an equally
                        sophisticated response, but this cyber resilience cannot
                        be built in silos.
                    </p>
                    <br />
                    <br />
                    <p>
                        These cases highlight why a multifaceted, cross-border
                        and cross-sector approach to cyber security is required
                        in today's hyper-connected society.
                    </p>
                    <br />
                    <br />
                    <p>
                        The future will belong not to the best-defended sector,
                        but to the best-coordinated network.
                    </p>
                </EditorialBody>
            </EditorialSlide>

            {/* C4 — Closing quote */}
            <EditorialSlide backgroundColor={BG}>
                <SlideQuote
                    quote="It’s no longer a case of if an attack will happen, but when. To stay ahead of threats evolving in both complexity and scale, Europe must act not just with urgency, but with unity."
                    name="Fabien Lecoq"
                    role="Cybersecurity Director, Sopra Steria"
                />
            </EditorialSlide>
        </div>
    );
}
