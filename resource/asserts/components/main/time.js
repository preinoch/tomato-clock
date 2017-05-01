import React, { Component } from 'react';
import style from './time.css'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Checkbox from 'material-ui/Checkbox';
import Clock from './clock.js'
import { countDown, resetClock, startClock } from '../../redux/action'
import { connect } from 'react-redux'

class Time extends Component{
    render () {
        const { dispatch, tomatoClock, clockStatus } = this.props
        return (
            <Card className={style.time}>
                <CardHeader title="时钟"/>
                <CardActions style={{padding: '0 16px', height: '360px'}}>
                    <Clock 
                    tomatoClock={ tomatoClock } 
                    clockStatus={ clockStatus }
                    handleStartClock={ () => dispatch(startClock()) }
                    handleCountDown={ () => dispatch(countDown()) }
                    handleResetClock={ () => dispatch(resetClock()) }/>
                </CardActions>
            </Card>
        )
    }
} 

function select(state) {
    return {
        tomatoClock: state.tomatoClock,
        clockStatus: state.clockStatus
    };
}

export default connect(select)(Time);