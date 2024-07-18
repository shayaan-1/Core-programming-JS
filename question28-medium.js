//You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.
// /Return true if you can reach the last index, or false otherwise.

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let idx = nums.length -1;

    for(let i = idx; i>=0; i--){
        if(nums[i] + i >= idx){
            idx = i;
        }
    }

    if(idx == 0){
        return true;
    }

    return false;
};

console.log(canJump([2,3,1,1,4]))