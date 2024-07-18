//Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
  let ans = 0;
  let left = 0;
  let window = 0;
  
  for(let right=0; right<nums.length; right++){
    window = window + nums[right];
    while(window + k < right - left + 1){
        window = window - nums[left];
        left++;
    }
    ans = Math.max(ans, right - left + 1);
  }
  return ans;
};