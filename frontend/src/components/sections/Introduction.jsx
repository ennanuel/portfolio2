import { BgText, BoxDecor, Button, Highlight, Taskbar } from '../decorations';
import { useRef } from 'react';
import { useIsVisible } from 'react-is-visible';
import '../../styles/introduction/introduction.css';


const Introduction = () => {
  const nodeRef = useRef();
  const isVisible = useIsVisible(nodeRef, { once: true });
  function contactMe() { location.href = '#contact' };
  return (
    <div ref={nodeRef} id="intro" className="intro-container flex-center section" title="Introduction">
      <section className={`introduction full-border ${!isVisible && 'hidden'}`}>
        <Taskbar />
        <h1 className="title delay full-border intro-title anim-duration animate__animated animate__fadeInDown">
          <span>Hi, my name is</span>
        </h1>
        <article className="info animate__animated animate__fadeIn">
          <div className="about">
            <h2 className="anim-duration delay animate__animated animate__fadeInDown">
              <span>Ezema Emmanuel.</span>
              <br />I am a Web Developer.</h2>
            <p className="full-border anim-duration delay animate__animated animate__fadeInDown poppins">
              <BoxDecor />
              I’m a Web Developer specializing in building (and occasionally designing) exceptional web applications and other web related projects. If you'd like to know more about me please feel free to <Highlight>contact me</Highlight>, I'm available to start work immediately.
            </p>
          </div>
          <div className="lets-connect anim-duration delay animate__animated animate__fadeInDown">
            <Button onClick={contactMe} width="100%">Contact Me</Button>
          </div>
        </article>
        <BgText r="10px" b="-10px">Intro.</BgText>
      </section>
    </div>
  )
}

export default Introduction
