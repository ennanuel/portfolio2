import { useState, useEffect } from 'react'
import { Background, Introduction, Footer, AboutMe, Resume, Projects, GetInTouch, NewHeader, MouseTracker } from './components';
import AddProject from './components/AddProject';
import DarkVariables from './components/DarkVariables';
import LightVariables from './components/LightVariables';
import MovingBackground from './components/MovingBackground';
import PseudoPage from './components/PseudoPage';
import Wating from './components/Wating';

let isFirstTime = true;

function App() {

  const [state, setState] = useState({
    link: '#',
    isMenuHovered: false,
    showingFullContent: true,
    showMenuBtn: true,
    initialYPosition: 50,
    scroll: true,
    deviceWidth: window.innerWidth,
    isVisible: false,
    showDynamicBg: true,
    changeBg: true,
    lightTheme: false,
    currentPage: 0,
    projects: []
  })

  useEffect(() => {
    const handleScroll = () => {

      if(!state.scroll) return;

      let showOrNot;
      if(state.initialYPosition < window.scrollY) {
        showOrNot = false
      } else {
        showOrNot = true
      }

      setState(prev => ({...prev, showMenuBtn: showOrNot, initialYPosition: window.scrollY}))
    }

    const handleResize = () => {
      setState(prev => ({...prev, deviceWidth: window.innerWidth}))
    }

    const fetchRequest = async () => {
      const apiUrl = 'https://portfolio-projects-14ccd-default-rtdb.firebaseio.com/projects.json';

      const res = await fetch(apiUrl)
      const data = await res.json()
      setState(prev => ({...prev, projects: data? data: []}))
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)

    if(isFirstTime) {
      isFirstTime = false
      fetchRequest();

      const elements = document.querySelectorAll('.delay');

      [...elements].forEach((element, i) => {
        element.style.animationDelay = (i/10).toFixed(1) + 's'
      })

      const observe = new IntersectionObserver(entries => {
        entries.forEach((entry) => {
            if(!entry.isIntersecting) return;
            const link = '#' + entry.target.id
            const currentPage = entry.target.getAttribute('i')
            setState(prev => ({...prev, link, currentPage}))
        })
      })

      const sections = document.querySelectorAll('.section')
      sections.forEach((section, i) => {
        section.setAttribute('i', i)
        observe.observe(section)
      })
    }

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [state])

  return (
    <>
    {
      !state.lightTheme? <LightVariables /> : <DarkVariables/>
    }
      <div className="App">
        <div id="background" className="flex-center">

          <Background state={state} setMainState={setState} />

        </div>

        { state.deviceWidth > 770 && <MouseTracker /> }

        <NewHeader state={state} setState={setState} />
          <PseudoPage shouldShow={state.isMenuHovered} y={state.currentPage} />
          {true ? <main>
            <article className={`page-content ${state.isMenuHovered? 'thin-content': ''}`}>
              <Introduction setState={setState} />
              <div id="body">
                <AboutMe />
                <Resume deviceWidth={state.deviceWidth} showDynamicBg={state.showDynamicBg} />
                <Projects projects={state.projects} />
                <GetInTouch />
                {/* <AddProject /> */}
              </div>
            </article>
          </main>: <Wating />}
        <Footer isVisible={state.isVisible} isMenuHovered={state.isMenuHovered} />
      </div>
    </>
  )
}

export default App
