import { useState, useMemo, useRef } from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { FiCodepen, FiGithub } from 'react-icons/fi';
import { useIsVisible } from 'react-is-visible';
import { AiOutlineProject } from 'react-icons/ai';

const MAX_TEXT_LENGTH = 200;

const Project2 = ({ code_link, demo_link, name, desc, stacks, i, is_github_link }) => {
  const projectRef = useRef();
  const isVisible = useIsVisible(projectRef, { once: true });
  const [showAllText, setShowAllText] = useState(false);
  const style = useMemo(() => ({ animationDelay: `${(i / 10).toFixed(2)}s` }), []);
  const projectDescription = useMemo(() => desc.length > MAX_TEXT_LENGTH && !showAllText ? `${desc.substring(0, MAX_TEXT_LENGTH)}...` : desc, [showAllText]);
  
  return (
    <div
      ref={projectRef}
      className={`other-project anim-duration ${isVisible ? 'animate__animated animate__fadeIn' : 'hide-element'}`}
      style={style}
    >
      <div className="top flex-row">
        <AiOutlineProject size={40} />
        <div className="links other-project-links link">
          {
            !is_github_link ?
                <a target="_blank" href={code_link} className="link code-link flex-center" link="Codepen">
                  <FiCodepen size={20} />
                </a> :
                <a target="_blank" href={code_link} className="link code-link flex-center" link="Github Repo">
                  <FiGithub size={20} />
                </a>
          }
          <a target="_blank" href={demo_link} className="link code-link flex-center" link="Demo Link">
            <FaExternalLinkAlt />
          </a>
        </div>
      </div>
      <div className='project-info'>
        <a href={demo_link} target="_blank" className='relative'>{name}</a>
        <p className="desc poppins">
          <span>{projectDescription}</span>
          {
            desc.length > MAX_TEXT_LENGTH &&
            <button
                className="more-info link"
                link={showAllText ? "Show Less Details" : "Show More Details"}
                onClick={() => setShowAllText(!showAllText)}
              >
                {showAllText ? '  show less' : '  more info'}
              </button>
          }
        </p>
      </div>
      <div className='tech-used'>
        {
          stacks.map(tech => <div className="tech poppins full-border flex-center">{tech}</div>)
        }
      </div>
    </div>
  )
};

export default Project2
