import React from 'react'
import { BsGear } from 'react-icons//bs'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { FiCodepen, FiGithub } from 'react-icons/fi'
import { useRef } from 'react'
import { useIsVisible } from 'react-is-visible'


const Project2 = ({content, i}) => {
  const nodeRef = useRef()
  const isVisible = useIsVisible(nodeRef, {once: true})

  return (
    <div ref={nodeRef} className={`other-project anim-duration ${isVisible? 'animate__animated animate__fadeIn': 'hide-element'}`} style={{animationDelay: (i/10).toFixed(2) + 's'}}>
      <div className="project-top">
        <div className="file-img"><i><BsGear /></i></div>
        <div className="links other-project-links link">
          {
            content.codepenLink ?
            <div className="link project2-link flex-center" link="Codepen"><a target="_blank" href={content.codepenLink}><FiCodepen /></a></div> :
            <div className="link project2-link flex-center" link="Github Repo"><a target="_blank" href={content.gitLink}><FiGithub /></a></div>
          }
          <div className="link project2-link flex-center" link="Main Link"><a target="_blank" href={content.mainLink}><FaExternalLinkAlt /></a></div>
        </div>
      </div>
      <div className='project-info'>
        <a href={content.mainLink} target="_blank">{content.name}</a>
        <p className="other-project-description ">{content.description}</p>
      </div>
      <div className='tech-used'>
        {
          content.stack.map(stack => <div className="tech full-border flex-center">{stack}</div>)
        }
      </div>
    </div>
  )
}

export default Project2
