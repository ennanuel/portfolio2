import { useState, useEffect, useLayoutEffect, createContext } from "react";
import { delayElementsInView, fetchProjects, observeSectionIntersections } from "./utils";
import { INITIAL_CONTEXT_VALUES } from "./assets/data";

const PageContext = createContext(INITIAL_CONTEXT_VALUES);

const PageContextProvider = ({ children }) => {
    const [menu, setMenu] = useState({ isHovering: false, hide: true, showBtn: true, dragDown: false });
    const [theme, setTheme] = useState('light');
    const [isMobile, setWindowWidth] = useState(window.innerWidth < 770);
    const [dynamicBackground, setDynamicBackground] = useState(false);
    const [page, setPage] = useState({ current: 0, link: '#intro' });
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    function setCurrentPage(link, i) { setPage({ link, current: i }) };
    function showDynamicBackground() { setDynamicBackground(!isMobile) };
    function hideDynamicBackground() { setDynamicBackground(false) };
    function showMenu() { setMenu({ isHovering: true, hide: false, showBtn: false, dragDown: isMobile }) };
    function hideMenu() { setMenu({ isHovering: false, hide: true, showBtn: true, dragDown: false }) };
    function toggleTheme() {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    };
    function handleResize() { setWindowWidth(window.innerWidth) };
    function handleError(error) {
        setLoading(false);
        console.error(error)
    };
    function handleFetch(res) {
        setLoading(false);
        setProjects(res);
    };

    useEffect(() => {
        const pageSections = document.querySelectorAll('.section');
        observeSectionIntersections(pageSections, setPage);
        delayElementsInView();
        fetchProjects()
            .then(handleFetch)
            .catch(handleError);
        
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useLayoutEffect(() => { 
        const previousTheme = localStorage.getItem('theme') || 'light';
        setTheme(previousTheme);
    }, [])

    return (
        <PageContext.Provider value={{
            theme,
            menu,
            page,
            isMobile,
            dynamicBackground,
            projects,
            loading,
            showDynamicBackground,
            hideDynamicBackground,
            showMenu,
            hideMenu,
            setCurrentPage,
            toggleTheme
        }}>
            {children}
        </PageContext.Provider>
    )
};

export { PageContext, PageContextProvider };