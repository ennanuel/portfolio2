import projectImage from '../assets/images/pexels-lukas-296115.jpg'
import { useIsVisible } from 'react-is-visible'
import { useRef } from 'react'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { FiGithub } from 'react-icons/fi'

const Project = ({left, deviceWidth}) => {
  const nodeRef = useRef()
  const isVisible = useIsVisible(nodeRef)

  return (
    <div className="project">

      <div ref={nodeRef} className={`project-img full-border block flex-center ${left? 'left-project': 'right-project'} ${!isVisible? 'hide-element': deviceWidth < 770? 'animate__animated animate__fadeIn': left ? 'animate__animated animate__fadeInLeft': 'animate__animated animate__fadeInRight'}`}>

        <img src={projectImage} alt="project image" />

      </div>

      <div ref={nodeRef} className={`project-info ${left? 'right-project flex-end': 'left-project flex-start'} ${!isVisible? 'hide-element': deviceWidth < 770? 'animate__animated animate__fadeIn': left ? 'animate__animated animate__fadeInRight': 'animate__animated animate__fadeInLeft'}`}>

        <div className="bb-10 project-title">
            <h3>Featured Project</h3>
            <h2>PHP Cart</h2>
        </div>
        <div className="bb-10 project-description">
        A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm. A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.
        </div>
        <div className={`bb-10 tech-used ${left? 'flex-end': 'flex-start'}`}>
            <div className={`tech${left? ' ml': ' mr'}`}>PHP</div>
            <div className={`tech${left? ' ml': ' mr'}`}>MySQL</div>
            <div className={`tech${left? ' ml': ' mr'}`}>React</div>
            <div className={`tech${left? ' ml': ' mr'}`}>JavaScript</div>
            <div className={`tech${left? ' ml': ' mr'}`}>HTML/CSS</div>
        </div>
        <div className={`bb-10 links ${left? 'flex-end': 'flex-start'}`}>
            <div className={`link git-link ${left? ' ml': ' mr'}`}><FiGithub /></div>
            <div className={`link project-link ${left? ' ml': ' mr'}`}><FaExternalLinkAlt /></div>
        </div>
      </div>
    </div>
  )
}

export default Project
