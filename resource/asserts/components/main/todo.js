import React, { Component } from 'react';
import style from './todo.css'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Checkbox from 'material-ui/Checkbox';

export default class Todo extends Component{
    render () {
        return (
            <Card className={style.todo}>
                <CardHeader title="待办事项"/>
                <CardActions style={{padding: '0 16px'}}>
                    <Checkbox
                    label="Simple"
                    className={style.checkbox}
                    />
                    <Checkbox
                    label="hard"
                    className={style.checkbox}
                    />
                </CardActions>  
            </Card>
        )
    }
} 