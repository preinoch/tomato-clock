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
        const modalFooter = [
            <FlatButton
                label="注册"
                primary={true}
                onTouchTap={this.handleRegisterFetch.bind(this)}
            />,
            <FlatButton
                label="取消"
                primary={true}
                onTouchTap={this.handleModalClose.bind(this)}
            />
        ]

        return (
            <div className={style.login}>
                <FlatButton className={style['login-btn']} label="登陆"/>
                <FlatButton onTouchTap={this.handleModalOpen.bind(this)} label="注册"/>
                <Dialog
                title="注册用户"
                modal={true}
                open={this.state.modalOpen}
                actions={modalFooter}
                contentStyle={{width: "400px"}}
                > 
                    <TextField
                    hintText="用户名"
                    floatingLabelText="请输入用户名"
                    value={this.state.username}
                    onChange={this.handleUsernameChange.bind(this)}
                    /><br />
                    <TextField
                    type="password"
                    hintText="密码"
                    floatingLabelText="请输入密码"
                    value={this.state.password}
                    onChange={this.handlePasswordChange.bind(this)}
                    /><br />
                    <TextField
                    type="password"
                    hintText="确认密码"
                    floatingLabelText="请输入确认密码"
                    value={this.state.passwordConfirm}
                    onChange={this.handlePasswordConfirmChange.bind(this)}
                    /><br />
                    <TextField
                    hintText="昵称"
                    floatingLabelText="请输入昵称"
                    value={this.state.nickName}
                    onChange={this.handleNickNameChange.bind(this)}
                    />
                </Dialog>
                <Dialog
                title="登录"
                modal={true}
                open={this.state.modalOpen}
                actions={modalFooter}
                contentStyle={{width: "400px"}}
                > 
                    <TextField
                    hintText="用户名"
                    floatingLabelText="请输入用户名"
                    value={this.state.username}
                    onChange={this.handleUsernameChange.bind(this)}
                    /><br />
                    <TextField
                    type="password"
                    hintText="密码"
                    floatingLabelText="请输入密码"
                    value={this.state.password}
                    onChange={this.handlePasswordChange.bind(this)}
                    />
                </Dialog>
                <Snackbar
                open={this.state.hintOpen}
                message={this.state.hintText}
                autoHideDuration={4000}
                onRequestClose={this.handleRequestClose.bind(this)}
                />
            </div>
        )
    }
} 
