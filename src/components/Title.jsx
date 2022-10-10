import '../styles/title.css'

const Title = ({ children, left, number}) => (
    <article className={`title full-border welcome-box ${left? 'title-left': 'title-right'}`}>
        <span className="number">{number}</span><span>{' '}{children}</span>
    </article>
);
    

export default Title;
