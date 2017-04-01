import React, { Component } from 'react';
import style from './todo.css'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import Tasks from './task.js'

export default class Todo extends Component{
    constructor(props) {
        super(props);
        this.state = {
            value: 1,
        };
    }

    handleChange (event, index, value) {
        this.setState({value});
    }

    render () {
        return (
            <Card className={style.todo}>
                <div className='card-header'>
                    <h1 style={{display:'inline'}}>待办事项</h1>
                    <DropDownMenu value={this.state.value} onChange={this.handleChange.bind(this)} style={{verticalAlign: 'text-bottom'}}>
                        <MenuItem value={1} primaryText="当前任务" />
                        <MenuItem value={2} primaryText="全部任务" />
                    </DropDownMenu>
                </div>
                <CardActions style={{padding: '0 32px'}}>
                    <Tasks tasks={[{id: 1, name: "带吧1"},{id: 2, name: "3234"}]}/>
                </CardActions>  
            </Card>
        )
    }
} 

