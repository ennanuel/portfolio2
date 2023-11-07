import { Title, BgText } from '../decorations';
import { useRef } from "react";
import { useIsVisible } from 'react-is-visible';
import { SKILLS } from '../../assets/data';
import '../../styles/skills/skills.css';

const Skills = () => {
  const nodeRef = useRef();
  const isVisible = useIsVisible(nodeRef, { once: true });

  return (
    <section ref={nodeRef} id="skills" title="02. Skills" className="section skills flex-center">
      <Title number="02.">Skills</Title>
      <div className={`section-content ${isVisible ? 'animate__animated animate__fadeIn' : 'hide-element'}`} style={{ flexDirection: 'column', height: '100%' }}>
        <div className="skill-container">
          {
            SKILLS.map(({ title, skills }, i) => (
              <article
                key={title}
                style={{ animationDelay: `${(i+3)/10}s`}}
                className={`skill link full-border ${isVisible && 'animate__animated animate__fadeInUp'}`}
              >
                <h2>{title}</h2>
                <div className="line" />
                <ul>
                  {
                    skills.map(({ name, Icon }) => (
                      <li key={name} className='poppins' link={name}>
                        <Icon />
                        <span>{name}</span>
                      </li>
                    ))
                  }
                </ul>
              </article>
            ))
          }
        </div>
      </div>
      <BgText left={true}>Skills.</BgText>
    </section>
  )
};

export default Skills
