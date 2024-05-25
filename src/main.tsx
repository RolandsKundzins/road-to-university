import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FFFFFF',
      light: '#e7ecff', //#e7ecff //original: DDE4FF
      dark: '#1D3AA0',
    },
    secondary: {
      main: '#e7ecff',
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
      fontFamily: 'Inter',
      color: '#5B5B5B',
    },
    h4: {
      fontFamily: 'Inter',
      color: '#5B5B5B',
    },
    h5: {
      fontFamily: 'Inter',
      color: '#5B5B5B',
    },
    h6: {
      fontFamily: 'Inter',
      color: '#5B5B5B',
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
