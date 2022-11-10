import { useState, useEffect } from 'react'
import { Background, Introduction, Footer, AboutMe, Resume, Projects, GetInTouch, NewHeader, MouseTracker } from './components';
import DarkVariables from './components/DarkVariables';
import LightVariables from './components/LightVariables';
import PseudoPage from './components/PseudoPage';

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
    lightTheme: false
  })

  const handleHover = () => {
    if(state.showingFullContent) return;

    setState(prev => ({...prev, isMenuHovered: false, showingFullContent: true}))
    
    setTimeout(() => {
      location.href = state.link;
    }, 300);
  }

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

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)

    if(isFirstTime) {
      isFirstTime = false

      const elements = document.querySelectorAll('.delay');

      [...elements].forEach((element, i) => {
        element.style.animationDelay = (i/10).toFixed(1) + 's'
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

        <NewHeader state={state} setState={setState} />
          <PseudoPage shouldShow={state.isMenuHovered} />
          <main>
            <article className={`page-content ${state.isMenuHovered? 'thin-content': ''}`} onMouseOver={handleHover}>
              <Introduction setState={setState} />
              <div id="body">
                <AboutMe />
                <Resume deviceWidth={state.deviceWidth} />
                <Projects deviceWidth={state.deviceWidth} />
                <GetInTouch />
              </div>
            </article>
          </main>
        <Footer isVisible={state.isVisible} isMenuHovered={state.isMenuHovered} />
      </div>
    </>
  )
}

export default App
