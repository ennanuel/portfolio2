import BgText from './BgText'
import Title from './Title'
import '../styles/projects.css'
import Project2 from './Project2'
import Button from './Button'
import { useEffect } from 'react'
import NewProject from './NewProject'


const Projects = ({ deviceWidth }) => {
  const vals = [1, 2, 3, 4, 5, 6]

  useEffect(() => {
    const otherProjects = document.querySelectorAll('.other-project');

    [...otherProjects].forEach( (otherProject, i) => {
      otherProject.style.animationDelay = (i/20).toFixed(2) + 's'
    })
  }, [])

  return (
    <section id="projects" title="03. Projects" className="section projects">
      <Title number="03." left={true}>Projects</Title>
      
      <h2 className="projects-text">Some Things I've Built</h2>
      {[true, false, true].map((elem, i) => <NewProject left={elem} number={i} />)}

      <div className="other-projects">
        <h2 className="projects-text">Other Noteworthy Projects</h2>
        <p className="archive-link">view the archive</p>

        <div className="other-projects-container">
          {vals.map( (i) => <Project2 key={i}/>)}
        </div>
        <Button width="150px">Show More</Button>
      </div>

      <BgText>Projects.</BgText>
    </section>
  )
}

export default Projects
