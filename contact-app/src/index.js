import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import App from './App';
import store from './store/store';
import theme from './styles/theme';
import GlobalStyle from './styles/GlobalStyle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Provider store={store}>
            <App />
        </Provider>
    </ThemeProvider>
);