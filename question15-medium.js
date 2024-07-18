//Find the missing number in an array containing n distinct numbers taken from 0, 1, 2, ..., n.

function findMissingNum(nums){
    let sum = 0;
    let reqSum = nums.length;
    for (let i=0; i<nums.length; i++){
        sum += nums[i];
        reqSum += i;
    }

    return reqSum - sum;
}

console.log(findMissingNum([1,2,4,3,5]))