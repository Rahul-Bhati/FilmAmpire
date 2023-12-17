import { createRoot } from 'react-dom/client';

import React from 'react';
// import ReactDOM from 'react-dom'; // ReactDOM.render is not use above 17 version
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './App/store';
import App from './components/App';

const theme = createTheme({});

const domNode = document.getElementById('root');
const root = createRoot(domNode);

// ReactDOM.render(
{ /* <Provider store={store}>
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>
</Provider>,
  document.getElementById('root'),
); */ }

root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </Provider>,
);
