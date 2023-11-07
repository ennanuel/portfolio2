import { Title } from '../decorations'
import { useRef } from 'react'
import { useIsVisible } from 'react-is-visible'
import { ContactForm } from '../forms'
import '../../styles/getintouch/getintouch.css'

const GetInTouch = () => {
  const nodeRef = useRef();
  const isVisible = useIsVisible(nodeRef, { once: true });

  return (
    <section ref={nodeRef} id="contact" title="04. Contact Me" className="section flex-center whats-next">
      <Title number="04.">What's Next?</Title>
      <div className={`contact anim-duration ${isVisible? 'animate__animated animate__fadeInUp': 'hide-element'}`}>
        <h2 className="section-header">Get In Touch</h2>
        <p className='poppins'>
          I’m open for a job. Whether you have a question or just want to say hi, my inbox is always open. I'm looking forward to hearing from you!
        </p>
        <ContactForm />
      </div>
    </section>
  )
}

export default GetInTouch