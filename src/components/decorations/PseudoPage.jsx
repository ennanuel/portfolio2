const PseudoPage = ({shouldShow, y}) => {
  return (
    <div className={`pseudo-page ${shouldShow && 'show-pseudo-page'}`} style={shouldShow ? {transform: `translate(0, -${y * 100}vh)`}: {}}>

        <section className="fake-pages" id="intro0">
            Introduction
        </section>
        <section className="fake-pages" id="about0">
            About Me
        </section>
        <section className="fake-pages" id="resume0">
            Skills
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
