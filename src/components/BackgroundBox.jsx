import { useState, useEffect } from 'react'

const BackgroundBox = () => {
    const [opacity, setState] = useState(0);


    useEffect( () => {
        let changeColor;
        const animate = () => {

            const randomNum = Math.random().toFixed(2)

            setState(randomNum);
        }
        animate();

        clearInterval(changeColor);
        changeColor = setInterval(animate, 2000);
    }, [])

    return (
        <div className="block flex-center full-hw">
        <div className="content full-hw" style={ {opacity, background: 'rgb(30, 30, 30)'} } />
        </div>
    )
}

export default BackgroundBox
