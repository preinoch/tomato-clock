import React from 'react'
import ReactDom from 'react-dom'
import Header from './components/header/header.js'
import Main from './components/main/main.js'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { createStore } from 'redux';
import injectTapEventPlugin from 'react-tap-event-plugin'; 

injectTapEventPlugin();

ReactDom.render(
    <MuiThemeProvider>
        <div>
            <Header/>
            <Main/>
        </div>
    </MuiThemeProvider>,
    document.getElementById('app')
);




