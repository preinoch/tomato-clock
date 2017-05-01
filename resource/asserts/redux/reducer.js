import { createStore } from 'redux'



/**
 * initial state
 */

export let initialState = {
    tomatoClock: 1500,
    clockStatus: 0,  // 0 means clock off, 1 means clock on; 
}


export function clock(state = initialState, action) {
    switch( action.type ) {
        case 'CountDown': 
            if( state.tomatoClock === 0 ) {
                return state;
            }else {
                return Object.assign({}, state, {tomatoClock: state.tomatoClock-1});
            }
        case 'ResetClock':
            return Object.assign({}, state, {tomatoClock: 1500 , clockStatus: 0});
        case 'StartClock':
            console.log( state );
            return Object.assign({}, state, {clockStatus: 1});
        default: 
            return state;
    }
}


