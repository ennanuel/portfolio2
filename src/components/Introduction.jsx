import BgText from "./BgText"
import BoxDecor from "./BoxDecor"
import Button from "./Button"
import Highlight from "./Highlight"
import Taskbar from "./Taskbar" 
import { useRef } from 'react'
import { useIsVisible } from 'react-is-visible'
import '../styles/introduction.css'
import { useEffect } from "react"


const Introduction = ({setState}) => {
  const nodeRef = useRef()
  const isVisible = useIsVisible(nodeRef, {once: true})

  const handleClick = () => {
    location.href = '#contact'
  }

  useEffect(() => {
    setState(prev => ({...prev, isVisible}))
  }, [isVisible])

  return (
    <div ref={nodeRef} id="intro" className="intro-container flex-center section" title="Introduction">
      <section className="introduction full-border">
        <Taskbar isVisible={isVisible} />
        <div className={`title delay full-border intro-title anim-duration ${isVisible? 'animate__animated animate__fadeInDown': 'hidden'}`}>
          <span>Hi, my name is</span>
        </div>
        <article className="info">
          <div className="about">
            <h2 className={`anim-duration delay ${isVisible? 'animate__animated animate__fadeInDown': 'hidden'}`}>
              <span>Ezema Emmanuel.</span>
              <br />I am a Web Developer.</h2>
            <p className={`full-border anim-duration delay ${isVisible? 'animate__animated animate__fadeInDown': 'hidden'}`}>
              <BoxDecor />
              I’m a Web Developer specializing in building (and occasionally designing) exceptional web applications and other web related projects. If you'd like to know more about me please feel free to <Highlight>contact me</Highlight>, I'm available to start work immediately.
            </p>
          </div>
          <div className={`lets-connect anim-duration delay ${isVisible? 'animate__animated animate__fadeInDown': 'hidden'}`}>
            <Button onClick={handleClick} width="100%">Hire Me</Button>
          </div>
        </article>
        <BgText r="10px" b="-10px">Intro.</BgText>
      </section>
    </div>
  )
}

export default Introduction
