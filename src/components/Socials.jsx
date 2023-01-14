import { FiGithub, FiLinkedin, FiCodepen } from 'react-icons/fi'
import { MdOutlineAlternateEmail } from 'react-icons/md'
import '../styles/socials.css'

const Socials = ({isVisible, isMenuHovered}) => {

  const socialLinks = [
    {
      link: 'github', 
      element: <FiGithub />,
      url: "https://www.github.com/ennanuel"
    },
    {
      link: 'codepen',
      element: <FiCodepen />,
      url: "https://www.codepen.io/ennanuel"
    },
    {
      link: 'email', 
      element: <MdOutlineAlternateEmail />,
      url: "https://emmanuelezema6@gmail.com"
    },
    {
      link: 'linkedIn', 
      element: <FiLinkedin />,
      url: "https://www.linkedin.com/in/ezema-emmanuel-33b676165/"
    }
  ]


  return (
    <div className={`socials link anim-duration delay ${isVisible? 'animate__animated animate__fadeIn': 'hidden'} ${isMenuHovered? 'hide-socials': ''}`}>
    <div className="line"></div>
      {
        socialLinks.map((socialLink, i) => 
          <a 
            key={i} 
            target="_blank" 
            href={socialLink.url}
            className={`social flex-center link delay ${isVisible? 'animate__animated animate__fadeInDown': 'hidden'}`} 
            link={socialLink.link} 
            style={{animationDelay: '0.' + i + 's'}}
          >
            <i>{socialLink.element}</i>
          </a>)
      }
    </div>
  )
}

export default Socials
