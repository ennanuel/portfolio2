import '../../styles/waiting.scss';
import lightLogo from '../../assets/images/icon-light.png';
import darkLogo from '../../assets/images/icon-dark.png';


const Waiting = ({ loading, theme }) => {
  return (
    <div className={`flex-center waiting ${!loading && 'hide-waiting'}`}>
      <div className="waiting-icon flex-center">
        <img src={ theme === 'light' ? lightLogo : darkLogo } alt="" />
        <div className="line1 hline"></div>
        <div className="line2 hline"></div>
        <div className="line3 vline"></div>
        <div className="line4 vline"></div>
      </div>
    </div>
  )
}

export default Waiting
