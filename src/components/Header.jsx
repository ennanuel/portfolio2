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
            if(window.scrollY > 50) {
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
        <header className={isAbs && window.innerWidth < 720? 'new-header-bg': ''}>
            <div className={`nav-bar${scrolled? ' scrolled': ''}`}>
            <h2>LOGO</h2>
            <nav>
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
            </div>
            <div className={`for-phone nav-items ${isAbs? 'down': 'up'}`}>
                <div className="flex-center">Home</div>
                <div className="flex-center">About Us</div>
                <div className="flex-center">Contact</div>
                <div className="flex-center">Resume</div>
            </div>
        </header>
    )
}

export default Header
