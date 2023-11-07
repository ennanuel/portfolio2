import { Highlight } from "../decorations";
import Socials from "./Socials";

const Footer = () => {
  return (
    <footer className="footer flex-center">
      <Socials />
      <p>
        Built and Designed by <Highlight>Emmanuel Ezema</Highlight>.
      </p>
    </footer>
  )
}

export default Footer
