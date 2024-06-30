const Button = ({ height, width, children, fontSize, onMouseOver, onMouseOut, onClick, loading }) => (
    <button
        style={{ height, width, fontSize }}
        className={`btn alt full-border link abril ${loading && 'loading'}`}
        type="button"
        onMouseOver={onMouseOver}
        onMouseOut={onMouseOut}
        onClick={onClick}
    >
        <span className="flex-center">{children}</span>
    </button>
)

export default Button
