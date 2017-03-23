import React, { Component } from 'react';
import style from './task.css'
import Checkbox from 'material-ui/Checkbox';

export default class Task extends Component{
    constructor(props) {
        super(props);
        this.state = {
            value: 1,
            tasks: props.tasks
        };
    }
    
    render () {
        let tasks = this.state.tasks;
        let tasksDom = [];
        if( tasks.length > 0 ) {
            for(let i = 0; i < tasks.length; i++) {
                tasksDom.push(
                    <div className={style.task}>
                        <Checkbox style={{display: 'inline-block', width: 'auto', verticalAlign: 'text-bottom'}}/>
                        <span>{tasks[i]['name']}</span>
                    </div>
                )
            }
        }
        
        
        return (
            <div>
                {tasksDom}
            </div>
        )
        
    }
}