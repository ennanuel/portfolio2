import React from 'react'
import Button from './Button'
import Title from './Title'
import '../styles/getintouch.css'

const GetInTouch = () => {
  return (
    <section id="contact" title="04. Contact Me" className="section flex-center whats-next">
      <Title number="04.">What's Next?</Title>
      <div className="contact">
        <h2>Get In Touch</h2>
        <p>Although I’m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!</p>
        <Button width="200px">Say Hello</Button>
      </div>
    </section>
  )
}

export default GetInTouch