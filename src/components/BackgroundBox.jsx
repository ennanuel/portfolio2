import { useState, useEffect } from 'react'

const BackgroundBox = () => {
    const colors = ['#131313', '#151515', '#222222', '#292929', '#111111', '#1d1d1d'];
    const [color, setState] = useState('black');


    useEffect( () => {
        let changeColor;
        const animate = () => {
            const rand = Math.floor(Math.random() * colors.length);
            const randomColor = colors[rand];

            setState(randomColor);
        }
        animate();

        clearInterval(changeColor);
        changeColor = setInterval(animate, 1500);
    }, [])

    return (
        <div className="block flex-center full-hw">
        <div className="content full-hw" style={ {backgroundColor: color} } />
        </div>
    )
}

export default BackgroundBox
