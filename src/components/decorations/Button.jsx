const Button = ({ height, width, children, fontSize, onMouseOver, onMouseOut, onClick, loading, submitBtn = false }) => (
    <button
        style={{ height, width, fontSize }}
        onMouseOver={onMouseOver}
        onMouseOut={onMouseOut}
        onClick={onClick}
        className={`btn full-border link abril ${loading && 'loading'}`}
        type={`${submitBtn ? 'submit' : 'button'}`}
    >
        <span className="flex-center">{children}</span>
    </button>
)

export default Button
