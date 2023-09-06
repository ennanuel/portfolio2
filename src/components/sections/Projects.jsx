import { useState } from 'react'
import { Button, Title, BgText } from '../decorations'
import { NewProject, Project2 } from '../project'
import '../../styles/projects/projects.css'


const Projects = ({ projects }) => {
  const [showProject, setShowProject] = useState(false)

  return (
    <section id="projects" title="03. Projects" className="section projects">
      <Title number="03." left={true}>Projects</Title>
      
      <h2 className="projects-text section-header">Some Projects I've Built</h2>
      {
        projects?.filter( project => project?.type === 'main' ).map((project, i) => <NewProject key={i} content={project} left={i % 2 === 0} number={i} />)
      }

      <div className="other-projects">
        <h2 className="projects-text section-header">Other Noteworthy Projects</h2>

        <div className="other-projects-container">
          {
            projects.filter( (project) => project?.type === 'secondary' ).map( (project, i) => <Project2 key={i} content={project} i={i} />  )
          }
        </div>
        {
          projects.filter( project => project?.type === 'secondary' ).length > 6 ?
          showProject ?
          <Button width="150px" onClick={() => setShowProject(false)}>Show Less</Button> :
          <Button width="150px" onClick={() => setShowProject(true)}>Show More</Button> :
          null
        }
      </div>

      <BgText>Projects.</BgText>
    </section>
  )
}

export default Projects
