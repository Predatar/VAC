import React from 'react';
import { createRoot } from 'react-dom/client';

import { HashRouter } from 'react-router-dom';

import App from './pages/app/App';

import './styles/fonts.scss';
import './styles/index.scss';

const container = document.getElementById('root');
const root = createRoot(container);
document.body.style = `--heightMax: ${window.innerHeight}px`;
window.addEventListener('resize', () => {
  document.body.style = `--heightMax: ${window.innerHeight}px`;
});
root.render(
  <HashRouter>
    <App />
  </HashRouter>
);
