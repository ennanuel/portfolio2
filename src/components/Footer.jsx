import Highlight from "./Highlight"
import Socials from "./Socials"

const Footer = () => {
  return (
    <footer className="flex-center">
      <Socials />
      <p>
        Built and Designed by <Highlight>Emmanuel Ezema</Highlight>.
      </p>
    </footer>
  )
}

export default Footer
