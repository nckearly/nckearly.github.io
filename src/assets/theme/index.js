import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

const theme =
    createMuiTheme({
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
                textAlign: 'center',
                
            },
        },

    });


export default theme;
