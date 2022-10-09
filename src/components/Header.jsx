import { useState, useEffect } from "react"
import Button from "./Button";


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
        <header>
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
                            <div className="icon-line line1" style={isAbs? {position: 'absolute', rotate: '45deg'}: {}}></div>
                            <div className="icon-line line2" style={isAbs? {position: 'absolute', rotate: '-45deg'}: {}}></div>
                            <div className="icon-line line3" style={isAbs? {position: 'absolute', rotate: '45deg'}: {}}></div>
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
