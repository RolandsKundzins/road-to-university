import { createTheme } from "@mui/material";

const breakpoints = { //currently set to default
  values: {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1536
  }
};


export const lightTheme = createTheme({
  breakpoints,
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
    h1: {
      fontFamily: 'Lalezar', color: '#000000', fontSize: '70px',

      [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
        fontSize: '11vw'
      }
    },
    h2: { 
      fontFamily: 'Lalezar', color: '#000000', fontSize: '65px',

      [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
        fontSize: '10vw'
      }
    },
    h3: { 
      fontFamily: 'Inter', color: '#4a4a4a', fontSize: '40px',

      [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
        fontSize: '5vw'
      } 
    },
    h4: { fontFamily: 'Inter', color: '#4a4a4a' },
    h5: { fontFamily: 'Inter', color: '#4a4a4a' },
    h6: { fontFamily: 'Inter', color: '#4a4a4a' },
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
    h1: { 
      fontFamily: 'Lalezar', color: '#FFFFFF', fontSize: '70px',

      [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
        fontSize: '11vw'
      }
    },
    h2: { 
      fontFamily: 'Lalezar', color: '#FFFFFF', fontSize: '65px',

      [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
        fontSize: '10vw'
      }
    },
    h3: { 
      fontFamily: 'Inter', color: '#F0F0F0', fontSize: '40px',

      [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
        fontSize: '5vw'
      } 
    },
    h4: { fontFamily: 'Inter', color: '#F0F0F0' },
    h5: { fontFamily: 'Inter', color: '#F0F0F0' },
    h6: { fontFamily: 'Inter', color: '#F0F0F0' },
    button: { fontFamily: 'Lalezar'},
  },
});
