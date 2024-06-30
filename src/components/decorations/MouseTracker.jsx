import { useEffect, useState, useRef, useContext } from "react";
import { ALPH_REGEXP } from "../../assets/data";
import { PageContext } from "../../PageContext";

const MouseTracker = () => {
    const { isMobile } = useContext(PageContext);
    const [{ xCoordinate, yCoordinate }, setCoordinates] = useState({ xCoordinate: '0px', yCoordinate: '0px' });
    const [content, setContent] = useState('');
    const trackerRef = useRef(null);

    const handleMouseTracker = (e) => {
        const mousetracker = trackerRef.current;
        if (isMobile || !mousetracker) return;
        const closestLink = e.target.closest('.link');
        let offsetX = 0, offsetY = 0, linkDescription = '';
        if (closestLink) {
            const linkText = closestLink.getAttribute('link') || '';
            linkDescription = linkText.match(ALPH_REGEXP)?.join(' ');
            offsetX = offsetY = 10 + (mousetracker.offsetWidth / 2);
            if (e.target.closest('.reverse-link')) offsetX *= -1;
        }
        const xCoordinate = `${e.clientX + offsetX - (mousetracker.offsetWidth / 2)}px`;
        const yCoordinate = `${e.clientY + offsetY - (mousetracker.offsetWidth / 2)}px`;
        setContent(linkDescription);
        setCoordinates({ xCoordinate, yCoordinate });
    };

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseTracker)
        return () => window.removeEventListener('mousemove', handleMouseTracker)
    }, [isMobile]);

    if (isMobile) return;

    return (
        <div
            ref={trackerRef}
            className="mouse-tracker"
            style={{ transform: `translate(${xCoordinate}, ${yCoordinate})` }}
        >
            <span>{content}</span>
        </div>
    )
};

export default MouseTracker
