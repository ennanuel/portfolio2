import '../styles/button.css'

const Button = ({ height, width, children, fontSize }) => (
    
    <button className="btn full-border" type="button" style={{height, width, fontSize}}><span className="flex-center">{children}</span></button>
)

export default Button
