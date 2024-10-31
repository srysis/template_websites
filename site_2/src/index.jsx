import React from 'react';
import ReactDOM from 'react-dom/client';

import AppRoot from './AppRoot';

import './style/style.scss';
import './style/style-phone.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppRoot />
  </React.StrictMode>
);

