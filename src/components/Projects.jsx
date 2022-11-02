import BgText from './BgText'
import Title from './Title'
import Project from './Project'
import '../styles/projects.css'
import Project2 from './Project2'
import Button from './Button'

const Projects = ({ deviceWidth }) => {
  const vals = [1, 2, 3, 4, 5, 6]

  return (
    <section id="projects" title="03. Projects" className="section projects">
      <Title number="03." left={true}>Projects</Title>
      
      <h2 className="projects-text">Some Things I've Built</h2>

      <Project deviceWidth={deviceWidth} />
      <Project deviceWidth={deviceWidth} left={true} />
      <Project deviceWidth={deviceWidth} />
      <Project deviceWidth={deviceWidth} left={true} />
      <Project deviceWidth={deviceWidth} />

      <div className="other-projects">
        <h2 className="projects-text">Other Noteworthy Projects</h2>
        <p className="archive-link">view the archive</p>

        <div className="other-projects-container">
          {vals.map( (val, i) => <Project2 key={i} delay={i} deviceWidth={deviceWidth} />)}
        </div>
        <Button width="150px">Show More</Button>
      </div>

      <BgText>Projects.</BgText>
    </section>
  )
}

export default Projects
