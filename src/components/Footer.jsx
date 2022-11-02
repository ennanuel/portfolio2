import Highlight from "./Highlight"
import Socials from "./Socials"

const Footer = ({setDelay}) => {
  return (
    <footer className="flex-center">
      <Socials setDelay={setDelay} />
      <p>
        Built and Designed by <Highlight>Emmanuel Ezema</Highlight>.
      </p>
    </footer>
  )
}

export default Footer
