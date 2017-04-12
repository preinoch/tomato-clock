import React, { Component } from 'react';
import style from './logo.css'

export default class Logo extends Component{
    render () {
        return (
            <div className={style.logo}>
                <i className="icon-font icon-05"></i><span className={style['logo-text']}>番茄时钟</span>
            </div>
        )
    }
} 