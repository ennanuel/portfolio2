import React from 'react'

const CurrentSectionDisplay = ({ navigateToSection, pageLink, showBtn, linkItems }) => {
    return (
        <div
            className={`current-section link reverse-link ${!showBtn ? 'hide' : ''}`}
            link="Navigate"
        >
            {
                linkItems.map(
                    ({ link, name }, i) => (
                        <button
                            key={i}
                            className={`action-btn section-circle link reverse-link ${pageLink === link ? 'active-section-circle show-circle-content' : ''}`}
                            onClick={() => navigateToSection(link, i)}
                            link={link}
                            data-content={name}
                        />
                    ))
            }
        </div>
    )
};

export default CurrentSectionDisplay
