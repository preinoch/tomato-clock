import React, { Component } from 'react'
import style from './login.css'
import FlatButton from 'material-ui/FlatButton'
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import {post} from '../../util/request.js';
import Snackbar from 'material-ui/Snackbar';


export default class Login extends Component{
    constructor () {
        super()
        this.state = {
            username:'',
            password:'',
            passwordConfirm:'',
            nickName:'',
            modalOpen: false,
            hintOpen: false,
            hintText: ''
        }
    }

    handleModalOpen() {
        this.setState({
            modalOpen: true
        })
    }

    handleModalClose() {
        this.setState({
            username:'',
            password:'',
            passwordConfirm:'',
            nickName:'',
            modalOpen: false
        })
    }

    handleUsernameChange(e) {
        this.setState({
            username: e.target.value
        })
    }

    handlePasswordChange(e) {
        this.setState({
            password: e.target.value
        })
    }

    handlePasswordConfirmChange(e) {
        this.setState({
            passwordConfirm: e.target.value
        })
    }

    handleNickNameChange(e) {
        this.setState({
            nickName: e.target.value
        })
    }

    handleRequestClose() {
        this.setState({
            hintOpen: false
        });
    };

    handleRegisterFetch() {
        post('/user/register',
            {
                username: this.state.username,
                password: this.state.password,
                nickName: this.state.nickName
            }, () => {
                this.setState({
                    hintOpen: true,
                    modalOpen: false,
                    hintText: "注册成功"
                });
            }, () => {
                this.setState({
                    hintOpen: true,
                    hintText: "注册失败"
                });
            }
         )
    }

    render () {
        return (
            <div className={style.login}>
                <FlatButton className={style['login-btn']} label="登陆"/>
                <FlatButton onTouchTap={this.handleModalOpen.bind(this)} label="注册"/>
            </div>
        )
    }
} 
