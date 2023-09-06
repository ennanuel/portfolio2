import { useState, useEffect } from 'react'
import { Introduction, AboutMe, Skills, Projects, GetInTouch } from './components/sections';
import { AddProject } from './components/forms'
import { NewHeader, DarkLogo, LightLogo } from './components/header'
import { Footer } from './components/footer'
import { DarkVariables, LightVariables } from './components/cssvariables'
import { PseudoPage, Waiting, MouseTracker, Background } from './components/decorations';

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
    showDynamicBg: window.innerWidth > 720,
    changeBg: true,
    lightTheme: !localStorage.getItem('light_theme') === 'false',
    currentPage: 0,
    projects: []
  })
  const [loading, setLoading] = useState(true)

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

      try {
        const res = await fetch(apiUrl)
        const data = await res.json()
        setState(prev => ({...prev, projects: data? data: []}))
        setLoading(false)
      } catch (error) {
        setState(prev => ({...prev, projects: []}))
        setLoading(false)
      }
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
        state.lightTheme? <LightVariables /> : <DarkVariables/>
      }
      <div className="App">
        <div id="background" className="flex-center">
          <Background state={state} setMainState={setState} />
        </div>

        { state.deviceWidth > 770 && <MouseTracker /> }
          <div className={loading && 'dontshow'}>
            {
              state.lightTheme? <LightLogo dragDown={state.showingFullContent} />: <DarkLogo dragDown={state.showingFullContent} />
            }
            <NewHeader state={state} setState={setState} />
            <PseudoPage shouldShow={state.isMenuHovered} y={state.currentPage} />
              <main className={`page-content ${state.isMenuHovered? 'thin-content': ''}`}>
                <Introduction setState={setState} />
                <AboutMe />
                <Skills deviceWidth={state.deviceWidth} showDynamicBg={state.showDynamicBg} />
                <Projects projects={state.projects} />
                <GetInTouch />
                {/* <AddProject /> */}
              </main>
            <Footer isVisible={state.isVisible} isMenuHovered={state.isMenuHovered} />
          </div>
          <Waiting lightTheme={state.lightTheme} hide={loading} />
      </div>
    </>
  )
}

export default App
