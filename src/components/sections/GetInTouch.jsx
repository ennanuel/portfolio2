import { Button, Title } from '../decorations'
import { useRef, useState } from 'react'
import { useIsVisible } from 'react-is-visible'
import '../../styles/getintouch/getintouch.css'
import { ContactForm } from '../forms'

const GetInTouch = () => {
  const nodeRef = useRef()
  const isVisible = useIsVisible(nodeRef, {once: true})
  const [showForm, setShowForm] = useState(false);

  const handleClick = () => {
    // setShowForm(prev => !prev)
    location.href = 'http://emmanuelezema6@gmail.com'
  }

  return (
    <section ref={nodeRef} id="contact" title="04. Contact Me" className="section flex-center whats-next">
      <Title number="04.">What's Next?</Title>
      <div className={`contact anim-duration ${isVisible? 'animate__animated animate__fadeInUp': 'hide-element'}`}>
        <h2 className="section-header">Get In Touch</h2>
        <p>I’m current open for hire. Whether you have a question or just want to say hi, my inbox is always open. I'm looking forward to hearing from you!</p>

        {showForm ? <ContactForm />: <Button onClick={handleClick} width="200px">Contact Me</Button>}
      </div>
    </section>
  )
}

export default GetInTouch