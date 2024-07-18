//Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. 
//Then return the number of elements in nums which are not equal to val.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var removeDuplicate = function(nums,target){
    let res = [];
    let idx = 0;
    for(let i=0; i<nums.length; i++){
        if(nums[i] !== target){
            res[idx] = nums[i];   
            idx++;
        }
       
    }
    return res;
};

// console.log(removeDuplicate([1,2,3,4,1,2,5,6],1))


var removeDuplicateOptimised = function(nums,target){
    let idx = 0;
    for(let i=0; i<nums.length; i++){
        if(nums[i] !== target){
            nums[idx] = nums[i];   
            idx++;
        }
    }
    return nums;
};

//Actual array was to be changed we are not concerned with last values.

console.log(removeDuplicateOptimised([1,2,3,4,1,2,5,6],1))
