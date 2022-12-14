import React from 'react'
import Button from './Button'
import Title from './Title'
import { useRef, useState } from 'react'
import { useIsVisible } from 'react-is-visible'
import '../styles/getintouch.css'
import ContactForm from './ContactForm'

const GetInTouch = () => {
  const nodeRef = useRef()
  const isVisible = useIsVisible(nodeRef, {once: true})
  const [showForm, setShowForm] = useState(false);

  const handleClick = () => {
    setShowForm(prev => !prev)
  }

  return (
    <section ref={nodeRef} id="contact" title="04. Contact Me" className="section flex-center whats-next">
      <Title number="04.">What's Next?</Title>
      <div className={`contact anim-duration ${isVisible? 'animate__animated animate__fadeInUp': 'hide-element'}`}>
        <h2 className="section-header">Get In Touch</h2>
        <p>I’m currently looking for new opportunities. Whether you have a question or just want to say hi, my inbox is always open. I'm looking forward to hearing from you!</p>

        {showForm ? <ContactForm />: <Button onClick={handleClick} width="200px">Say Hello</Button>}
      </div>
    </section>
  )
}

export default GetInTouch