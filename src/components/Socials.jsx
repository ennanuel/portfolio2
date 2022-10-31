import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'
import { MdOutlineAlternateEmail } from 'react-icons/md'
import '../styles/socials.css'

const Socials = () => {
  return (
    <div className="socials link">
      <div className="line"></div>
      <div className="social flex-center link" link="twitter"><i><FiTwitter /></i></div>
      <div className="social flex-center link" link="email"><i><MdOutlineAlternateEmail /></i></div>
      <div className="social flex-center link" link="github"><i><FiGithub /></i></div>
      <div className="social flex-center link" link="linkedin"><i><FiLinkedin /></i></div>
    </div>
  )
}

export default Socials
