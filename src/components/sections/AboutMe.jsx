import { BgText, Title, Button, Button2 } from '../decorations'
import { useRef } from 'react'
import { useIsVisible } from 'react-is-visible'
import { BsDownload } from "react-icons/bs"
import Pdf from '../../cv/CV.pdf'
import image from '../assets/images/site/profile-img2.jpg'
import '../../styles/aboutme/aboutme.css'
import { aboutMe } from '../assets/data'

const AboutMe = () => {
  const downloadCV = () => {
    window.open(Pdf)
  }
  const nodeRef = useRef()
  const isVisible = useIsVisible(nodeRef, {once: true})
 
  return (
          <section ref={nodeRef} id="about" title="01. About Me" className="about-me section flex-center">
            <Title number="01." left={true}>About Me</Title>
                <article className={`me anim-duration`}>
                      
                  <h2 className={`bio-tile anim-duration ${isVisible? 'animate_animated animate__fadeIn': 'hide-element'}`}>Short Biography</h2>
                  <div className="bio">
                      
                    <div className={`bio-text ${isVisible ? 'animate__animated animate__fadeInUp': 'hide-element'}`}>
                      {
                        aboutMe.map( (elem, i) => (
                          <p key={i}>{elem}</p>
                        ))
                      }
                      {
                        window.innerWidth > 720 && 
                        <div className="navigate_btns">
                          <Button onClick={downloadCV} width="300px">Download Resume<br /><b><i><BsDownload /></i></b></Button>
                          <Button2 onClick={downloadCV} width="300px">My Projects<br /></Button2>
                        </div>
                      }
                    </div>
            
                    <div className={`second  ${isVisible ? 'animate__animated animate__fadeInUp': 'hide-element'}`}>
                      <div className="picture flex-center"><img src={image} /><div className="profile-overlay" /></div>
                    </div>

                    {
                      window.innerWidth <= 720 && <Button onClick={downloadCV} width="300px">Download Resume<br /><b><i><BsDownload /></i></b></Button>
                    }
                  </div>
                    
                </article>
            <BgText>About.</BgText>
          </section>
  )
}

export default AboutMe
