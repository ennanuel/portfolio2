import { useRef } from 'react';
import { useIsVisible } from 'react-is-visible';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { FiGithub } from 'react-icons/fi';
import { useMemo } from 'react';

const Project = ({ left, num, name, description, stack, image, mainLink, gitLink }) => {
  const projectRef = useRef();
  const isVisible = useIsVisible(projectRef, { once: true });
  const projectNumber = useMemo(() => num < 10 ? `0${num + 1}.` : `${num + 1}.`, []);
  const imgSrc = useMemo(() => {
    return new URL(`../../assets/images/${image}`, import.meta.url).href;
  }, []);

  return (
    <article className="project-container">
      <div
        outertitle={name}
        className={`new-project full-border left-new-project ${isVisible ? left ? 'animate__animated animate__fadeIn' : 'animate__animated animate__fadeIn' : 'hidden'}`}
        ref={projectRef}
      >
        <a href={mainLink} target="_blank" className={`new-project-title flex-center ${left? 'start-from-left': 'start-from-right'}`}>
          <h4>Featured Project</h4>
          <h3>{name}</h3>
        </a>
        <div className={`new-project-links flex-center ${left? 'start-from-left': 'start-from-right'}`}>
          <div className="proj-img-container">
            <img className="proj-img" src={imgSrc} alt="Project Image" />
            <div className="img-shadow" />
          </div>
          <div className="link link-container flex-center">
            <a target="_blank" className="link flex-center full-border" link="Go to Project" href={mainLink}>
              <FaExternalLinkAlt />
              <span>Demo</span>
            </a>
            <a target="_blank" className="link flex-center full-border" link="Github Repo" href={gitLink}>
              <FiGithub />
              <span>Github</span>
            </a>
          </div>
        </div>
        <div className={`new-project-text flex-center ${left? 'start-from-right': 'start-from-left'}`}>
          <p>{description}</p>
          <ul className={`bb-10 tech-used`}>
            {
              stack.map(tech => <li className="tech">{tech}</li>)
            }
          </ul>
        </div>
        <img src={imgSrc} className="new-project-bg-img" />
        <div className={`project-number full-border flex-center ${!left ? 'left-number': 'right-number'}`}>
          {projectNumber}
        </div>
      </div>
    </article>
  )
}

export default Project
