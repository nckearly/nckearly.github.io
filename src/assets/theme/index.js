/* this is the custome theme file,
    change the default fonts etc. in this file */

import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#002e6a' },
    secondary: { main: '#Fcd116' },
  },
  typography: {
    fontFamily: "'Oswald', sans-serif",
    button: {
      fontFamily: "'Oswald', sans- serif",
      fontWeight: 'bold',
    },
    h5: {
      fontWeight: 300,
      textAlign: 'center',
    },
    h6: {
      fontWeight: 300,
    },
    body1: {
      fontWeight: 300,
    },
    subheading: {
      fontWeight: 300,
    }
  },
});

export default theme;
