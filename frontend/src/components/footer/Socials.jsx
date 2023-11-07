import { useContext } from 'react';
import { SOCIAL_LINKS } from '../../assets/data';
import { PageContext } from '../../PageContext';

const Socials = () => {
  const { loading, menu: { isHovering } } = useContext(PageContext);

  return (
    <div className={`socials link anim-duration delay ${!loading ? 'animate__animated animate__fadeIn' : 'hidden'} ${isHovering && 'hide-socials'}`}>
      <div className="line"></div>
      {
        SOCIAL_LINKS.map(({ url, link, Icon }, i) =>
          <a
            key={i}
            target="_blank"
            href={url}
            className={`social flex-center link delay ${!loading ? 'animate__animated animate__fadeInDown' : 'hidden'}`}
            link={link}
            style={{ animationDelay: `${i / 10}s` }}
          >
            <i className="flex-center"><Icon /></i>
          </a>)
      }
    </div>
  )
}

export default Socials
