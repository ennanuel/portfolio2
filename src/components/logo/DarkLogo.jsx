import logo from '../../assets/images/icon-dark.png';

const DarkLogo = ({ dragDown }) => {
  return (
    <div
      className={`site-logo link flex-center full-border animate__animated animate__fadeIn ${dragDown && 'drag-down'}`}
      link="home"
    >
      <a href="https://ezema.netlify.app"><img src={logo} alt="site-logo" /></a>
    </div>
  )
}

export default DarkLogo
