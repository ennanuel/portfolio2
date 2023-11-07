import { useState, useEffect } from 'react';
import { useContext } from 'react';
import { PageContext } from '../../../PageContext.jsx';
import { createBackgroundBoxes } from './create.jsx';
import '../../../styles/background/background.css';

const Background = () => {
    const { dynamicBackground } = useContext(PageContext);
    const [background, setBackground] = useState([]);
    const [{ width, height }, setDimensions] = useState({ width: window.innerWidth, height: window.innerHeight });
    const [style, setStyle] = useState({ opacity: '1' });
    
    function createBackground() {
        const cantCreate = width < height || width < 70 || !dynamicBackground;
        if (cantCreate) return setBackground([]);
        const dimension = `${height + 100}px`;
        const createdBackgroundBoxes = createBackgroundBoxes(dimension);
        setBackground(createdBackgroundBoxes);
    };
    function resizeHandler(e) {
        const height = e.target.innerHeight;
        const width = e.target.innerWidth;
        setDimensions({ width, height })
    };
    useEffect(() => {
        let timeout, interval;
        function handleBackground() {
            setStyle({ opacity: '0' });
            clearTimeout(timeout);
            setTimeout(() => {
                setStyle({ opacity: '1' });
                createBackground();
            }, 2000);
        };
        createBackground();
        interval = setInterval(handleBackground, 30000);
        window.addEventListener('resize', resizeHandler);
        return () => {
            window.removeEventListener('resize', resizeHandler);
            clearTimeout(timeout);
            clearInterval(interval);
        };
    }, [height, width, dynamicBackground])


    return (
        <div style={style} className={`background-container ${!dynamicBackground && 'hidden'}`}>
            {
                background
            }
        </div>
    )
}

export default Background;