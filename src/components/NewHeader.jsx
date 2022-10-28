import Button from "./Button"


const NewHeader = ({state, setState}) => {
    const linkItems = [
        {name: 'Introduction', link: '#intro'},
        {name: 'About Me', link: '#about'},
        {name: 'Resume', link: '#resume'},
        {name: 'Projects', link: '#projects'},
        {name: 'Contact', link: '#contact'}
    ]


    const handleHover = () => {
        setState(prev => ({
            ...prev, isMenuHovered: true, showingFullContent: false
        }))
    }
    

    const handleMouseOver = () => {
        setState(prev => ({...prev, scroll: false}))
    }

    const handleMouseOut = () => {
        setState(prev => ({...prev, scroll: true}))
    }
    
    return (
        <header className={`menu link for-other ${state.isMenuHovered? 'show-menu': ''}`} link="Menu">
            <div className="change-color link" link="theme">
                <div id="white" className="link" link="white theme"></div>
                <div id="black" className="link" link="black theme"></div>
            </div>

            <ul>

            {
                linkItems.map((linkItem, i) => {
                    const handleLinkHover = () => {
                        location.href = linkItem.link
                    }

                    const handleClick = () => {
                        location.href = linkItem.link
                        setState(prev => ({...prev, link: linkItem.link, isMenuHovered: false}))
                    }

                    return <li key={i} className="menu-item">
                            <p 
                             onMouseOver={handleLinkHover}
                             onClick={handleClick}
                             className={`link  ${state.link === linkItem.link? 'active': ''}`} 
                             link={linkItem.link}>
                                {linkItem.name}
                            </p>
                        </li>
                })
            }

                <li><Button width="100px" height="40px" fontSize="16px">Resume</Button></li>
            </ul>
            <div className={`menu-btn ${state.showMenuBtn? '': 'hide'}`} onMouseOver={handleHover}>Menu</div>
            <div className={`current-section link ${state.showMenuBtn? 'hide': ''}`} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} link="Navigate">
            {
                linkItems.map((linkItem, i) => {
                    const handleClick = () => {
                        location.href = linkItem.link

                        setState(prev => ({...prev, link: linkItem.link}))
                    }

                    return <div key={i} className={`section-circle link ${state.link === linkItem.link? 'active-section-circle': ''} ${state.link.includes(linkItem.link)? 'show-circle-content': ''}`} onClick={handleClick} link={linkItem.link} data-content={linkItem.name} />
                })
            }
            </div>
        </header>

    )
}

export default NewHeader
