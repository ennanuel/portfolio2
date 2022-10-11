import BgText from "./BgText"
import Highlight from "./Highlight"
import Title from "./Title"
import '../styles/aboutme.css'

const AboutMe = () => {
  return (
    <section className="about-me section">
      <Title number="01." left={true}>About Me</Title>
      <article className="me">
        <div className="bio">
          <p><div className="second">
          <div className="picture flex-center"><span></span></div>
        </div>Hello! My name is Emmanuel and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!
          Fast-forward to today, and I’ve had the privilege of working at <Highlight>an advertising agency, a start-up, a huge corporation</Highlight>, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences at <Highlight>Upstatement</Highlight> for a variety of clients.
          I also recently <Highlight>launched a course</Highlight> that covers everything you need to build a web app with the Spotify API using Node & React.
          Here are a few technologies I’ve been working with recently:</p>
          <ul className="skills">
            <li>JavaScript</li>
            <li>PHP</li>
            <li>MySQL</li>
            <li>SASS</li>
            <li>ReactJS</li>
            <li>WordPress</li>
          </ul>
        </div>
        
      </article>
      <BgText>About Me.</BgText>
    </section>
  )
}

export default AboutMe
