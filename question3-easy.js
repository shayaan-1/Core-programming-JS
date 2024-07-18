//Given an integer array nums sorted in non-decreasing order, 
//remove the duplicates in-place such that each unique element appears only once. 
//The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var removeDuplicates = function(nums){
    if(nums.length < 2){
        return;
    }
    let idx = 0;
    for(let i=1; i<nums.length; i++){
        if(nums[i] === nums[idx])
            continue;
        else{
            idx++;
            nums[idx] = nums[i];
        }
    }
    return nums;    
};

console.log(removeDuplicates([1,1,2]))