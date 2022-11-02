import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'
import { MdOutlineAlternateEmail } from 'react-icons/md'
import { useRef } from 'react'
import { useIsVisible } from 'react-is-visible'
import '../styles/socials.css'

const Socials = ({setDelay}) => {
  const socialLinks = [{link: 'twitter', element: <FiTwitter />}, {link: 'email', element: <MdOutlineAlternateEmail />}, {link: 'github', element: <FiGithub />}, {link: 'linkedIn', element: <FiLinkedin />}]
  const nodeRef = useRef()
  const isVisible = useIsVisible(nodeRef, {once: true})


  return (
    <div ref={nodeRef} className={`socials link ${isVisible? 'animate__animated animate__fadeIn': 'hidden'}`} style={setDelay()}>
    <div className="line"></div>
      {
        socialLinks.map((socialLink, i) => 
          <div key={i} className={`social flex-center link ${isVisible? 'animate__animated animate__fadeInDown': 'hidden'}`} link={socialLink.link} style={setDelay()}>
            <i>{socialLink.element}</i>
          </div>)
      }
    </div>
  )
}

export default Socials
