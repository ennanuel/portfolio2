import { BiMenuAltLeft } from 'react-icons/bi';

const OpenMenuBtn = ({ menuBtnRef, showBtn, isVisible, showMenu }) => {
    return (
        <button
            ref={menuBtnRef}
            className={`action-btn menu-btn flex-center anim-duration delay ${showBtn ? '' : 'hide'} ${isVisible ? 'animate__animated animate__fadeIn' : 'hidden'}`}
            onClick={showMenu}
        >
            <BiMenuAltLeft />
        </button>
    )
};

export default OpenMenuBtn
