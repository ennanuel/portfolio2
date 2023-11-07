const Title = ({ children, left, num}) => (
    <article className={`title full-border welcome-box ${left ? 'title-left': 'title-right'}`}>
        <span className="title-content flex-center">
            <span className="number">{num}</span>
            <span>{' '}{children}</span>
        </span>
    </article>
);
    

export default Title;
