import React from 'react'
import ReactDom from 'react-dom'
import Header from './components/header/header.js'
import Main from './components/main/main.js'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { createStore } from 'redux'
import injectTapEventPlugin from 'react-tap-event-plugin'
import { initialState } from './redux/reducer'

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

const store = createStore(initialState)

console.log(store.getState())



