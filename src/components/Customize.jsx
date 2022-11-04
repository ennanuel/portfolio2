import { useState } from 'react'
import { MdDisabledVisible } from 'react-icons/md'
import { BsSunFill, BsMoonFill, BsFillEyeFill } from 'react-icons/bs'

const Customize = ({dynamicBg, setState}) => {
    const [themeColor, setThemeColor] = useState(false);

    const style = {
        transform: `translateX(${themeColor? '0': '100%'})`
    }


    const alterDynamicBg = () => {
        setState(prev => ({...prev, dynamicBg: !dynamicBg}));
    }

    const handleThemeChange = () => {
        const pageStyle = document.getElementById('theme-style');
        let hrefLink = './src/styles/lightvariables.css'

        if(themeColor) {
            hrefLink = './src/styles/variables.css'
        }

        pageStyle.href = hrefLink

        setThemeColor(prev => !prev)
    }


  return (
    <>
        <div className="change-color link" onClick={handleThemeChange} link="theme">
            <div className="link theme-switch" style={style} link="change theme color"/>
            <div className="dark-icon theme-icon flex-center"><i><BsMoonFill /></i></div>
            <div className="light-icon theme-icon flex-center"><i><BsSunFill /></i></div>
        </div>

        <div className="disable-dynamic-bg link" link={dynamicBg ? 'disable dynamic background': 'enable dynamic background'}>
            <div className="disable-btn flex-center" onClick={alterDynamicBg}><i>{dynamicBg ? <MdDisabledVisible /> : <BsFillEyeFill />}</i></div>
        </div>
    </>
  )
}

export default Customize
