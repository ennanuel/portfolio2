import BgText from './BgText'
import Title from './Title'
import Project from './Project'
import '../styles/projects.css'

const Projects = () => {
  return (
    <section className="section projects">
      <Title number="03." left={true}>Projects</Title>
      
      <h2 className="projects-text">Some Things I've Built</h2>

      <Project />
      <Project left={true} />
      <Project />
      <Project left={true} />
      <Project />

      <BgText>Projects.</BgText>
    </section>
  )
}

export default Projects
