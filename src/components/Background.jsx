import { useState, useEffect } from 'react'
import BackgroundBox from './BackgroundBox.jsx'
import { v4 as uuidv4 } from 'uuid'
import '../styles/background.css'

let isFirstTime = true;
const Background = () => {
    const [{width, height, isResized, content, visible}, setState] = useState({});
    
    const resize = (height, width) => {
        setState((prev) => ({...prev, height, width, isResized: true}));
    }

    const background = () => {

        if(width < height || width < 720) {
            setState( (prev) => ({...prev, content: null}))
            return;
        }

        function createDiv(c) {

            const rand = Math.round(Math.random());
            if(rand === 0 || c < 1) {
                const elemKey = uuidv4();
                return <BackgroundBox key={elemKey} />;
            } else {
                const boxes = [];
                for(let i = 0; i < 4; i++) {
                    boxes.push(createDiv(c - 1));
                }
                return <div key={uuidv4()} className="box full-hw">{boxes}</div>;
            }

        }
    
        const n = (height + 100) +'px';
        let box = [];
        const boxStyle = {width: n, height: n};
    
            for(let k = 0; k < 4; k++) {
                const divs = [];
    
                for(let i = 0; i < 4; i++) {
                    divs.push(createDiv(5));
                }
    
                box.push(<div key={uuidv4()} className="box-container" style={boxStyle}>{divs}</div>);
            }
    
            setState( (prev) => ({ ...prev, content: box}));
    
    };
            
    const resizeHandler = () => {
        resize(window.innerHeight, window.innerWidth)
    }

    useEffect( () => {
        let changeBackground;

        if(isFirstTime) {
            resize(window.innerHeight, window.innerWidth);
            isFirstTime = false;
        }

        if(isResized !== true) return;
        setState(prev => ({...prev, isResized: false}))

        background()
        
        window.addEventListener('resize', resizeHandler);

        clearInterval(changeBackground)
        changeBackground = setInterval( () => {
                setState((prev) => ({...prev, visible: true}))

                setTimeout( () => {
                setState((prev) => ({...prev, visible: false}))
                background()
                }, 2000)


            }, 30000
        )
        return () => {
            window.removeEventListener('resize', resizeHandler); 
            clearInterval(changeBackground)
        };

    }, [height, width])


    return (
        <div className={`background-container${visible? ' hidden': ''}`}>
            { content }
        </div>
    )
}

export default Background;