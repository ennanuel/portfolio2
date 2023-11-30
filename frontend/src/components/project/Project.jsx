import { useRef } from 'react';
import { useIsVisible } from 'react-is-visible';
import { FiCodepen, FiExternalLink, FiGithub } from 'react-icons/fi';
import { useMemo } from 'react';
import exampleImage4 from "../../assets/images/ezema_image.png";
import exampleImage3 from "../../assets/images/robert_image.png";
import exampleImage2 from "../../assets/images/ridm_image.png";
import exampleImage from "../../assets/images/Card Store Image.jpg";

const Project = ({ left, num, name, desc, stacks, images, demo_link, code_link, is_github_link }) => {
  const projectRef = useRef(null);
  const isVisible = useIsVisible(projectRef, { once: true });
  const projectNumber = useMemo(() => num < 10 ? `0${num + 1}` : `${num + 1}`, []);

  return (
    <article ref={projectRef} className={`main-project flex-center ${left && 'left'} ${isVisible && 'animate__animated animate__fadeIn'}`}>
      <div className="images relative">
        <div className="container">
          {/* { images.slice(0, 1).map((image, i) => <img src={image} key={i} alt={name} />) } */}
          <img src={num === 0 ? exampleImage2 : num === 1 ? exampleImage3 : num === 2 ? exampleImage4 : exampleImage} alt="" />
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
          <p className="desc poppins">{desc}</p>
          <div className="links">
            <a href={demo_link} link="Open Demo" className="link demo flex-center">
              <FiExternalLink size={24} />
              <span>Demo</span>
            </a>
            <a href={code_link} link="View Code" className="link code flex-center">
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
