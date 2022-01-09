var numbers=[];
var numberInput=document
            .getElementById('number');
var numberList=document.getElementById('numberList');
var consoleDiv=document.getElementById('console');
// var _sum=0;
// var _avg=0;
// var _lo=NaN;
// var _count=0;

var addToList=function(){
    var value= numberInput.value;

    var number= + value; //+ is similar to parseFloat
    if(!isNaN(number) && value){
        numbers.push(number);
    //    _sum+=number;
    //    _count++;
    //    _avg=_sum/_count;
    //    if(isNaN(_lo) || number<_lo)
    //         _lo=number;
      
        numberList.innerHTML+='<li>'+number+'</li>';
    } else {
        var p= document.createElement('p');
        p.append(document.createTextNode('Invalid Input:"'+value+'"'));
        consoleDiv.append( p);
    }
}

var sum=function(){
    var result=0;
    for(var i=0; i<numbers.length; i++)
        result+=numbers[i];

    consoleDiv.innerHTML+='<p> sum is :'+result+'</p>';
    return result;
}

var average=function(){
    var result=sum()/numbers.length;

    //result/=numbers.length
    consoleDiv.innerHTML+='<p> Average is :'+result+'</p>';
}

var findMin=function(){
    var lo=NaN;
    for(var number of numbers){
        if(isNaN(lo))
            lo=number; //only for first number
        else if(number<lo)
            lo=number;
    }

    consoleDiv.innerHTML+='<p> Min is :'+lo+'</p>';
}


var reset=function(){
    console.log('clearing the UI');
    clear();    //clear UI
    numbers=[]; //clear memory
}
var clear=function(){
    
    numberList.innerHTML='';
    consoleDiv.innerHTML='';
    numberInput.value='';
}