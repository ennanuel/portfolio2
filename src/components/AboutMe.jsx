import BgText from "./BgText"
import Highlight from "./Highlight"
import Title from "./Title"
import { useRef } from 'react'
import { useIsVisible } from 'react-is-visible'
import '../styles/aboutme.css'

const AboutMe = () => {

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
                        Hello! My name is Emmanuel I'm very passionate about programming and creating web related products. This interest of mine dates back to 2020 when I was introduced to <Highlight>Computer Programming</Highlight> as a  course in the university, turns out I really enjoyed solving challenges using code I wrote! Fast-forward to today and although I've not had the priviledge to program professionally, I still have done some decent projects that have given me <Highlight>profound knowledge in most programming language</Highlight>!
                      </p>
                      <p>
                        My main goal these days is to land a web development job so I can be able to contribute my expertise what I've learnt so far to the growth of a corporation.
                      </p>
                      <p>Here are a few technologies I’ve been working with recently:</p>
                      <ul className="skills">
                        <li>JavaScript</li>
                        <li>PHP</li>
                        <li>TypeScript</li>
                        <li>MySQL</li>
                        <li>ReactJS</li>
                        <li>NodeJS</li>
                        <li>SASS</li>
                        <li>GraphQL</li>
                        <li>Tailwind</li>
                        <li>WordPress</li>
                        <li>Gulp</li>
                        <li>Git</li>
                      </ul>
                    </div>
            
                    <div className={`second  ${isVisible ? 'animate__animated animate__fadeInUp': 'hide-element'}`}>
                      <div className="picture flex-center"><span></span></div>
                    </div>
            
                  </div>
                    
                </article>
            <BgText>About Me.</BgText>
          </section>
  )
}

export default AboutMe
