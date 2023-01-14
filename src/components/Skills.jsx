import BgText from "./BgText"
import Title from "./Title"
import '../styles/resume.css'
import { useEffect, useState, useRef } from "react"
import { useIsVisible } from 'react-is-visible'
import { DiNodejs, DiPhp, DiReact, DiSass, DiHtml5, DiCss3, DiJavascript, DiGit } from 'react-icons/di'
import { SiExpress, SiGraphql, SiTailwindcss, SiMysql, SiFirebase, SiMongodb } from 'react-icons/si'

const Skills = ({deviceWidth, showDynamicBg}) => {
  const [style, setStyle] = useState({transform: ''})
  const nodeRef = useRef()
  const isVisible = useIsVisible(nodeRef, {once: true})
  const skills = [...document.getElementsByClassName('skill')]

  skills.forEach( (elem, i) => {
    elem.style.animationDelay = (3+i)/10 + 's'
  } )

  useEffect(() => {

   const handleMouseMove0 = (e) => {

    if(deviceWidth <= 770) return;

    const eye = document.querySelector('.eye').offsetWidth
    const pupil = document.querySelector('.pupil').offsetWidth

    const x = (e.clientX * ((eye - pupil) / window.innerWidth))
    const y = (e.clientY * ((eye - pupil) / window.innerHeight))

    setStyle({transform: `translate(${x}px, ${y}px)`})
   }

   window.addEventListener('mousemove', handleMouseMove0)

   return () => window.removeEventListener('mousemove', handleMouseMove0)

  }, [deviceWidth])

  return (
    <section ref={nodeRef} id="skills" title="02. Skills" className="section skills flex-center">
      <Title number="02.">Skills</Title>
        
        <div className={`section-content ${isVisible? 'animate__animated animate__fadeIn': 'hide-element'}`} style={{flexDirection: 'column', height: '100%'}}>

          <h2 className="section-header">Skills & Technologies</h2>


          <div className="skill-container">
            <div className={`skill link full-border ${isVisible && 'animate__animated animate__fadeInUp'}`}>  
              <h2>Backend</h2>
              <div className="line" />
              <ul>
                <li><DiNodejs /><span>NodeJS</span></li>
                <li><DiPhp /><span>PHP</span></li>
                <li><SiExpress /><span>Express</span></li>
                {/* <li><SiGraphql /><span>GraphQL</span></li> */}
              </ul>
            </div>

            <div className={`skill link full-border ${isVisible && 'animate__animated animate__fadeInUp'}`}>
              <h2>Frontend</h2>
              <div className="line" />
              <ul>
                <li><DiReact /><span>ReactJS</span></li>
                <li><DiSass /><span>SASS</span></li>
                <li><SiTailwindcss /><span>TailWind</span></li>
                <li><DiJavascript /><span>JavaScript</span></li>
                <li><DiCss3 /><span>CSS</span></li>
                <li><DiHtml5 /><span>HTML</span></li>
              </ul>
            </div>

            <div className={`skill link full-border ${isVisible && 'animate__animated animate__fadeInUp'}`}>
              <h2>Database</h2>
              <div className="line" />
              <ul>
                <li><SiMysql /><span>MySQL</span></li>
                <li><SiFirebase /><span>Firebase</span></li>
                <li><SiMongodb /><span>MongoDB</span></li>
              </ul>
            </div>

            <div className={`skill link full-border ${isVisible && 'animate__animated animate__fadeInUp'}`}>
              <h2>Version Control</h2>
              <div className="line" />
              <ul>
                <li><DiGit /><span>Git</span></li>
              </ul>
            </div>
          </div>

        </div>

        {
          deviceWidth > 770 &&
          <div className={`face ${isVisible? 'animate__animated animate__fadeIn': 'hide-element'}`}>

            <div className="eyes flex-center">
              <div className="eye">
                <div className="pupil" style={style} />
              </div>

              <div className="eye">
                <div className="pupil" style={style} />
              </div>
            </div>

          </div>
        }
      
      <BgText left={true}>Skills.</BgText>
    </section>
  )
}

export default Skills
