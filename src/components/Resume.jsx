import BgText from "./BgText"
import Button from "./Button"
import Title from "./Title"
import '../styles/resume.css'

const Resume = () => {
  return (
    <section className="section resume flex-center">
      <Title number="02.">Resume</Title>
      <div className="section-content flex-center" style={{flexDirection: 'column', height: '100%'}}>
        <h2>Checkout My Resume Below!</h2>
        <Button width="300px">Download Resume</Button>
      </div>
      <BgText left={true}>Resume.</BgText>
    </section>
  )
}

export default Resume
