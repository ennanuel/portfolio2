const Button = ({ height, width, children, fontSize, onMouseOver, onMouseOut, onClick }) => (
    
    <button onMouseOver={onMouseOver} onMouseOut={onMouseOut} onClick={onClick} className="btn full-border link" type="button" style={{height, width, fontSize}}><span className="flex-center">{children}</span></button>
)

export default Button
