import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolderBlank } from '@fortawesome/free-regular-svg-icons'
import '../styles/socials.css'

const Socials = () => {
  return (
    <div className="socials link">
      <div className="line"></div>
      <div className="social flex-center link"><i><FontAwesomeIcon icon={faFolderBlank} /></i></div>
      <div className="social flex-center link"><i><FontAwesomeIcon icon={faFolderBlank} /></i></div>
      <div className="social flex-center link"><i><FontAwesomeIcon icon={faFolderBlank} /></i></div>
    </div>
  )
}

export default Socials
