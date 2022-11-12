import React from 'react'
import { FaExternalLinkAlt, FaRegLightbulb } from 'react-icons/fa'
import { FiGithub } from 'react-icons/fi'
import { useRef } from 'react'
import { useIsVisible } from 'react-is-visible'


const Project2 = ({content}) => {
  const nodeRef = useRef()
  const isVisible = useIsVisible(nodeRef, {once: true})

  return (
    <div ref={nodeRef} className={`other-project anim-duration ${isVisible? 'animate__animated animate__fadeInUp': 'hide-element'}`}>
      <div className="project-top">
        <div className="file-img"><i><FaRegLightbulb /></i></div>
        <div className="links">
            <div className="link flex-center" link="Github Repo"><a href={content.gitLink}><FiGithub /></a></div>
            <div className="link flex-center" link="Main Link"><a href={content.mainLink}><FaExternalLinkAlt /></a></div>
        </div>
      </div>
      <div className='project-info'>
        <h2>{content.projName}</h2>
        <p className="other-project-description ">{content.description}</p>
      </div>
      <div className='tech-used'>
        {
          content.stack.map(stack => <div className="tech">{stack}</div>)
        }
      </div>
    </div>
  )
}

export default Project2
