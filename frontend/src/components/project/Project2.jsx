import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa'
import { FiCodepen, FiGithub } from 'react-icons/fi'
import { useRef } from 'react'
import { useIsVisible } from 'react-is-visible'
import { useMemo } from 'react'
import { AiOutlineProject } from 'react-icons/ai'


const Project2 = ({ code_link, demo_link, name, desc, stacks, i, is_github_link }) => {
  const projectRef = useRef();
  const isVisible = useIsVisible(projectRef, { once: true });
  const style = useMemo(() => ({ animationDelay: `${(i / 10).toFixed(2)}s` }), []);
  
  return (
    <div
      ref={projectRef}
      className={`other-project anim-duration ${isVisible ? 'animate__animated animate__fadeIn' : 'hide-element'}`}
      style={style}
    >
      <div className="top flex-row">
        <AiOutlineProject size={40} />
        <div className="links other-project-links link">
          {
            !is_github_link ?
                <a target="_blank" href={code_link} className="link code-link flex-center" link="Codepen">
                  <FiCodepen size={20} />
                </a> :
                <a target="_blank" href={code_link} className="link code-link flex-center" link="Github Repo">
                  <FiGithub size={20} />
                </a>
          }
          <a target="_blank" href={demo_link} className="link code-link flex-center" link="Demo Link">
            <FaExternalLinkAlt />
          </a>
        </div>
      </div>
      <div className='project-info'>
        <a href={demo_link} target="_blank" className='relative'>{name}</a>
        <p className="desc poppins">{desc}</p>
      </div>
      <div className='tech-used'>
        {
          stacks.map(tech => <div className="tech poppins full-border flex-center">{tech}</div>)
        }
      </div>
    </div>
  )
};

export default Project2
