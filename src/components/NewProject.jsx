import { useRef } from 'react'
import { useIsVisible } from 'react-is-visible'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { FiGithub } from 'react-icons/fi'

const NewProject = ({left, number, content}) => {
  const nodeRef = useRef()
  const isVisible = useIsVisible(nodeRef, {once: true})

  return (
    <div className={`new-project left-new-project ${isVisible? left? 'animate__animated animate__fadeInLeft': 'animate__animated animate__fadeInRight': 'hidden'}`} ref={nodeRef}>
      <div className={`new-project-title flex-center ${left? 'start-from-left': 'start-from-right'}`}>
        <h4>Featured Project</h4>
        <h3>{content.name}</h3>
      </div>
      <div className={`new-project-links flex-center ${left? 'start-from-left': 'start-from-right'}`}>
        <img src={require('../assets/images/5f974615c915040f6f578f80_5aZKFLu5gpGWkCkFgG2CE_wcKQd6eS7VffrsOd42B025nPmyLVWM_fqRYZD7ROuMKf75Fp2da-mf3usrlPsUgqjfaFfN05JZh_75PTfaSLN76RT4QubsDiHypeE5t9omBN2QMlBo.png')} alt="Project Image" />
        <div className="link link-container flex-center">
          <a className="link flex-center full-border" link="Go to Project" href={content.mainLink}><FaExternalLinkAlt /></a>
          <a className="link flex-center full-border" link="Github Repo" href={content.gitLink}><FiGithub /></a>
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
      <img src={content.image} className="new-project-bg-img" />
      <div className={`project-number full-border flex-center ${left? 'start-from-right': 'start-from-left'}`}>
        {number < 10 ? '0' + (number + 1) + '.' : (number + 1) + '.'}
      </div>
    </div>
  )
}

export default NewProject
