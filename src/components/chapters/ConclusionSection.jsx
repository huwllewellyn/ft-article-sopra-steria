import { EditorialSlide, SectionHeadingBar, StickySlide } from "../slides";
import { EditorialBody } from "../slides/EditorialSlide";
import SlideQuote from "../slides/SlideQuote";

const ACCENT = "#d96a38";

export default function ConclusionSection() {
    return (
        <div>
            {/* C1 — Opening statement */}
            <StickySlide>
                <EditorialSlide
                    sectionTitle="THE LESSON IS CLEAR"
                    backgroundColor={ACCENT}
                    headingColor={ACCENT}
                >
                    <EditorialBody>
                        <p>
                            Cyber threats do not respect borders – digital or
                            physical.
                        </p>
                    </EditorialBody>
                </EditorialSlide>
            </StickySlide>

            {/* C2 — Hypothetical scenarios */}
            <StickySlide appearInPlace>
                <EditorialSlide
                    sectionTitle="THE LESSON IS CLEAR"
                    backgroundColor={ACCENT}
                    headingColor={ACCENT}
                >
                    <EditorialBody>
                        <p>
                            From corrupted payment infrastructure in Madrid to a
                            disrupted UK or blackouts in Oslo, these
                            hypothetical scenarios show how quickly disruption
                            could ripple across Europe’s daily life – crossing
                            industries and countries in hours, sometimes
                            minutes.
                        </p>
                    </EditorialBody>
                </EditorialSlide>
            </StickySlide>

            {/* C3 — Cross-border response */}
            <StickySlide appearInPlace>
                <EditorialSlide
                    sectionTitle="THE LESSON IS CLEAR"
                    backgroundColor={ACCENT}
                    headingColor={ACCENT}
                >
                    <EditorialBody>
                        <p>
                            The sophistication of these attacks demands an
                            equally sophisticated response, but this cyber
                            resilience cannot be built in silos.
                        </p>
                        <br />
                        <br />
                        <p>
                            These cases highlight why a multifaceted,
                            cross-border and cross-sector approach to
                            cybersecurity is required in today’s hyper-connected
                            society.
                        </p>
                        <br />
                        <br />
                        <p>
                            The future will belong not to the best-defended
                            sector, but to the best-coordinated network.
                        </p>
                    </EditorialBody>
                </EditorialSlide>
            </StickySlide>

            {/* C4 — Closing quote */}
            <StickySlide
                appearInPlace
                trackHeight={"200vh"}
                flowHeight={"200vh"}
            >
                <EditorialSlide backgroundColor={ACCENT}>
                    <SlideQuote
                        quote="It’s no longer a case of if an attack will happen, but when. To stay ahead of threats evolving in both complexity and scale, Europe must act not just with urgency, but also with unity"
                        name="Fabien Lecoq"
                        role="Cybersecurity Director, Sopra Steria"
                    />
                </EditorialSlide>
            </StickySlide>
        </div>
    );
}
