import BgText from "./BgText"
import Button from "./Button"
import Title from "./Title"
import '../styles/resume.css'
import { useEffect, useState } from "react"

const Resume = ({deviceWidth}) => {
  const [style, setStyle] = useState({transform: ''})

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
    <section id="resume" title="02. Resume" className="section resume flex-center">
      <Title number="02.">Resume</Title>
      
      <div className="section-content flex-center" style={{flexDirection: 'column', height: '100%'}}>

        <h2>Checkout My Resume Below!</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste in veritatis pariatur voluptatibus suscipit possimus assumenda. Dolore impedi</p>
        <Button width="300px">Download Resume</Button>

      </div>


      {
        deviceWidth > 770 &&
        <div className="face">

          <div className="eyes">
            <div className="eye">
              <div className="pupil" style={style}></div>
            </div>
            <div className="glass-line" />
            <div className="eye">
              <div className="pupil" style={style}></div>
            </div>
            </div>

            <div className="nose"></div>

          <div className="mouth"></div>

        </div>
      }

      
      <BgText left={true}>Resume.</BgText>
    </section>
  )
}

export default Resume
