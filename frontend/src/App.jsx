import Theme from './components/theme';
import NavBar from './components/navbar';
import Logo from './components/logo';
import { Footer } from './components/footer';
import { Introduction, AboutMe, Skills, Projects, GetInTouch } from './components/sections';
import { PseudoPages, Waiting, MouseTracker, Background } from './components/decorations';
import { useContext } from 'react';
import { PageContext } from './PageContext';

function App() {
  const { theme, menu, page, loading } = useContext(PageContext);
  
  return (
    <>
      <Theme theme={theme} />
      <div className="App">
        <div id="background" className="flex-center">
          <Background />
        </div>
        <MouseTracker />
        <div className={`${loading && 'dontshow'}`}>
          <Logo theme={theme} dragDown={menu.dragDown} />
            <NavBar />
            <PseudoPages menuIsHovering={menu.isHovering} currentPage={page.current} />
              <main className={`page-content ${ menu.isHovering ? 'thin-content': '' }`}>
                <Introduction />
                <AboutMe />
                <Skills />
                <Projects />
                <GetInTouch />
              </main>
            <Footer />
          </div>
          <Waiting theme={theme} loading={loading} />
      </div>
    </>
  )
}

export default App
