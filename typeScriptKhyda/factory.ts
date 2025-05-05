function factorial(number: number){
    let product =1; 
    for(let i=number; i>=1;i--){
        product*=i;
    }
    console.log("the factorial of "+ number + " is "+ product);
}


factorial(5); // expect 120
console.log();
factorial(6); // expect 720