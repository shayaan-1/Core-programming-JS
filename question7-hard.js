//Given an integer array nums, return the length of the longest strictly increasing subsequence

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  let length = [];
  for(let i=0; i<nums.length; i++){
    length[i] = 1;
    for(let j=0; j<i; j++){
        if(nums[j] < nums[i]){
            length[i] = Math.max(length[i],length[j]+1)
        }
    }
  }  

    var max = length[0];
    for(let i=0; i<length.length; i++){
        if(length[i] > max){
            max = length[i]
        }
    }
    // console.log(max)
    return max;
};

lengthOfLIS([10,9,2,5,3,7,101,18])


var lengthOfLISOptimised = function(nums) {
  if (nums.length === 0) return 0;

  let dp = [];
  
  for (let num of nums) {
    let left = 0, right = dp.length;

    console.log(left + " " + right)

    while (left < right) {
      let mid = Math.floor((left + right) / 2);
      console.log(mid + " mid one " + dp[mid])
      if (dp[mid] < num) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
    
    dp[left] = num;
  }
  
  return dp.length;
};

console.log(lengthOfLISOptimised([10, 9, 2, 5, 3, 7, 101, 18])); // Output: 4