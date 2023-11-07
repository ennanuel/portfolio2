import { useContext, useRef } from "react";
import { useIsVisible } from 'react-is-visible';
import Customize from "./Customize";
import CloseMenuBtn from "./CloseMenuBtn";
import OpenMenuBtn from "./OpenMenuBtn";
import LinkItems from "./LinkItems";
import CurrentSectionDisplay from "./CurrentSectionDisplay";
import { PageContext } from "../../PageContext";
import { LINK_ITEMS } from "../../assets/data";
import CV from '../../cv/CV.pdf';

const NavBar = () => {
    const menuBtnRef = useRef();
    const isVisible = useIsVisible(menuBtnRef, { once: true });
    const { theme, menu, dynamicBackground, page, showDynamicBackground, hideDynamicBackground, setCurrentPage, toggleTheme, showMenu, hideMenu } = useContext(PageContext);

    function navigateToSection(link, i) {
        location.href = link;
        hideMenu();
        setCurrentPage(link, i);
    };
    function downloadCV() {
        window.open(CV);
        hideMenu();
    };
    
    return (
        <header className={`menu link reverse-link ${menu.isHovering ? 'show-menu' : ''}`} link="Menu">
            <Customize
                theme={theme}
                dynamicBackground={dynamicBackground}
                showDynamicBackground={showDynamicBackground}
                hideDynamicBackground={hideDynamicBackground}
                toggleTheme={toggleTheme}
            />
            <LinkItems
                menu={menu}
                page={page}
                downloadCV={downloadCV}
                handleLinkHover={setCurrentPage}
                navigateToSection={navigateToSection}
                linkItems={LINK_ITEMS}
            />
            <CloseMenuBtn hideMenu={hideMenu} />
            <OpenMenuBtn menuBtnRef={menuBtnRef} showBtn={menu.showBtn} isVisible={isVisible} showMenu={showMenu} />
            <CurrentSectionDisplay
                navigateToSection={navigateToSection}
                pageLink={page.link}
                showBtn={menu.showBtn}
                linkItems={LINK_ITEMS}
            />
        </header>

    )
}

export default NavBar
