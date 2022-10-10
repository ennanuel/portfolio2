import '../styles/bgtext.css'

const BgText = ({ children, left, l, r, b }) =>(
    <div className={`bg-text ${left? 'bg-text-left': 'bg-text-right'}`} style={{left: l, right: r, bottom: b}}>
        {children}
    </div> 
);

export default BgText;
