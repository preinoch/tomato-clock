import React, { Component } from 'react';
import style from './header.css'
import Logo from './logo.js'
import Login from './login.js'
import User from './user.js'

export default class Header extends Component{
    render () {
        return (
            <div className={style.header}>
                <Logo/>
                <User/>
            </div>
        )
    }
} 