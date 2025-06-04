var set =[97,24,-2,35,7];

// loop thru
const process=(numbers)=>{
    for(var n of numbers){
        if(n%2==0){console.log(n+ ' is even')}
        else console.log(n+ ' is odd')
    }
}

process(set);

console.log("\n");


// function + forEach
const set2 = [-141,741,500,-170];

const process2=(number)=>{
    if(number%2==0){console.log(number + ' is even')}
    else console.log(number + ' is odd')
}

set2.forEach(process2);


console.log("\n");


// rewrite using the arrow functions
const eveneodd=(number)=>
{if(number%2==0){console.log(number + ' is even')}
    else console.log(number + ' is odd')
}

console.log();
eveneodd(27);

console.log();
const set3=[6,5,17,25,40,46];
set3.forEach(eveneodd);

console.log();
// ternary 

function evenOrOdd(number){
    (number%2==0)? console.log(number +' is even'):console.log(number + ' is odd');
}

evenOrOdd(26);
evenOrOdd(27);