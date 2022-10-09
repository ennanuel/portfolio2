import { useState, useEffect } from 'react'
import Header from './components/Header'
import Background from './components/Background'
import Introduction from './components/Introduction'
import Socials from './components/Socials'
import AboutMe from './components/AboutMe'
import Resume from './components/Resume'
import Projects from './components/Projects'

function App() {

  return (
    <div className="App">
      <div id="background" className="flex-center">
        <Background />
      </div>
        <Header />
      <main>
        <Introduction />
        <AboutMe />
        <Resume />
        <Projects />
      </main>
      <Socials />
    </div>
  )
}

export default App
