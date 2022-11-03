import React from 'react'
import { FaExternalLinkAlt, FaRegLightbulb } from 'react-icons/fa'
import { FiGithub } from 'react-icons/fi'
import { useRef } from 'react'
import { useIsVisible } from 'react-is-visible'


const Project2 = () => {
  const nodeRef = useRef()
  const isVisible = useIsVisible(nodeRef, {once: true})

  return (
    <div ref={nodeRef} className={`other-project anim-duration ${isVisible? 'animate__animated animate__fadeInUp': 'hide-element'}`}>
      <div className="project-top">
        <div className="file-img"><i><FaRegLightbulb /></i></div>
        <div className="links">
            <div className="link flex-center"><i><FiGithub /></i></div>
            <div className="link flex-center"><i><FaExternalLinkAlt /></i></div>
        </div>
      </div>
      <div className='project-info'>
        <h2>Time to Have More Fun</h2>
        <p className="other-project-description ">A single web app for helping me choose where to travel, built with Next.js, Firebase, and Tailwind CSS</p>
      </div>
      <div className='tech-used'>
        <div className="tech">Next.js</div>
        <div className="tech">Firebase</div>
        <div className="tech">Tailwind</div>
        <div className="tech">SASS</div>
      </div>
    </div>
  )
}

export default Project2
