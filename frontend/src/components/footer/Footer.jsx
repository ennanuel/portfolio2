import { useContext } from "react";
import Socials from "./Socials";
import { PageContext } from "../../PageContext";
import darkLogo from '../../assets/images/icon-dark.png';
import lightLogo from '../../assets/images/icon-light.png';

const Footer = () => {
  const { theme, menu: { hide } } = useContext(PageContext);
  return (
    <footer className={`footer flex-col flex-center ${!hide && 'hide_footer'}`}>
      <div className="footer-logo flex-center full-border">
        <img src={theme === 'light' ? darkLogo : lightLogo} alt="Site Logo" />
      </div>
      <Socials />
      <p>
        <span className="poppins">Built and Designed by </span>
        <a href="https://www.github.com/ennanuel" target="_blank" className="highlight">Emmanuel Ezema</a>.
      </p>
    </footer>
  )
}

export default Footer
