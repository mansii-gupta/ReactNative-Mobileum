

Array.prototype.search = function (match) {
    let result = [];
    for (let value of this) {
        if (match(value))
            result.push(value);
    }
    return result;
}

Array.prototype.print = function (header) {
    console.log(header);
    for (let value of this) {
        console.log(value);
    }
}

Array.prototype.each = function (action) {
    for (let value of this)
        action(value);
};

Array.prototype.select = function (selector) {
    let result = [];
    for (let value of this)
        result.push(selector(value));

    return result;
}

const getQueryParams=()=>{
    console.log(window.location.search)
    //window.location.search --->   ?isbn=1234&info=short&format=json
    const search = window.location.search.substring(1).split('&');

    //search --> ["isbn=1234","format=json","info=short"]
    const params = {};

    for (let keyvalue of search) {

        let [key, value] = keyvalue.split('='); //key=isbn, value=1234
        //console.log(key,value);
        params[key] = value; //{isbn:"1234", info:"short", format:"json"}
    }

    return params;
}