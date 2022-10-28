import BgText from "./BgText"
import BoxDecor from "./BoxDecor"
import Button from "./Button"
import Highlight from "./Highlight"
import Taskbar from "./Taskbar"
import '../styles/introduction.css'

const Introduction = () => {
  return (
    <div id="intro" className="intro-container flex-center section" title="Introduction">
      <section className="introduction full-border">
        <Taskbar />
        <div className="title full-border intro-title">
          <span>Hi, my name is</span>
        </div>
        <article className="info">
          <div className="about">
            <h2><span>Ezema Emmanuel.</span><br />I build stuff for the web.</h2>
            <p className="full-border">
              <BoxDecor />
              I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at <Highlight>Upstatement</Highlight>.
            </p>
          </div>
          <div className="lets-connect">
            <Button width="100%">Let's Connect</Button>
          </div>
        </article>
        <BgText r="10px" b="-10px">Intro.</BgText>
      </section>
    </div>
  )
}

export default Introduction
