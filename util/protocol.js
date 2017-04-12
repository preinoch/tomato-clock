/**
 * api protocol
 */


var protocol = function(message='', data='', status=0) {
    let response = {};
    response.status = status;
    response.data = '';
    response.message = message;
    return JSON.stringify(response);
}

module.exports =  protocol;
