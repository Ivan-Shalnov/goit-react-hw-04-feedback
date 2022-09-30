import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App/App';
import { ThemeProvider } from 'styled-components';
import './index.css';
import 'reset-css';
import { createGlobalStyle } from 'styled-components';
const darkTheme = {
  colors: {
    bg: '#131722',
    cardBg: '#1B2130',
    title: 'rgba(255, 255, 255, 0.9)',
    text: 'rgba(255, 255, 255, 0.3)',
  },
};
const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${p => p.theme.colors.bg};
    color: ${p => p.theme.colors.text};
    padding: 150px;
  }
`;
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
