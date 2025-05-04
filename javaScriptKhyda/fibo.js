const fibonacciTerm = (number)=>{
if(number<=1){return number};
return fibonacciTerm(number-1)+fibonacciTerm(number-2);
}

const fibonacciTerm2 = (number)=>{
   return (number<=1)? number :fibonacciTerm2(number-1)+fibonacciTerm2(number-2);
    }

function fibonacciSequence(number){
    for(i=1;i<=number;i++){
        console.log(fibonacciTerm(i));
    }
}

console.log(fibonacciTerm(1));
console.log(fibonacciTerm(2));
console.log(fibonacciTerm(3));

console.log();

fibonacciSequence(3);
console.log();

fibonacciSequence(5);

console.log();

fibonacciSequence(8);

console.log('Ternary:');

console.log(fibonacciTerm2(8));