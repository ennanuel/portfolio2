const BackgroundBox = ({animDelay}) => {

    return (
        <div className="block flex-center full-hw">
        <div className="content full-hw" style={ {background: 'rgb(53, 46, 1)', animationDelay: `${animDelay}s`} } />
        </div>
    )
}

export default BackgroundBox
