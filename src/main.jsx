import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/index.css'
import './styles/pseudos-style.css'
import './styles/onscreenanimations.css'
import 'animate.css'
import './styles/smallerDevice.css'
import './styles/largerDevice.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
