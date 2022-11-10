import image1 from '../assets/images/pexels-lukas-296115.jpg'
import { useRef } from 'react'
import { useIsVisible } from 'react-is-visible'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { FiGithub } from 'react-icons/fi'

const NewProject = ({left, number}) => {
  const nodeRef = useRef()
  const isVisible = useIsVisible(nodeRef, {once: true})


  return (
    <div className={`new-project left-new-project ${isVisible? left? 'animate__animated animate__fadeInLeft': 'animate__animated animate__fadeInRight': 'hidden'}`} ref={nodeRef}>
      <div className={`new-project-title flex-center ${left? 'start-from-left': 'start-from-right'}`}>
        <h4>Featured Project</h4>
        <h3>New Project</h3>
      </div>
      <div className={`new-project-links flex-center ${left? 'start-from-left': 'start-from-right'}`}>
        <img src={image1} />
        <div className="link link-container flex-center">
          <i className="link flex-center full-border" link="Go to Project"><FaExternalLinkAlt /></i>
          <i className="link flex-center full-border" link="Github Repo"><FiGithub /></i>
        </div>
      </div>
      <div className={`new-project-text flex-center ${left? 'start-from-right': 'start-from-left'}`}>
        <p>
        a lot of text for this project...a lot of text for this project...a lot of text for this project...a lot of text for this project...a lot of text for this project...a lot of text for this project...a lot of text for this project...a lot of text for this project...a lot of text for this project...
        </p>
        <div className={`bb-10 tech-used`}>
            <div className={`tech`}>PHP</div>
            <div className={`tech`}>MySQL</div>
            <div className={`tech`}>JavaScript</div>
            <div className={`tech`}>ReactJS</div>
            <div className={`tech`}>SASS</div>
        </div>
      </div>
      <img src={image1} className="new-project-bg-img" />
      <div className={`project-number full-border flex-center ${left? 'start-from-right': 'start-from-left'}`}>
        {number < 10 ? '0' + number + '.' : number + '.'}
      </div>
    </div>
  )
}

export default NewProject
