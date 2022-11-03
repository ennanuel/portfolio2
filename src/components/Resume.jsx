import BgText from "./BgText"
import Button from "./Button"
import Title from "./Title"
import '../styles/resume.css'
import { useEffect, useState, useRef } from "react"
import { useIsVisible } from 'react-is-visible'
import { BsDownload } from 'react-icons/bs'

const Resume = ({deviceWidth}) => {
  const [style, setStyle] = useState({transform: ''})
  const nodeRef = useRef()
  const isVisible = useIsVisible(nodeRef, {once: true})
  const [isSmiling, setIsSmiling] = useState(false)

  const handleHover = () => {
    setIsSmiling(true)
  }

  const handleMouseOut = () => {
    setIsSmiling(false)
  }

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
    <section ref={nodeRef} id="resume" title="02. Resume" className="section resume flex-center">
      <Title number="02.">Resume</Title>
        
        <div className={`section-content flex-center ${isVisible? 'animate__animated animate__fadeInUp': 'hide-element'}`} style={{flexDirection: 'column', height: '100%'}}>

        <h2>Checkout My Resume Below!</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste in veritatis pariatur voluptatibus suscipit possimus assumenda. Dolore impedi</p>
        <Button onMouseOver={handleHover} onMouseOut={handleMouseOut} width="300px">Download Resume<br /><b><i><BsDownload /></i></b></Button>

        </div>

        {
          deviceWidth > 770 &&
          <div className={`face ${isVisible? 'animate__animated animate__fadeIn': 'hide-element'} ${isSmiling? 'show-emotion': ''}`}>

            <div className="eyes">
              <div className="eye">
                <div className="pupil" style={style} />
              </div>

              <div className="glass-line" />

              <div className="eye">
                <div className="pupil" style={style} />
              </div>
              </div>

              <div className="nose"></div>

            <div className='mouth flex-center'></div>

          </div>
        }
      
      <BgText left={true}>Resume.</BgText>
    </section>
  )
}

export default Resume
