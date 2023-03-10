import { createTheme } from '@mui/material';

export default createTheme({
  palette: {
    primary: {
      main: '#55c57a',
      light: '#7ed56f',
      dark: '#28b485',
    },
  },

  typography: {
    allVariants: {
      fontFamily: `'Lato', sans-serif`,
      color: '#777',
    },
  },

  borderRadius: {
    large: '10rem',
    tiny: '3px',
  },

  clipPath: {
    singleWedge: 'polygon(0 0, 100% 0, 100% calc(100% - 9vw), 0 100%)',
    dualWedge: 'polygon(0 9vw, 100% 0, 100% calc(100% - 9vw), 0 100%)',
  },

  margin: {
    skewCover: 'calc(0px - 9vw)',
  },

  padding: {
    skewCover: 'calc(5rem + 9vw)',
  },

  utils: {
    createGradient(img) {
      return img
        ? `linear-gradient(to right bottom, rgba(126, 213, 111, .8), rgba(40, 180, 133, .8)), url(${img})`
        : 'linear-gradient(to right bottom, #7ed56f, #28b485)';
    },
    flexBox: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
});
