import React, { Component } from 'react'
import style from './main.css'
import Todo from './todo.js'
import Time from './time.js'


export default class Main extends Component{
    render () {
        return (
            <div className={style.main}>
                <Todo/>
                <Time/>
            </div>
        )
    }
} 
