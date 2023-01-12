import BgText from './BgText'
import Title from './Title'
import '../styles/projects.css'
import Project2 from './Project2'
import Button from './Button'
import { useEffect } from 'react'
import NewProject from './NewProject'

let left = false;
const Projects = ({ projects }) => {

  useEffect(() => {
    const otherProjects = document.querySelectorAll('.other-project');
    console.log(projects);

    [...otherProjects].forEach( (otherProject, i) => {
      otherProject.style.animationDelay = (i/20).toFixed(2) + 's'
    })
  }, [])

  return (
    <section id="projects" title="03. Projects" className="section projects">
      <Title number="03." left={true}>Projects</Title>
      
      <h2 className="projects-text section-header">Some Projects I've Built</h2>
      {
        projects.filter( project => project.type === 'main' ).map((project, i) => {
          left = !left
          return <NewProject key={i} content={project} left={left} number={i} />
        })
      }

      <div className="other-projects">
        <h2 className="projects-text section-header">Other Noteworthy Projects</h2>
        <p className="archive-link">view the archive</p>

        <div className="other-projects-container">
          {
            projects.filter( project => project.type === 'secondary' ).map( (project, i) => <Project2 key={i} content={project} />  )
          }
        </div>
        <Button width="150px">Show More</Button>
      </div>

      <BgText>Projects.</BgText>
    </section>
  )
}

export default Projects
