


/**
 * some method of admin
 */

export const ResetClock = 'ResetClock';
export const CountDown = 'CountDown';
export const StartClock = 'StartClock';

export const countDown = function() {
    return {
        type: CountDown
    }
}

export const resetClock = function() {
    return {
        type: ResetClock
    }
}

export const startClock = function() {
    return {
        type: StartClock
    }
}
