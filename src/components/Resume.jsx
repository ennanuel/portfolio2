import BgText from "./BgText"
import Title from "./Title"
import '../styles/resume.css'
import { useEffect, useState, useRef } from "react"
import { useIsVisible } from 'react-is-visible'

const Resume = ({deviceWidth, showDynamicBg}) => {
  const [style, setStyle] = useState({transform: ''})
  const nodeRef = useRef()
  const isVisible = useIsVisible(nodeRef, {once: true})

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
    <section ref={nodeRef} id="resume" title="02. Skills" className="section resume flex-center">
      <Title number="02.">Skills</Title>
        
        <div className={`section-content flex-center ${isVisible? 'animate__animated animate__fadeInUp': 'hide-element'}`} style={{flexDirection: 'column', height: '100%'}}>

          <h2>Languages</h2>
          <ul>
            <li>Javascript</li>
            <li>PHP</li>
            <li>CSS</li>
            <li>HTML</li>
          </ul>

          <h2>Tech Used</h2>
          <ul></ul>
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

export default Resume
