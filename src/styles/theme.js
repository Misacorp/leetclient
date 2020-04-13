const baseFonts = [
  'Saira Semi Condensed',
  'Open Sans',
  'Roboto',
  'Helvetica Neue',
  'Arial',
  'sans-serif',
];

/**
 * Plum and orange palette
 */
export default {
  palette: {
    primary: {
      light: '#CE6A85',
      main: '#985277',
      dark: '#5C374C',
      darker: '#3B2331',
    },
    secondary: {
      lighter: '#FDDDCC',
      light: '#FAA275',
      main: '#FF8C61',
    },
    typography: {
      light: '#FDDDCC',
    },
  },
  typography: {
    base: {
      fontFamily: baseFonts.join(','),
    },
    title: {
      fontFamily: baseFonts.join(','),
    },
    sizes: {
      200: '12px',
      400: '18px',
      500: '22px',
      600: '32px',
      700: '36px',
      900: '48px',
    },
  },
};
