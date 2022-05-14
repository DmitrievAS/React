import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import {createTheme} from "@material-ui/core/styles";
// import {createStyles, makeStyles} from '@material-ui/core';
import Routers from "./pages/Routers";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./store";
import {AuthProvider} from "./hook/useAuth";
// import {PersistGate} from "redux-persist/integration/react";
// import {CircularProgress} from "@mui/material";

// const useGlobalStyles = makeStyles(() =>
// createStyles({
//     '@global': {
//         html: {
//             '-webkit-font-smoothing': 'antialiased',
//             height: '100%',
//             width: '100%'
//         },
//         body: {
//             height: '100%',
//             width: '100%'
//         },
//         '#root': {
//             height: '100%',
//             width: '100%'
//         }
//     }
// })
// );

// const theme = createTheme({
//     palette: {
//         primary: {
//             main: '#008CFFFF',
//         },
//         secondary: {
//             main: "#0098FF",
//         },
//     },
// });

// const GlobalStyles = () => {
//     useGlobalStyles();
//     return null;
// };

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            {/*<PersistGate persistor={persistor} loading={<CircularProgress/>}>*/}
            <AuthProvider>
                <Routers/>
            </AuthProvider>
            {/*</PersistGate>*/}
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);
