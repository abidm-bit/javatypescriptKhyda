const numbers =[2,7,11,15];
const target = 9;

const twoSumQuadratic=(input,target)=>{
    for(let i=0;i<numbers.length;i++){
        for(let e=i+1;e<numbers.length;e++){
            if(input[i]+input[e]==target){
                console.log(input[i] + ' ' + input[e])
            }
        }
    }
}

twoSumQuadratic(numbers,target);

console.log("\n");

const twoSum =(nums, target)=> {
    const number =[];
    for(let i =0;i<nums.length;i++){
        for(let e = i+1; e<nums.length;e++){
            if(nums[i]+nums[e]===target){
                number.push(i);
                number.push(e);
            }
        }
    }
    console.log(number);
};
twoSum(numbers,target); //[0,1]