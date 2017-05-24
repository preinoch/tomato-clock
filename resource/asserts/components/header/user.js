import React, { Component } from 'react'
import style from './login.css'
import FlatButton from 'material-ui/FlatButton'
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import {post} from '../../util/request.js';
import Snackbar from 'material-ui/Snackbar';
import Register from './register.js'
import Login from './login.js'


export default class User extends Component{
    constructor () {
        super()
        this.state = {
            loginOpen: false,
            registerOpen: false,
        }
    }

    handleLoginOpen() {
        this.setState({
            loginOpen: true
        })
    }

    handleRegisterOpen() {
        this.setState({
            registerOpen: true
        })
    }

    render() {
        
        return (
            <div className={style.login}>
                <FlatButton className={style['login-btn']} onTouchTap={this.handleLoginOpen.bind(this)} label="登陆"/>
                <FlatButton onTouchTap={this.handleRegisterOpen.bind(this)} label="注册"/>
                <Register modalOpen={this.state.registerOpen}/>
                <Login modalOpen={this.state.loginOpen}/>
            </div>
        )
    }
} 
