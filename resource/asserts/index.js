import React from 'react'
import ReactDom from 'react-dom'
import Header from './components/header/header.js'
import Main from './components/main/main.js'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { createStore } from 'redux'
import injectTapEventPlugin from 'react-tap-event-plugin'
import { clock } from './redux/reducer'
import { countDown } from './redux/action'
import { Provider } from 'react-redux'

injectTapEventPlugin();

let store = createStore(clock)

ReactDom.render(
    <Provider store={store}>
        <MuiThemeProvider>
            <div>
                <Header/>
                <Main/>
            </div>
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('app')
);







