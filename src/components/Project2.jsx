import React from 'react'
import { FaGithub, FaExternalLinkAlt, FaRegLightbulb } from 'react-icons/fa'


const Project2 = () => {
  return (
    <div className="other-project">
      <div className="project-top">
        <div className="file-img"><i><FaRegLightbulb /></i></div>
        <div className="links">
            <div className="link flex-center"><i><FaGithub /></i></div>
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
