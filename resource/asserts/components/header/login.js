import React, { Component } from 'react'
import style from './login.css'
import FlatButton from 'material-ui/FlatButton'

export default class Login extends Component{
    render () {
        return (
            <div className={style.login}>
                <FlatButton className={style['login-btn']} label="登陆"/>
                <FlatButton label="注册"/>
            </div>
        )
    }
} 