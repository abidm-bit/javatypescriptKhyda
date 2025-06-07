var set =[97,24,-2,35,7];

// loop thru
function process(numbers){
    for(var n of numbers){
        if(n%2==0){console.log(n+ ' is even')}
        else console.log(n+ ' is odd')
    }
}

process(set);

console.log("\n");


// function + forEach
const set2 = [-141,741,500,-170];

function process2(number){
    if(number%2==0){console.log(number + ' is even')}
    else console.log(number + ' is odd')
}

set2.forEach(process2);


console.log("\n");


// ternary 

function evenOrOdd(number){
    (number%2==0)? console.log(number +' is even'):console.log(number + ' is odd');
}

evenOrOdd(26);
evenOrOdd(27);