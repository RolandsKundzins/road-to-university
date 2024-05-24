import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FFFFFF',
      light: '#DDE4FF',
      dark: '#1D3AA0',
    },
    secondary: {
      main: '#DDE4FF',
      dark: '#1D3AA0'
    },
  },

  typography: {
    h1: {
      fontFamily: 'Lalezar',
      color: '#000000',
    },
    h2: {
      fontFamily: 'Lalezar',
      color: '#000000',
    },
    h3: {
      fontFamily: 'Lalezar',
      color: '#000000',
    },
    h4: {
      fontFamily: 'Lalezar',
      color: '#000000',
    },
    h5: {
      fontFamily: 'Lalezar',
      color: '#000000',
    },
    h6: {
      fontFamily: 'Lalezar',
      color: '#000000',
    },
    
    button: {
      fontFamily: 'Lalezar',
    },
  },
});


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
