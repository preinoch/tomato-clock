import React, { Component } from 'react';
import style from './time.css'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Checkbox from 'material-ui/Checkbox';

export default class Time extends Component{
    render () {
        return (
            <Card className={style.time}>
                <CardHeader title="时钟"/>
                <CardActions style={{padding: '0 16px'}}>
                    
                </CardActions>  
            </Card>
        )
    }
} 