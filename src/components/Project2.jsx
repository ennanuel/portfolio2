import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb } from '@fortawesome/free-regular-svg-icons'
import { faExternalLink, faCodeBranch } from '@fortawesome/free-solid-svg-icons'


const Project2 = () => {
  return (
    <div className="other-project">
      <div className="project-top">
        <div className="file-img"><i><FontAwesomeIcon icon={faLightbulb} /></i></div>
        <div className="links">
            <div className="link flex-center"><i><FontAwesomeIcon icon={faCodeBranch} /></i></div>
            <div className="link flex-center"><i><FontAwesomeIcon icon={faExternalLink} /></i></div>
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
