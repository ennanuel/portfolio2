import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'
import { MdOutlineAlternateEmail } from 'react-icons/md'
import '../styles/socials.css'

const Socials = ({isVisible}) => {

  const socialLinks = [{link: 'twitter', element: <FiTwitter />}, {link: 'email', element: <MdOutlineAlternateEmail />}, {link: 'github', element: <FiGithub />}, {link: 'linkedIn', element: <FiLinkedin />}]


  return (
    <div className={`socials link anim-duration delay ${isVisible? 'animate__animated animate__fadeIn': 'hidden'}`}>
    <div className="line"></div>
      {
        socialLinks.map((socialLink, i) => 
          <div key={i} className={`social flex-center link delay ${isVisible? 'animate__animated animate__fadeInDown': 'hidden'}`} link={socialLink.link} style={{animationDelay: '0.' + i + 's'}}>
            <i>{socialLink.element}</i>
          </div>)
      }
    </div>
  )
}

export default Socials
