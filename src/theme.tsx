import { createTheme } from "@mui/material";


export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#FFFFFF',
      light: '#e7ecff',
      dark: '#1D3AA0',
    },
    secondary: {
      main: '#e7ecff',
      dark: '#1D3AA0'
    },
  },
  typography: {
    h1: { fontFamily: 'Lalezar', color: '#000000' },
    h2: { fontFamily: 'Lalezar', color: '#000000', fontSize: '65px' },
    h3: { fontFamily: 'Inter', color: '#5B5B5B', fontSize: '47px' },
    h4: { fontFamily: 'Inter', color: '#5B5B5B' },
    h5: { fontFamily: 'Inter', color: '#5B5B5B' },
    h6: { fontFamily: 'Inter', color: '#5B5B5B' },
    button: { fontFamily: 'Lalezar' },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#212026',
      light: '#212026',
      dark: '#DFBF43',
    },
    secondary: {
      main: '#161616',
      dark: '#FFE16A'
    },
  },
  typography: {
    h1: { fontFamily: 'Lalezar', color: '#FFFFFF' },
    h2: { fontFamily: 'Lalezar', color: '#FFFFFF', fontSize: '65px' },
    h3: { fontFamily: 'Inter', color: '#F0F0F0', fontSize: '47px' },
    h4: { fontFamily: 'Inter', color: '#F0F0F0' },
    h5: { fontFamily: 'Inter', color: '#F0F0F0' },
    h6: { fontFamily: 'Inter', color: '#F0F0F0' },
    button: { fontFamily: 'Lalezar' },
  },
});
