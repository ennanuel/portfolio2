import '../styles/taskbar.css'
import { useIsVisible } from 'react-is-visible'
import { useRef } from 'react'

const Taskbar = ({ setDelay }) => {
    const nodeRef = useRef();
    const isVisible = useIsVisible(nodeRef)
    const dots = ['red-dot', 'yellow-dot', 'green-dot']

    return (
        <div className="task-bar" ref={nodeRef}>
            {dots.map( (dot, i) => <div className={`dot anim-duration ${dot} ${isVisible? 'animate__animated animate__fadeInRight': 'hidden'}`} style={setDelay()} />)}
        </div>
    )
}


export default Taskbar
