const BackgroundBox = ({animDelay}) => {

    return (
        <div className="block flex-center full-hw">
        <div className="content full-hw" style={ { animationDelay: `${animDelay}s`} } />
        </div>
    )
}

export default BackgroundBox
