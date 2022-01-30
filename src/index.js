import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createTheme, MuiThemeProvider} from "@material-ui/core/styles";
import {createStyles, makeStyles} from '@material-ui/core';

const useGlobalStyles = makeStyles(() =>
    createStyles({
        '@global': {
            html: {
                '-webkit-font-smoothing': 'antialiased',
                height: '100%',
                width: '100%'
            },
            body: {
                height: '100%',
                width: '100%'
            },
            '#root': {
                height: '100%',
                width: '100%'
            }
        }
    })
);

const myName = 'Sasha';

const theme = createTheme({
    palette: {
        primary: {
            main: '#008CFFFF',
        },
        secondary: {
            main: "#0098FF",
        },
    },
});

const GlobalStyles = () => {
    useGlobalStyles();
    return null;
};

ReactDOM.render(
    <MuiThemeProvider theme={theme}>
        <GlobalStyles/>
        <App name={myName}/>
    </MuiThemeProvider>,
    document.getElementById('root')
);
