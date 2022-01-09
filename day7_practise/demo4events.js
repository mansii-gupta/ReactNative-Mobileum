
const fs=require("fs"); //note: we don't use ./ or ../ prefix here

//console.log('fs',fs);

 const events=fs.createReadStream('C:\\current-training-name\\my-work\\day7_practise\\sample-large.txt');

 let fileContent='';

 events    
    .on("data", buffer=>{  //when file reads some data. called multiple times
        const data=buffer.toString();
        console.log(`[${Math.floor(data.length/1024)}K] `);
        fileContent+=data;
    })
    .on("end",_=>{  //when all data hase been read. called only once.
        process.stdout.write('file read\n-----------------\n\n');
        process.stdout.write('total size is '+fileContent.length);
        console.log('end');
    })
    .on("error", error=> console.error("ERROR READING FILE:",error.message)); //called only once

 //you reach here before readFile finishes it's work
console.log('please wait while we read the file...');
