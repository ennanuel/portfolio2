import { useState, useEffect } from "react"
import Button from "./Button";
import '../styles/header.css'


const Header = ({currentPageTitle, setDelay}) => {
    const [scrolled, setScrolled] = useState('');
    const [scrollPosition, setScrollPosition] = useState(0);
    const [style, setStyle] = useState({})
    const [isAbs, setIsAbs] = useState(false)
    const linkItems = [
        {name: 'Introduction', link: '#intro'},
        {name: 'About Me', link: '#about'},
        {name: 'Resume', link: '#resume'},
        {name: 'Projects', link: '#projects'},
        {name: 'Contact', link: '#contact'}
    ]

    const changePosition = () => {
        setIsAbs(prev => !prev);
    }
    useEffect( () => {

        const scrollHandler = () => {
            if(window.scrollY > 20) {
                setScrolled('scrolled')
            } else {
                setScrolled('')
            }

            if(window.scrollY === scrollPosition || isAbs) return;

            if(window.scrollY > scrollPosition && window.scrollY > 50) {
                setStyle({
                    transform: 'translateY(-100%)',
                })
            } else {
                setStyle({})
            }

            setScrollPosition(window.scrollY);
        }

        window.addEventListener('scroll', scrollHandler);
        return () => {
            window.removeEventListener('scroll', scrollHandler);
        }
    }, [scrollPosition, isAbs])

    return (
        <header>
            <div className={`blur-bg ${isAbs? 'bring-forward': ''}`} onClick={changePosition} />
            <nav className={`nav-bar ${scrolled} ${isAbs? 'show-items': ''}`} style={style}>
                <h2 className="home-logo">N</h2>
                <ul className='nav-items'>
                    {
                        linkItems.map(linkItem => <li className={`nav-item flex-center ${currentPageTitle.includes(linkItem.link)? 'active-link': ''}`} onClick={changePosition}><a href={linkItem.link}>{linkItem.name}</a></li>)
                    }
                    <li style={currentPageTitle.includes('resume') ? { opacity: 0, pointerEvents: 'none'} : {}}>
                        <Button width="100px" height="40px" fontSize="16px">Resume</Button>
                    </li>
                </ul>
                <div className={`header-icon ${isAbs? 'icon-rotated': ''}`} onClick={changePosition}>
                    <div className="icon-line line1"></div>
                    <div className="icon-line line2"></div>
                    <div className="icon-line line3"></div>
                </div>
            </nav>
        </header>
    )
}

export default Header
