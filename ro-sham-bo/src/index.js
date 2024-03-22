import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import AppClass from './AppClass';
import GlobalStyle from './styles/GlobalStyle';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <div>
    <GlobalStyle />
    {/* <App /> */}
    <AppClass />
  </div>
);
