import { useRef } from 'react'
import { useIsVisible } from 'react-is-visible'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { FiGithub } from 'react-icons/fi'

const NewProject = ({left, number, content}) => {
  const nodeRef = useRef()
  const isVisible = useIsVisible(nodeRef, {once: true})
  const imgURL = new URL(`./assets/images/${content.image}`, import.meta.url).href

  return (
    <div className={`project-container`}>
      <div outertitle={content.name} className={`new-project left-new-project ${isVisible? left? 'animate__animated animate__fadeInLeft': 'animate__animated animate__fadeInRight': 'hidden'}`} ref={nodeRef}>
      <div className={'progress-box'}><div className={`${content.progress === 'finished'? 'finished': 'ongoing'} status`}></div>{content.progress}</div>
      <div className={`new-project-title flex-center ${left? 'start-from-left': 'start-from-right'}`}>
        <h4>Featured Project</h4>
        <h3>{content.name}</h3>
      </div>
      <div className={`new-project-links flex-center ${left? 'start-from-left': 'start-from-right'}`}>
        <img src={imgURL} alt="Project Image" />
        <div className="link link-container flex-center">
          <a target="_blank" className="link flex-center full-border" link="Go to Project" href={content.mainLink}><FaExternalLinkAlt /></a>
          <a target="_blank" className="link flex-center full-border" link="Github Repo" href={content.gitLink}><FiGithub /></a>
        </div>
      </div>
      <div className={`new-project-text flex-center ${left? 'start-from-right': 'start-from-left'}`}>
        <p>{content.description}</p>
        <div className={`bb-10 tech-used`}>
          {
            content.stack.map(stack => <div className="tech">{stack}</div>)
          }
        </div>
      </div>
      <img src={imgURL} className="new-project-bg-img" />
      <div className={`project-number full-border flex-center ${left? 'start-from-right': 'start-from-left'}`}>
        {number < 10 ? '0' + (number + 1) + '.' : (number + 1) + '.'}
      </div>
    </div>
    
    </div>
  )
}

export default NewProject
