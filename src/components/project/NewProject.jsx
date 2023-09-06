import { useRef } from 'react'
import { useIsVisible } from 'react-is-visible'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { FiGithub } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const NewProject = ({left, number, content}) => {
  const nodeRef = useRef()
  const isVisible = useIsVisible(nodeRef, {once: true})
  const imgURL = new URL(`../assets/images/${content.image}`, import.meta.url).href

  return (
    <div className="project-container">
      <div outertitle={content.name} className={`new-project full-border left-new-project ${isVisible? left? 'animate__animated animate__fadeIn': 'animate__animated animate__fadeIn': 'hidden'}`} ref={nodeRef}>

        <a href={content.mainLink} target="_blank" className={`new-project-title flex-center ${left? 'start-from-left': 'start-from-right'}`}>
          <h4>Featured Project</h4>
          <h3>{content.name}</h3>
        </a>

        <div className={`new-project-links flex-center ${left? 'start-from-left': 'start-from-right'}`}>
          <div className="proj-img-container">
            <img className="proj-img" src={imgURL} alt="Project Image" />
            <div className="img-shadow" />
          </div>
          <div className="link link-container flex-center">
            <a target="_blank" className="link flex-center full-border" link="Go to Project" href={content.mainLink}>
              <FaExternalLinkAlt />
              <span>Demo</span>
            </a>
            <a target="_blank" className="link flex-center full-border" link="Github Repo" href={content.gitLink}>
              <FiGithub />
              <span>Github</span>
            </a>
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
        <div className={`project-number full-border flex-center ${!left ? 'left-number': 'right-number'}`}>
          {number < 10 ? '0' + (number + 1) + '.' : (number + 1) + '.'}
        </div>
      </div>
    
    </div>
  )
}

export default NewProject
