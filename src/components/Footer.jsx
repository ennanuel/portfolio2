import Highlight from "./Highlight"
import Socials from "./Socials"

const Footer = ({isVisible}) => {
  return (
    <footer className="flex-center">
      <Socials isVisible={isVisible} />
      <p>
        Built and Designed by <Highlight>Emmanuel Ezema</Highlight>.
      </p>
    </footer>
  )
}

export default Footer
