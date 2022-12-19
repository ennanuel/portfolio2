import Highlight from "./Highlight"
import Socials from "./Socials"

const Footer = ({isVisible, isMenuHovered}) => {
  return (
    <footer className="footer flex-center">
      <Socials isVisible={isVisible} isMenuHovered={isMenuHovered} />
      <p>
        Built and Designed by <Highlight>Emmanuel Ezema</Highlight>.
      </p>
    </footer>
  )
}

export default Footer
