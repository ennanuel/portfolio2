import { Title, BgText } from '../decorations';
import { useRef } from "react";
import { useIsVisible } from 'react-is-visible';
import { SKILLS } from '../../assets/data';
import '../../styles/skills.scss';

const Skills = () => {
  const nodeRef = useRef();
  const isVisible = useIsVisible(nodeRef, { once: true });

  return (
    <section ref={nodeRef} id="skills" title="02. Skills" className="section skills flex-center">
      <Title>Skills</Title>
      <div className={`section-content ${isVisible ? 'animate__animated animate__fadeIn' : 'hide-element'}`} style={{ flexDirection: 'column', height: '100%' }}>
        <div className="skill-container">
          {
            SKILLS.map(({ title, skills }, i) => (
              <article
                key={title}
                style={{ animationDelay: `${(i+3)/10}s`}}
                className={`skill link ${isVisible && 'animate__animated animate__fadeInUp'}`}
              >
                <h2>{title}</h2>
                <div className="line" />
                <ul>
                  {
                    skills.map(({ name, Icon }) => (
                      <li key={name} className='poppins' link={name}>
                        <div className="skill-detail full-border full-hw flex-row flex-center">
                          <Icon size={60} />
                          <span>{name}</span>
                        </div>
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
