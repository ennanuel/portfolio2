import { MdDisabledVisible } from 'react-icons/md';
import { BsSunFill, BsMoonFill, BsFillEyeFill } from 'react-icons/bs';
import { useMemo } from 'react';

const Customize = ({ theme, dynamicBackground, showDynamicBackground, hideDynamicBackground, toggleTheme }) => {
    const style = useMemo(() => ({ transform: `translateX(${theme === 'dark' ? '0' : '100%'})` }), [theme]);

    return (
        <>
            <button className="action-btn change-color link" onClick={toggleTheme} link="theme">
                <span className="link theme-switch" style={style} link="change theme color"></span>
                <span className="dark-icon theme-icon flex-center"><i><BsMoonFill /></i></span>
                <span className="light-icon theme-icon flex-center"><i><BsSunFill /></i></span>
            </button>
            <div className="disable-dynamic-bg link" link={dynamicBackground ? 'disable dynamic background' : 'enable dynamic background'}>
                <button className="action-btn disable-btn flex-center" onClick={dynamicBackground ? hideDynamicBackground : showDynamicBackground}>
                    <i>{dynamicBackground ? <MdDisabledVisible /> : <BsFillEyeFill />}</i>
                </button>
            </div>
        </>
    )
};

export default Customize
