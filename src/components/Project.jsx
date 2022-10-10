import React from 'react'

const Project = ({left}) => {
  return (
    <div className="project">
      <div className={`project-img full-border ${left? 'left-project': 'right-project'}`}></div>
      <div className={`project-info ${left? 'right-project flex-end': 'left-project flex-start'}`}>
        <div className="bb-10 project-title">
            <h3>Featured Project</h3>
            <h2>PHP Cart</h2>
        </div>
        <div className="bb-10 project-description">
        A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm. A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.
        </div>
        <div className={`bb-10 tech-used ${left? 'flex-end': 'flex-start'}`}>
            <div className='tech' style={left? {marginLeft: '20px'}: {marginRight: '10px'}}>PHP</div>
            <div className='tech' style={left? {marginLeft: '20px'}: {marginRight: '10px'}}>MySQL</div>
            <div className='tech' style={left? {marginLeft: '20px'}: {marginRight: '10px'}}>React</div>
            <div className='tech' style={left? {marginLeft: '20px'}: {marginRight: '10px'}}>JavaScript</div>
            <div className='tech' style={left? {marginLeft: '20px'}: {marginRight: '10px'}}>HTML/CSS</div>
        </div>
        <div className={`bb-10 links ${left? 'flex-end': 'flex-start'}`}>
            <div className='link social git-link full-border' style={left? {marginLeft: '15px'}: {marginRight: '15px'}}></div>
            <div className='link social project-link full-border' style={left? {marginLeft: '15px'}: {marginRight: '15px'}}></div>
        </div>
      </div>
    </div>
  )
}

export default Project
