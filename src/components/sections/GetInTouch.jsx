import { Title } from '../decorations'
import { useRef } from 'react'
import { useIsVisible } from 'react-is-visible'
import ContactForm from '../forms/ContactForm'
import '../../styles/getintouch.scss'

const GetInTouch = () => {
  const nodeRef = useRef();
  const isVisible = useIsVisible(nodeRef, { once: true });

  return (
    <section ref={nodeRef} id="contact" title="04. Contact Me" className="section whats-next">
      <Title>What's Next?</Title>
      <div className={`contact flex-center anim-duration ${isVisible? 'animate__animated animate_fadeIn': 'hide-element'}`}>
        <div className="left">
          <h2 className="section-header">Get In Touch</h2>
          <p className='poppins'>
            I’m open for a job. Whether you have a question or just want to say hi, my inbox is always open. I'm looking forward to hearing from you!
          </p>
        </div>
        <ContactForm />
      </div>
    </section>
  )
}

export default GetInTouch