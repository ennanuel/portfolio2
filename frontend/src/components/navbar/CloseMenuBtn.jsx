import { AiFillCaretRight } from 'react-icons/ai';

const CloseMenuBtn = ({ hideMenu }) => {
    return (
        <button
            className='action-btn go-back-btn flex-center link reverse-link'
            onClick={hideMenu}
            link="exit menu"
        >
            <AiFillCaretRight />
        </button>
    )
};

export default CloseMenuBtn
