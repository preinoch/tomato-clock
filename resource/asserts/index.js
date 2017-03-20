import React from 'react'
import ReactDom from 'react-dom'
import Header from './components/header/header.js'
import Main from './components/main/main.js'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

ReactDom.render(
    <MuiThemeProvider>
        <div>
            <Header/>
            <Main/>
        </div>
    </MuiThemeProvider>,
    document.getElementById('app')
);




