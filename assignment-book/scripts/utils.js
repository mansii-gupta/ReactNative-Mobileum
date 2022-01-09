

Array.prototype.search=function( match){
    let result=[];
    for(let value of this){
        if(match(value))
            result.push(value);
    }
    return result;
}

Array.prototype.print=function(header){
    console.log(header);
    for(let value of this){
        console.log(value);
    }
}

Array.prototype.each=function(action){
    for(let value of this)
        action(value);
};

Array.prototype.select=function(selector){
    let result=[];
    for(let value of this)
        result.push(selector(value));

    return result;
}