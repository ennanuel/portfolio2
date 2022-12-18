import { useEffect, useState } from 'react';
import '../styles/movingbackground.css';

const MovingBackground = () => {
    const [y, setDimensions] = useState(0)

    useEffect(() => {
        const moveBackground = (e) => {
            const Yposition = ((window.innerHeight - e.clientY) / window.innerHeight).toFixed(3)

            setDimensions(Yposition)
        }

        window.addEventListener('mousemove', moveBackground)
    }, [])

    return (
        <div className="moving-background">
            <div className="first-box-bg box-bg" style={{transform: 'translateX(-50%)'}}></div>
            <div className="second-box-bg box-bg" style={{transform: `translate(-50%, ${y * 30}px)`}}></div>
            <div className="third-box-bg box-bg" style={{transform: `translate(-50%, ${y * 200}px)`}}></div>
            <div className="fourth-box-bg box-bg" style={{transform: `translate(-50%, ${y * 500}px)`}}></div>
        </div>
    )
}

export default MovingBackground
