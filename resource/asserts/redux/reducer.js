import { createStore } from 'redux'



/**
 * initial state
 */

let initialState = {
    tomatoClock: 2500,
    clockStatus: 0,  // 0 means clock off, 1 means clock on; 
}


function todo(state = initialState, action) {
    switch( action.type ) {
        case 'START_CLOCK': 
            return Object.assign({}, )
        
    }
}


function startClock( state = initialState , action ) {
    
}


