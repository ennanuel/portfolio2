import { useState, useMemo } from 'react'
import { Button, Title, BgText } from '../decorations';
import { Project, Project2 } from '../project';
import { useContext } from 'react';
import { PageContext } from '../../PageContext';
import '../../styles/projects.scss';

const Projects = () => {
  const { projects } = useContext(PageContext);
  const [showMoreProject, setShowMoreProject] = useState(false);
  const { mainProjects, secondaryProjects } = useMemo(() => projects.reduce(
    (a, b) => {
      const key = b.is_main_project ? 'mainProjects' : 'secondaryProjects';
      const value = [...(a[key]), b];
      return { ...a, [key]: value };
    }, { mainProjects: [], secondaryProjects: [] }
  ), [projects])

  return (
    <section id="projects" title="03. Projects" className="section projects">
      <Title left={true}>Projects</Title>
      <h2 className="projects-text section-header">Some Projects I've Built</h2>
      {mainProjects.map((project, i) => <Project key={i} {...project} left={i % 2 === 0} num={i} />)}
      <div className="other-projects">
        <h2 className="projects-text section-header">Other Noteworthy Projects</h2>
        <div className="other-projects-container">
          {secondaryProjects.map((project, i) => <Project2 key={i} {...project} i={i} />)}
        </div>
        {
          secondaryProjects.length > 6 ?
            showMoreProject ?
              <Button width="150px" onClick={() => setShowMoreProject(false)}>Show Less</Button> :
              <Button width="150px" onClick={() => setShowMoreProject(true)}>Show More</Button> :
            null
        }
      </div>
      <BgText>Projects.</BgText>
    </section>
  )
}

export default Projects;
