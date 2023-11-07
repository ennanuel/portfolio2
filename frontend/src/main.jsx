import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { PageContextProvider } from './PageContext';
import 'animate.css';
import './styles/index/index.css';
import './styles/pseudo-style/pseudos-style.css';
import './styles/mediaqueries/mediaqueries.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PageContextProvider>
      <App />
    </PageContextProvider>
  </React.StrictMode>
);
