import { useState, useEffect } from "react"
import Button from "./Button";
import '../styles/header.css'


const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isAbs, setIsAbs] = useState(false)

    const changePosition = () => {
        setIsAbs(prev => !prev);
    }
    useEffect( () => {

        const scrollHandler = () => {
            if(window.scrollY > 20) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }

        window.addEventListener('scroll', scrollHandler);
        return () => {
            window.removeEventListener('scroll', scrollHandler);
        }
    }, [])

    return (
        <header>
            {isAbs && <div className="blur-bg for-phone" onClick={changePosition} />}
            <div className={`for-phone nav-items ${isAbs? 'down': 'up'}`}>
                <ul>
                    <li className="flex-center">Home</li>
                    <li className="flex-center">About Us</li>
                    <li className="flex-center">Contact</li>
                    <li className="flex-center"><Button width="90px" height="40px" fontSize="16px">Resume</Button></li>
                </ul>
            </div>
            <nav className={`nav-bar${isAbs && window.innerWidth < 770? ' shown': scrolled? ' scrolled': ''}`}>
                <h2 className="home-logo">E</h2>
                <ul className="for-others">
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact</li>
                    <li><Button width="90px" height="40px" fontSize="16px">Resume</Button></li>
                </ul>
                <ul className="for-phone">
                    <li>
                        <div className="header-icon" onClick={changePosition}>
                            <div className="icon-line line1" style={isAbs? {position: 'absolute', transform: 'rotate(45deg)', top: '50%'}: {position: 'absolute', top: '5px'}}></div>
                            <div className="icon-line line2" style={isAbs? {position: 'absolute', transform: 'rotate(-45deg)', top: '50%'}: {position: 'absolute', top: '50%'}}></div>
                            <div className="icon-line line3" style={isAbs? {position: 'absolute', transform: 'rotate(45deg)', top: '50%'}: {position: 'absolute', bottom: '5px'}}></div>
                        </div>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
