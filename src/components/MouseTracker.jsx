import { useEffect, useState } from "react"

let firstMount = true;

const MouseTracker = ({setState}) => {
    const [style, setStyle] = useState({transform: ''})
    const [content, setContent] = useState('')

    useEffect(() => {
        const handleMouseMove2 = (e) => {
            if(e.clientX <= 0) {
                setState(prev => ({...prev, isMenuHovered: true, showingFullContent: false}))
            }


            const mousetracker = document.querySelector('.mouse-tracker');
        
            let offsetX = 0, offsetY = 0, text = '';
        
            if(e.target.closest('.link')) {
                const link = e.target.closest('.link')? e.target.closest('.link').getAttribute('link'): null;

                offsetX = offsetY = 10 + mousetracker.offsetWidth / 2;
                text = link? link.match(/[a-z]/gi).join(''): ''
            } else {
                setContent('')
            }
                
            const x = e.clientX + offsetX - mousetracker.offsetWidth / 2
            const y = e.clientY + offsetY - mousetracker.offsetWidth / 2

            const newStyle = {   transform: `translate(${x}px, ${y}px)`  }
            
            setContent(text)
            setStyle(newStyle)
        }

        window.addEventListener('mousemove', handleMouseMove2)

        return () => window.removeEventListener('mousemove', handleMouseMove2)

    }, [style])

    return <div className="mouse-tracker" style={style}><span>{content}</span></div>
}

export default MouseTracker
