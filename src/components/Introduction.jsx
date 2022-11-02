import BgText from "./BgText"
import BoxDecor from "./BoxDecor"
import Button from "./Button"
import Highlight from "./Highlight"
import Taskbar from "./Taskbar" 
import { useRef } from 'react'
import { useIsVisible } from 'react-is-visible'
import '../styles/introduction.css'


const Introduction = ({ setDelay }) => {
  const nodeRef = useRef()
  const isVisible = useIsVisible(nodeRef, {once: true})

  return (
    <div ref={nodeRef} id="intro" className="intro-container flex-center section" title="Introduction">
      <section className="introduction full-border">
        <Taskbar setDelay={setDelay} />
        <div className={`title full-border intro-title ${isVisible? 'animate__animated animate__fadeInDown': 'hidden'}`} style={setDelay()}>
          <span>Hi, my name is</span>
        </div>
        <article className="info">
          <div className="about">
            <h2 className={`${isVisible? 'animate__animated animate__fadeInDown': 'hidden'}`} style={setDelay()}><span>Ezema Emmanuel.</span><br />I build stuff for the web.</h2>
            <p className={`full-border ${isVisible? 'animate__animated animate__fadeInDown': 'hidden'}`} style={setDelay()}>
              <BoxDecor />
              I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at <Highlight>Upstatement</Highlight>.
            </p>
          </div>
          <div className={`lets-connect ${isVisible? 'animate__animated animate__fadeInDown': 'hidden'}`} style={setDelay()}>
            <Button width="100%">Let's Connect</Button>
          </div>
        </article>
        <BgText r="10px" b="-10px">Intro.</BgText>
      </section>
    </div>
  )
}

export default Introduction
