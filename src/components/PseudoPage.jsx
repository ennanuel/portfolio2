import image1 from '../assets/images/pexels-lukas-296115.jpg'
import image2 from '../assets/images/44068430.jpg'

const PseudoPage = ({shouldShow}) => {
  return (
    <div className={`pseudo-page ${shouldShow && 'show-pseudo-page'}`}>

        <section className="fake-pages" id="intro0">
            Introduction
        </section>
        <section className="fake-pages" id="about0">
            About Me
        </section>
        <section className="fake-pages" id="resume0">
            Resume
        </section>
        <section className="fake-pages" id="projects0">
            Projects
        </section>
        <section className="fake-pages" id="contact0">
            Get In Touch
        </section>
      
    </div>
  )
}

export default PseudoPage
