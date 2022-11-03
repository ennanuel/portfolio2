import '../styles/taskbar.css'

const Taskbar = ({ isVisible }) => {
    const dots = ['red-dot', 'yellow-dot', 'green-dot']

    return (
        <div className="task-bar">
            {dots.map( (dot, i) => <div key={i} className={`dot delay anim-duration ${dot} ${isVisible? 'animate__animated animate__fadeInUp': 'hidden'}`} style={{animationDelay: '0.' + i + 's'}} />)}
        </div>
    )
}


export default Taskbar
