import styled from "styled-components";
import { motion } from "framer-motion";
import { media } from "../utils/breakpoints";

const Container = styled.section`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: hidden;
`;


const ContentWrapper = styled.div`
    position: relative;
    z-index: 2;
    max-width: 1280px;
    width: 100%;
    margin: 0 auto;
    padding: 110px 80px 40px;
    display: flex;
    flex-direction: column;
    gap: 47px;
    flex: 1;
    text-transform: uppercase;
    font-family: "Space Grotesk", sans-serif;
    font-weight: 500;

    ${media.tablet(`
        padding: 80px 40px 30px;
        gap: 30px;
    `)}

    ${media.mobile(`
        padding: 80px 20px 30px;
        gap: 30px;
    `)}
`;

const MainRow = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    flex: 1;

    ${media.mobile(`
        flex-direction: column;
        align-items: flex-start;
        gap: 60px;
    `)}
`;

const LeftColumn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 630px;
    min-height: 580px;

    ${media.tablet(`
        width: 50%;
        min-height: 450px;
    `)}

    ${media.mobile(`
        width: 100%;
        min-height: auto;
        gap: 40px;
    `)}
`;

const RightColumn = styled.div`
    width: 494px;
    text-align: right;

    ${media.tablet(`
        width: 45%;
    `)}

    ${media.mobile(`
        width: 100%;
        text-align: left;
    `)}
`;

const MainTitle = styled(motion.h1)`
    font-family: "Space Grotesk", sans-serif;
    font-size: 74px;
    font-weight: 500;
    color: #f7ff95;
    line-height: 0.85;
    letter-spacing: 0;
    margin: 0;
    text-transform: uppercase;

    ${media.tablet(`
        font-size: 56px;
    `)}

    ${media.mobile(`
        font-size: 40px;
    `)}
`;

const BigQuestion = styled(motion.h2)`
    font-family: "Space Grotesk", sans-serif;
    font-size: 74px;
    font-weight: 500;
    color: #f7ff95;
    line-height: 0.85;
    margin: 0;
    text-transform: uppercase;

    ${media.tablet(`
        font-size: 56px;
    `)}

    ${media.mobile(`
        font-size: 36px;
        line-height: 0.9;
    `)}
`;

const Standfirst = styled(motion.p)`
    font-family: "Space Grotesk", sans-serif;
    font-size: 17px;
    font-weight: 500;
    color: #ffffff;
    line-height: 1.3;
    max-width: 411px;
    margin: 0;
    text-transform: uppercase;

    ${media.mobile(`
        font-size: 15px;
        max-width: 100%;
    `)}
`;

const ScrollIndicator = styled(motion.p)`
    font-family: "Space Mono", monospace;
    font-size: 14px;
    font-weight: 500;
    color: #fbfbfb;
    letter-spacing: 0.14px;
    line-height: 1.35;
    margin: 0;
    text-transform: uppercase;
`;

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" },
    },
};

export default function IntroSection() {
    return (
        <Container>
            <ContentWrapper>
                <MainRow>
                    <LeftColumn>
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={containerVariants}
                        >
                            <MainTitle variants={itemVariants}>
                                Digital disruption diaries:
                            </MainTitle>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={containerVariants}
                        >
                            <Standfirst variants={itemVariants}>
                                Three hypothetical stories expose how cyber
                                attacks could swiftly disrupt and destabilise
                                daily life – and explore the solutions and
                                measures required to protect our most critical
                                systems
                            </Standfirst>
                        </motion.div>
                    </LeftColumn>
                    <RightColumn>
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={containerVariants}
                        >
                            <BigQuestion variants={itemVariants}>
                                what if Europe's networks went dark?
                            </BigQuestion>
                        </motion.div>
                    </RightColumn>
                </MainRow>
                <ScrollIndicator
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 0.5 }}
                >
                    SCROLL TO EXPLORE
                </ScrollIndicator>
            </ContentWrapper>
        </Container>
    );
}
