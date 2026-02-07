import {
    EditorialSlide,
} from "../slides";
import SlideQuote from "../slides/SlideQuote";

const BG = "#d96a38";
const HEADING_COLOR = "#dc7941";

export default function ConclusionSection() {
    return (
        <>
            {/* C1 — Opening statement */}
            <EditorialSlide
                sectionTitle="THE LESSON IS CLEAR"
                backgroundColor={BG}
                headingColor={HEADING_COLOR}
            >
                <p>
                    Cyber threats do not respect borders, digital or physical.
                </p>
            </EditorialSlide>

            {/* C2 — Hypothetical scenarios */}
            <EditorialSlide
                sectionTitle="THE LESSON IS CLEAR"
                backgroundColor={BG}
                headingColor={HEADING_COLOR}
            >
                <p>
                    From corrupted payment infrastructure in Madrid to a
                    disrupted transport network throughout the UK and blackouts
                    in Oslo, these hypothetical scenarios show how quickly
                    disruption could ripple across Europe&rsquo;s daily
                    life &ndash; crossing industries and countries in hours,
                    sometimes minutes.
                </p>
            </EditorialSlide>

            {/* C3 — Cross-border response */}
            <EditorialSlide
                sectionTitle="THE LESSON IS CLEAR"
                backgroundColor={BG}
                headingColor={HEADING_COLOR}
            >
                <p>
                    The sophistication of these attacks demands an equally
                    sophisticated response, but this cyber resilience cannot be
                    built in silos.
                </p>
                <p>
                    These cases highlight why a multifaceted, cross-border and
                    cross-sector approach to cybersecurity is required in
                    today&rsquo;s hyper-connected society.
                </p>
                <p>
                    The future will belong not to the best-defended sector, but
                    to the best-coordinated network.
                </p>
            </EditorialSlide>

            {/* C4 — Closing quote */}
            <EditorialSlide
                sectionTitle="THE LESSON IS CLEAR"
                backgroundColor={BG}
                headingColor={HEADING_COLOR}
            >
                <SlideQuote
                    quote="It's no longer a case of if an attack will happen, but when. To stay ahead of threats evolving in both complexity and scale, Europe must act not just with urgency, but with unity"
                    name="Fabien Lecoq"
                    role="Cybersecurity Director, Sopra Steria"
                />
            </EditorialSlide>
        </>
    );
}
