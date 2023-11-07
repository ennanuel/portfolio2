import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa'
import { FiCodepen, FiGithub } from 'react-icons/fi'
import { useRef } from 'react'
import { useIsVisible } from 'react-is-visible'
import { useMemo } from 'react'
import { AiOutlineProject } from 'react-icons/ai'


const Project2 = ({ codepenLink, gitLink, mainLink, name, description, stack, i }) => {
  const projectRef = useRef();
  const isVisible = useIsVisible(projectRef, { once: true });
  const style = useMemo(() => ({ animationDelay: `${(i / 10).toFixed(2)}s` }), []);

  return (
    <div
      ref={projectRef}
      className={`other-project anim-duration ${isVisible ? 'animate__animated animate__fadeIn' : 'hide-element'}`}
      style={style}
    >
      <div className="project-top">
        <i className='file-img'><AiOutlineProject /></i>
        <div className="links other-project-links link">
          {
            codepenLink ?
              <div className="link project2-link flex-center" link="Codepen">
                <a target="_blank" href={codepenLink}><FiCodepen /></a>
              </div> :
              <div className="link project2-link flex-center" link="Github Repo">
                <a target="_blank" href={gitLink}><FiGithub /></a>
              </div>
          }
          <div className="link project2-link flex-center" link="Main Link"><a target="_blank" href={mainLink}><FaExternalLinkAlt /></a></div>
        </div>
      </div>
      <div className='project-info'>
        <a href={mainLink} target="_blank">{name}</a>
        <p className="other-project-description ">{description}</p>
      </div>
      <div className='tech-used'>
        {
          stack.map(tech => <div className="tech full-border flex-center">{tech}</div>)
        }
      </div>
    </div>
  )
};

export default Project2
