import styled from "styled-components";
import { motion } from "framer-motion";
import { media } from "../utils/breakpoints";

const Container = styled.section`
    width: 100%;
    min-height: calc(100vh - 110px);
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: hidden;
    ${media.tablet(`
        min-height: calc(100vh - 80px);
    `)}
    ${media.mobile(`
        min-height: calc(100vh - 80px);
    `)}
    ${media.wide(`
        min-height: calc(100vh - 190px);
    `)}
`;

const ContentWrapper = styled.div`
    position: relative;
    z-index: 2;
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
    ${media.wide(`
        padding-top: 190px;
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
    width: 630px;

    ${media.tablet(`
        width: 50%;
    `)}

    ${media.mobile(`
        display: contents;
    `)}
`;

const RightColumn = styled.div`
    width: 494px;
    text-align: right;
    margin-left: auto;

    ${media.wide(`
        width: 878px;
    `)}

    ${media.tablet(`
        width: 45%;
    `)}

    ${media.mobile(`
        display: contents;
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

    ${media.wide(`
        font-size: 132px;
    `)}

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

    ${media.wide(`
        font-size: 132px;
    `)}

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

    ${media.wide(`
        font-size: 32px;
        max-width: 731px;
    `)}

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

    ${media.wide(`
        font-family: "Logic Monospace", monospace;
        font-size: 26px;
        letter-spacing: 0.26px;
    `)}
`;

const TitleBlock = styled(motion.div)`
    width: 630px;

    ${media.tablet(`
        width: 50%;
    `)}

    ${media.mobile(`
        order: 1;
        width: 100%;
    `)}
`;

const QuestionBlock = styled(motion.div)`
    ${media.mobile(`
        order: 2;
        width: 100%;
        text-align: left;
    `)}
`;

const StandfirstBlock = styled(motion.div)`
    ${media.mobile(`
        order: 3;
        width: 100%;
    `)}
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
                <TitleBlock
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                >
                    <MainTitle variants={itemVariants}>
                        Digital disruption diaries:
                    </MainTitle>
                </TitleBlock>
                <MainRow>
                    <LeftColumn>
                        <StandfirstBlock
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
                        </StandfirstBlock>
                    </LeftColumn>
                    <RightColumn>
                        <QuestionBlock
                            initial="hidden"
                            animate="visible"
                            variants={containerVariants}
                        >
                            <BigQuestion variants={itemVariants}>
                                what if Europe's networks went dark?
                            </BigQuestion>
                        </QuestionBlock>
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
