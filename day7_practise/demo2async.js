
const fs=require("fs"); //note: we don't use ./ or ../ prefix here

//console.log('fs',fs);

const buffer= fs.readFile('C:\\current-training-name\\my-work\\day7_practise\\sample-large.txt', (error,buffer)=>{

    if(error){
        console.error('error:',error.message);
    } else{

        const data= buffer.toString(); //covert a buffer to plain text
        console.log('\n\ndata:',data.length/1024);
    }
}); 

//you reach here before readFile finishes it's work
console.log('please wait while we read the file...');
