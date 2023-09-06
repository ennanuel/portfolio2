import logo from '../assets/images/site/imageonline-co-transparentimage (1).png';

const DarkLogo = ({ dragDown }) => {
  return (
    <div className={`site-logo link flex-center full-border animate__animated animate__fadeIn ${!dragDown? 'drag-down': ''}`} link="home">
      <a href="home"><img src={logo} alt="site-logo" /></a>
    </div>
  )
}

export default DarkLogo
