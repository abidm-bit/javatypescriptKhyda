
function bumblebee(number){
    const answer = [];
    for(i=1;i<=number;i++){
        if(i %15==0){ answer.push("FizzBuzz")}
        else if(i % 3==0){answer.push("Fizz")}
        else if(i%5==0){answer.push("Buzz")}
        else {answer.push(i.toString())};
    }
    console.log(answer);
}


var fizzBuzz = function(n) {
    const answer =[];
    for(i=1;i<=n;i++){
        if(i%15==0){answer.push("FizzBuzz")}
        else if(i%3==0){answer.push("Fizz")}
        else if(i%5==0){answer.push("Buzz")}
        else answer.push(i.toString());
    }
    return answer;
};

bumblebee(15);

console.log("\n");

console.log(fizzBuzz(11));