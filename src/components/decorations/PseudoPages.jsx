import { useMemo } from "react";

const PseudoPages = ({ menuIsHovering, currentPage }) => {
    const style = useMemo(() => menuIsHovering ? { transform: `translateY(-${currentPage * 100}vh)` } : {}, [currentPage, menuIsHovering]);
    return (
        <div
            className={`pseudo-page poppins ${menuIsHovering && 'show-pseudo-page'}`}
            style={style}
        >
            <section className="fake-pages" id="intro0">Introduction</section>
            <section className="fake-pages" id="about0">About Me</section>
            <section className="fake-pages" id="resume0">Skills</section>
            <section className="fake-pages" id="projects0">Projects</section>
            <section className="fake-pages" id="contact0">Get In Touch</section>
        </div>
    )
};

export default PseudoPages
