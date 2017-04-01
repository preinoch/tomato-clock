import React, { Component } from 'react';
import style from './task.css'
import Checkbox from 'material-ui/Checkbox';
import _ from 'lodash';

export default class Task extends Component{
    constructor(props) {
        super(props);
        // console.log(props.tasks);
        props.tasks.forEach(function(value, index, arr) {
            props.tasks[index]['checked'] = false;
            
            // i=.checked = false;
        })
        this.state = {
            tasks: props.tasks,
            allNotChecked: false
        };
    }

    handleTouch (taskId) {
        let tasks = [];
        this.state.tasks.forEach(function(value, index, arr) {
            if( value.id === taskId ) {
                tasks[index] = arr[index];
                tasks[index].checked = true;
            }else {
                tasks[index] = arr[index];
            }
        })
        this.setState({ tasks: tasks });
        setTimeout(this.removeTask.bind(this,taskId), 1000);
    }

    removeTask (taskId) {
        let tasks = this.state.tasks;
        _.remove(tasks, function(n) {
            return n.id == taskId;
        })
        this.setState({tasks: tasks})
    }

    handleCheckboxChange (event) {
        console.log("checkbox changed!", event);
        this.setState({isChecked: event.target.checked});
    }
    
    render () {
        let tasks = this.state.tasks;
        let tasksDom = [];
        if( tasks.length > 0 ) {
            for(let i = 0; i < tasks.length; i++) {
                if( this.state.allNotChecked ) {
                    tasksDom.push(
                        <div className={style.task}>
                            <Checkbox 
                            style={{display: 'inline-block', width: 'auto', verticalAlign: 'text-bottom'}} 
                            checked={tasks[i]['checked']}
                            onChange={this.handleCheckboxChange}
                            onTouchTap={this.handleTouch.bind(this,tasks[i]['id'])}/>
                            <span>{tasks[i]['name']}</span>
                        </div>
                    )
                }else {
                    tasksDom.push(
                        <div className={style.task}>
                            <Checkbox 
                            style={{display: 'inline-block', width: 'auto', verticalAlign: 'text-bottom'}} 
                            checked={tasks[i]['checked']}
                            onChange={this.handleCheckboxChange}
                            onTouchTap={this.handleTouch.bind(this,tasks[i]['id'])}/>
                            <span>{tasks[i]['name']}</span>
                        </div>
                    )
                }   
            }
        }
        
        return (
            <div>
                {tasksDom}
            </div>
        )
        
    }
}