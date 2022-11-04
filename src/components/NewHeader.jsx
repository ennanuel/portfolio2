import Button from "./Button"
import { BiMenuAltLeft } from 'react-icons/bi'
import { AiFillCaretLeft } from 'react-icons/ai'
import { useRef } from "react"
import { useIsVisible } from 'react-is-visible'
import Customize from "./Customize"


const NewHeader = ({state, setState}) => {
    const nodeRef = useRef()
    const isVisible = useIsVisible(nodeRef)

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
    
    const handleClick = () => {
        setState(prev => ({
            ...prev, isMenuHovered: false, showingFullContent: true
        }))
    }
    

    const handleMouseOver = () => {
        if(state.deviceWidth < 770) return;
        
        setState(prev => ({...prev, scroll: false}))
    }

    const handleMouseOut = () => {
        if(state.deviceWidth < 770) return;

        setState(prev => ({...prev, scroll: true}))
    }
    
    return (
        <header className={`menu link for-other ${state.isMenuHovered? 'show-menu': ''}`} link="Menu">
            <Customize dynamicBg={state.dynamicBg} setState={setState} />

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
            <div className='go-back-btn flex-center'><i className="flex-center" onClick={handleClick}><AiFillCaretLeft /></i></div>
            <div className={`menu-btn flex-center anim-duration delay ${state.showMenuBtn? '': 'hide'} ${isVisible? 'animate__animated animate__fadeInLeft': 'hidden'}`} ref={nodeRef} onMouseOver={handleHover} onClick={handleHover}><BiMenuAltLeft /></div>
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
