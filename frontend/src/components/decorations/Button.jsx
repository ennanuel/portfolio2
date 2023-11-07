const Button = ({ height, width, children, fontSize, onMouseOver, onMouseOut, onClick, loading }) => (
    <button
        style={{ height, width, fontSize }}
        onMouseOver={onMouseOver}
        onMouseOut={onMouseOut}
        onClick={onClick}
        className={`btn full-border link abril ${loading && 'loading'}`}
        type="button"
    >
        <span className="flex-center">{children}</span>
    </button>
)

export default Button
