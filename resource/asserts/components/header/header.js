import React, { Component } from 'react';
import style from './header.css'
import Logo from './logo.js'

export default class Header extends Component{
    render () {
        return (
            <div className={style.header}>
                <Logo/>
            </div>
        )
    }
} 