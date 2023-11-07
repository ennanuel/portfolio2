import React from 'react';
import { Button } from '../decorations';

const LinkItems = ({ menu, page, downloadCV, handleLinkHover, navigateToSection, linkItems }) => {
    return (
        <ul>
            {
                linkItems.map(({ link, name }, i) => ( 
                    <li
                        className={`menu-item ${menu.isHovering ? 'slide-in' : ''}`}
                        style={{ animationDelay: `${(i + 1) / 20 }s`}}
                    >
                        <p
                            onMouseOver={() => handleLinkHover(i)}
                            onClick={() => navigateToSection(link, i)}
                            className={`link ${page.link === link ? 'active' : ''}`}
                            link={link}
                        >{name}</p>
                    </li>
                ))
            }
            <li
                className={`menu-item ${menu.isHovering ? 'slide-in' : ''}`}
                style={{ animationDelay: '0.35s' }}
            >
                <Button fontSize="16px" onClick={downloadCV}>Resume</Button>
            </li>
        </ul>
    )
};

export default LinkItems
