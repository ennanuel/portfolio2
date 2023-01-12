import BgText from "./BgText"
import Highlight from "./Highlight"
import Title from "./Title"
import Button from "./Button"
import { useRef } from 'react'
import { useIsVisible } from 'react-is-visible'
import { BsDownload } from "react-icons/bs"
import Pdf from '../cv/CV.pdf'
import image from './assets/images/site/Screenshot_20221106-133620-PhotoRoom.png'
import '../styles/aboutme.css'

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
                      <p>
                        Hello! My name is Emmanuel I'm very passionate about programming and creating web related products. This interest of mine dates back to 2020 when I was introduced to <Highlight>Computer Programming</Highlight> as a  course in college, turns out I really enjoyed solving challenges using code I wrote! Fast-forward to today and although I've not had the priviledge to program professionally, I still have done some decent <Highlight>projects</Highlight> that have given me profound knowledge in most programming language!
                      </p>
                      <p>
                        My main goal these days is to land a web development job so I can be able to contribute my skills and what I've learnt so far to the growth of a corporation.
                      </p>
                      <p>My resume is available below.</p>
                      <Button onClick={downloadCV} width="300px">Download Resume<br /><b><i><BsDownload /></i></b></Button>
                    </div>
            
                    <div className={`second  ${isVisible ? 'animate__animated animate__fadeInUp': 'hide-element'}`}>
                      <div className="picture flex-center"><img src={image} /><div className="profile-overlay" /></div>
                    </div>
            
                  </div>
                    
                </article>
            <BgText>About.</BgText>
          </section>
  )
}

export default AboutMe
