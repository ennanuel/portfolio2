import { MdDisabledVisible } from 'react-icons/md'
import { BsSunFill, BsMoonFill, BsFillEyeFill } from 'react-icons/bs'

const Customize = ({state, setState}) => {

    const style = {
        transform: `translateX(${state.lightTheme? '0': '100%'})`
    }


    const alterDynamicBg = () => {
        setState((prev) => ({...prev, showDynamicBg: !prev.showDynamicBg, changeBg: true}))
    }

    const handleThemeChange = () => {
        setState((prev) => ({...prev, lightTheme: !prev.lightTheme}))
        localStorage.setItem('light_theme', state.lightTheme)
    }


  return (
    <>
        <div className="change-color link" onClick={handleThemeChange} link="theme">
            <div className="link theme-switch" style={style} link="change theme color"/>
            <div className="dark-icon theme-icon flex-center"><i><BsMoonFill /></i></div>
            <div className="light-icon theme-icon flex-center"><i><BsSunFill /></i></div>
        </div>

        <div className="disable-dynamic-bg link" link={state.showDynamicBg ? 'disable dynamic background': 'enable dynamic background'}>
            <div className="disable-btn flex-center" onClick={alterDynamicBg}><i>{state.showDynamicBg ? <MdDisabledVisible /> : <BsFillEyeFill />}</i></div>
        </div>
    </>
  )
}

export default Customize
