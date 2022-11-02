import '../styles/button.css'

const Button = ({ height, width, children, fontSize, onMouseOver, onMouseOut }) => (
    
    <button onMouseOver={onMouseOver} onMouseOut={onMouseOut} className="btn full-border link" type="button" style={{height, width, fontSize}}><span className="flex-center">{children}</span></button>
)

export default Button
