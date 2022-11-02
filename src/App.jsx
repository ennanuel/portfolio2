import { useState, useEffect } from 'react'
import { Background, Introduction, Footer, AboutMe, Resume, Projects, GetInTouch, NewHeader, MouseTracker, Header } from './components';

let num = 0

function App() {
  const setDelay = () => {
    console.log(num)
    num++
    return {animationDelay: (num/10).toFixed(1) + 's'}
  }


  const [state, setState] = useState({
    link: '#',
    isMenuHovered: false,
    showingFullContent: true,
    showMenuBtn: true,
    initialYPosition: 50,
    scroll: true,
    deviceWidth: window.innerWidth,
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
        state.deviceWidth > 770 ?
        <>
          <MouseTracker setState={setState} />
          <NewHeader setDelay={setDelay} state={state} setState={setState} />
        </> :
        <><Header setDelay={setDelay} currentPageTitle={state.link} /></>
      }
      <main>
        <article className={`page-content ${state.isMenuHovered? 'thin-content': ''}`} onMouseOver={handleHover}>
          <Introduction setDelay={setDelay} />
          <div id="body">
            <AboutMe />
            <Resume deviceWidth={state.deviceWidth} />
            <Projects deviceWidth={state.deviceWidth} />
            <GetInTouch />
          </div>
        </article>
      </main>
      <Footer setDelay={setDelay} />
    </div>
  )
}

export default App
