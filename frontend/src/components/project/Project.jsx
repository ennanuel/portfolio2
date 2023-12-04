import { useRef, useState } from 'react';
import { useIsVisible } from 'react-is-visible';
import { FiCodepen, FiExternalLink, FiGithub } from 'react-icons/fi';
import { useMemo } from 'react';

const MAX_STRING_LENGTH = 400;

const Project = ({ left, num, name, desc, stacks, images, demo_link, code_link, is_github_link }) => {
  const projectRef = useRef(null);
  const isVisible = useIsVisible(projectRef, { once: true });
  const [showAllText, setShowAllText] = useState(false);
  const projectNumber = useMemo(() => num < 10 ? `0${num + 1}` : `${num + 1}`, []);
  const projectDescription = useMemo(() => showAllText || desc.length < MAX_STRING_LENGTH ? desc : `${desc.substring(0, MAX_STRING_LENGTH)}...`, [showAllText, desc])

  return (
    <article ref={projectRef} className={`main-project flex-center ${left && 'left'} ${isVisible && 'animate__animated animate__fadeIn'}`}>
      <div className="images relative">
        <div className="container">
          { images.slice(0, 1).map((image, i) => <img src={`${import.meta.env.VITE_IMG_URL}/${image}`} key={i} alt={name} />) }
        </div>
      </div>
      <div className='details flex-col'>
        <ul className="decor-dots flex-row ai-center">
          <li className="dot dot1"></li>
          <li className="dot dot2"></li>
          <li className="dot dot3"></li>
        </ul>
        <div className="project-info flex-col">
          <h2 className="project-title flex-row">
            <span className="number flex-center poppins">{projectNumber}</span>
            <span className="name flex-col">
              <span>{name}</span>
              <span className='name-line'></span>
            </span>
          </h2>
          <p className="desc poppins">
            <span>{projectDescription}</span>
            {
              desc.length > MAX_STRING_LENGTH &&
              <button
                  className="more-info link poppins"
                  link={!showAllText ? "Show More Details" : "Show Less Details"}
                  onClick={() => setShowAllText(!showAllText)}
                >
                  {showAllText ? '  show less' : '  more info'}
                </button>
            }
          </p>
          <div className="links">
            <a href={demo_link} target="_blank" link="Open Demo" className="link demo flex-center">
              <FiExternalLink size={24} />
              <span>Demo</span>
            </a>
            <a href={code_link} target="_blank" link="View Code" className="link code flex-center">
              {is_github_link ? <FiGithub size={24} /> : <FiCodepen size={24} />}
              <span>{ is_github_link ? 'Github' : 'Codepen' }</span>
            </a>
          </div>
        </div>
        <ul className="stacks poppins flex-row">
          { stacks.map(tech => <li key={tech} className="stack">{tech}</li>) }
        </ul>
      </div>
    </article>
  )
};

export default Project
