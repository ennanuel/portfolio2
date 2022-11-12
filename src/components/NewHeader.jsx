import Button from "./Button"
import { BiMenuAltLeft } from 'react-icons/bi'
import { AiFillCaretRight } from 'react-icons/ai'
import { useRef } from "react"
import { useIsVisible } from 'react-is-visible'
import Customize from "./Customize"


const NewHeader = ({state, setState}) => {
    const nodeRef = useRef()
    const isVisible = useIsVisible(nodeRef, {once: true})

    const linkItems = [
        {name: 'Intro', link: '#intro'},
        {name: 'About Me', link: '#about'},
        {name: 'Resume', link: '#resume'},
        {name: 'Projects', link: '#projects'},
        {name: 'Contact', link: '#contact'}
    ]

    const handleMenuClick = () => {
        setState(prev => ({
            ...prev, isMenuHovered: true, showingFullContent: false
        }))
    }
    
    const exitMenu = () => {
        setState(prev => ({
            ...prev, isMenuHovered: false, showingFullContent: true
        }))
    }
    

    const stopScrollEffect = () => {
        if(state.deviceWidth < 770) return;
        
        setState(prev => ({...prev, scroll: false}))
    }

    const resumeScrollEffect = () => {
        if(state.deviceWidth < 770) return;

        setState(prev => ({...prev, scroll: true}))
    }
    
    return (
        <header className={`menu link link-rev ${state.isMenuHovered? 'show-menu': ''}`} link="Menu">
            <Customize state={state} setState={setState} />

            <ul>

            {
                linkItems.map((linkItem, i) => {
                    const handleLinkHover = () => {
                        setState(prev => ({...prev, currentPage: i}))
                    }

                    const handleClick = () => {
                        location.href = linkItem.link
                        setState(prev => ({...prev, link: linkItem.link, isMenuHovered: false, currentPage: i}))
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

                <li><Button fontSize="16px">Resume</Button></li>
            </ul>

            <div 
                className='go-back-btn flex-center link link-rev' 
                link="exit menu"
            >
                <i className="flex-center" onClick={exitMenu}><AiFillCaretRight /></i>
            </div>

            <div 
                className={
                `menu-btn flex-center anim-duration delay 
                ${state.showMenuBtn? '': 'hide'} 
                ${isVisible? 'animate__animated animate__fadeIn': 'hidden'}`
                } 
                ref={nodeRef} 
                onClick={handleMenuClick}
            >
                    <BiMenuAltLeft />
            </div>

            <div className={
                `current-section link link-rev 
                ${state.showMenuBtn? 'hide': ''}`
                } onMouseOver={stopScrollEffect} 
                onMouseOut={resumeScrollEffect} 
                link="Navigate"
            >
            {
                linkItems.map((linkItem, i) => {
                    const handleClick = () => {
                        location.href = linkItem.link

                        setState(prev => ({...prev, link: linkItem.link}))
                    }

                    return <div key={i} className={`section-circle link link-rev ${state.link === linkItem.link? 'active-section-circle': ''} ${state.link.includes(linkItem.link)? 'show-circle-content': ''}`} onClick={handleClick} link={linkItem.link} data-content={linkItem.name} />
                })
            }
            </div>
        </header>

    )
}

export default NewHeader
