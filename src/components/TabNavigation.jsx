import styled from "styled-components";
import { media } from "../utils/breakpoints";

const NavContainer = styled.nav`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    background: rgba(19, 19, 19, 0.5);
    backdrop-filter: blur(4px);
    padding: 8px 240px 12px;
    transform: translateY(${({ $visible }) => $visible ? '0' : '100%'});
    transition: transform 0.4s ease;

    ${media.tablet(`
        padding: 8px 80px 12px;
    `)}

    ${media.mobile(`
        padding: 8px 20px 12px;
    `)}
`;

const TabList = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 167px;

    ${media.tablet(`
        gap: 80px;
    `)}

    ${media.mobile(`
        gap: 40px;
    `)}
`;

const TabButton = styled.button`
    background: transparent;
    color: ${props => props.$active ? '#ffffff' : 'rgba(255, 255, 255, 0.5)'};
    border: none;
    cursor: pointer;
    font-family: 'Space Grotesk', sans-serif;
    font-size: 19px;
    font-weight: 400;
    text-transform: uppercase;
    text-align: center;
    line-height: 1.3;
    padding: 0;
    width: 90px;
    transition: color 0.3s ease;

    &:hover {
        color: #ffffff;
    }

    ${media.mobile(`
        font-size: 15px;
        width: auto;
    `)}
`;

export default function TabNavigation({ tabs, activeTab, onTabChange, visible = true }) {
    return (
        <NavContainer $visible={visible}>
            <TabList>
                {tabs.map((tab, index) => (
                    <TabButton
                        key={tab.id}
                        $active={activeTab === index}
                        onClick={() => onTabChange(index)}
                    >
                        {tab.label}
                    </TabButton>
                ))}
            </TabList>
        </NavContainer>
    );
}
