import Background from './components/Background'
import Introduction from './components/Introduction'
import Footer from './components/Footer'
import AboutMe from './components/AboutMe'
import Resume from './components/Resume'
import Projects from './components/Projects'
import GetInTouch from './components/GetInTouch'
import NewHeader from './components/NewHeader'
import MouseTracker from './components/MouseTracker'
import { useState, useEffect } from 'react'
import Header from './components/Header'

let isFirstTime = true;

function App() {

  const [state, setState] = useState({
    link: '#',
    isMenuHovered: false,
    showingFullContent: true,
    showMenuBtn: true,
    initialYPosition: 50,
    scroll: true,
    deviceWidth: window.innerWidth
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
      isFirstTime = false;

      const sections = document.querySelectorAll('.section')
      const observer = new IntersectionObserver( entries => {
        entries.forEach( entry => {
          if(entry.isIntersecting) {
            console.log(state.isMenuHovered)
            if(state.isMenuHovered) return;

            const newLink = '#' + entry.target.id
            setState(prev => ({...prev, link: newLink}))
          }
        })
      });

      [...sections].forEach(section => observer.observe(section))
    }

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [state])

  return (
    <div className="App">
      <div id="background" className="flex-center">
        <Background />
      </div>
      {
        state.deviceWidth > 770 &&
        <>
          <MouseTracker setState={setState} />
        </>
      }
      <NewHeader state={state} setState={setState} />
      <main>
        <article className={`page-content ${state.isMenuHovered && window.innerWidth > 770 ? 'thin-content': ''}`} onMouseOver={handleHover}>
          <Introduction />
          <div id="body">
            <AboutMe />
            <Resume deviceWidth={state.deviceWidth} />
            <Projects />
            <GetInTouch />
          </div>
        </article>
      </main>
      <Footer />
    </div>
  )
}

export default App
