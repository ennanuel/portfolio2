const DOTS = ['', '', ''];

const Taskbar = () => {
    return (
        <div className="task-bar">
            {
                DOTS.map((dot, i) => (
                    <div
                        key={i}
                        className={`dot delay anim-duration animate__animated animate__fadeInUp`}
                        style={{ animationDelay: `${i/10}s` }}
                        />
                ))
            }
        </div>
    )
}


export default Taskbar
