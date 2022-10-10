import '../styles/button.css'

const Button = ({ height, width, children, fontSize }) => (
    
    <button className="btn" type="button" style={{height, width, fontSize}}><span>{children}</span></button>
)

export default Button
