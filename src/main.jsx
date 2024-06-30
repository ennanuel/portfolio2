import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { PageContextProvider } from './PageContext';
import 'animate.css';
import './styles/index.scss';
import './styles/pseudos-style.scss';
import './styles/mediaqueries.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PageContextProvider>
      <App />
    </PageContextProvider>
  </React.StrictMode>
);
