// import 'fetch-polyfill';

export const adad = "adadad";

export function post(url, postData, done, fail) {
    let searchParams = new URLSearchParams()

    for( var i in postData ) {
        searchParams.set(i, postData[i]);
    }

    let config = {
        method: 'post',
        body: searchParams
    };
    
    fetch(url, config).then(function(res) {
        res.json().then(function(data){
            console.log(data);
            if( data.status === 0 ) {
                done.call(done, data.msg, data.data);
            }else {
                fail(data.status, data.message, data.data);
            }
        });
    }).catch(function(e) {
        fail && fail.call(this);
    })
}
