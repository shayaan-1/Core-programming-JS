//Given an array of integers nums and an integer target,
// return indices of the two numbers such that they add up to target.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(let i=0; i<nums.length-1; i++){
        for(let j = i+1; j<nums.length; j++){
            if(nums[i] + nums[j] === target)
                return [i,j]
        }
    }
    return [];
};

var twoSumAdvanced = function(nums, target) {
    let map = {};
    
    for(let i =0; i<nums.length; i++){
        let diff = target - nums[i];
        if(map.hasOwnProperty(diff)){
            return [map[diff],i]
        }
        map[nums[i]] = i;
    }
    return [];
};

console.log(twoSumAdvanced([1,2,3,4,5],4))

