const Title = ({ children, left = false }) => (
    <article className={`title full-border welcome-box ${left ? 'title-left': 'title-right'}`}>
        <span className="title-content flex-center">
            <span>{' '}{children}</span>
        </span>
    </article>
);
    

export default Title;
