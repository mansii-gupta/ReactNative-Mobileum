const promisedReadableStream=(stream)=>{

    return new Promise((resolve, reject)=>{

        let data='';
        stream
            .on('data', buffer=> data+=buffer.toString())
            .on('end',()=>resolve(JSON.parse(data)))
            .on('error', error=>reject(error));

    });
}

module.exports={
    promisedReadableStream
};