const numbers =[2,7,11,15];
const target = 9;

function twoSumQuadratic(input,target){
    for(let i=0;i<numbers.length;i++){
        for(let e=i+1;e<numbers.length;e++){
            if(input[i]+input[e]==target){
                console.log(input[i] + ' ' + input[e])
            }
        }
    }
}

twoSumQuadratic(numbers,target);