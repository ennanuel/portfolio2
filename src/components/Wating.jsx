import '../styles/waiting.css'
import lightLogo from './assets/images/site/imageonline-co-transparentimage.png'
import darkLogo from './assets/images/site/imageonline-co-transparentimage (1).png'


const Waiting = ({lightTheme, hide}) => {
  return (
    <div className={`flex-center waiting ${!hide && 'hide-waiting'}`}>
      <div className="waiting-icon flex-center">
        <img src={ lightTheme ? lightLogo : darkLogo } alt="" />
        <div className="line1 hline"></div>
        <div className="line2 hline"></div>
        <div className="line3 vline"></div>
        <div className="line4 vline"></div>
      </div>
    </div>
  )
}

export default Waiting
