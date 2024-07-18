// Given an integer array nums, find a subarray that has the largest product, and return the product.
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let first = 1;
    let second = 1;

    let ans = Number.MIN_SAFE_INTEGER

    for(let i=0; i<nums.length; i++){
        if(first === 0)
            first = 1
        if(second === 0)
            second = 1

        first = first * nums[i]
        second = second * nums[nums.length - i -1]
        ans = Math.max(ans,Math.max(first,second))
    }
    return ans
};


console.log(maxProduct([2, 3, -2, 3]));
console.log(maxProduct([-2, 0, -1]));    
console.log(maxProduct([-2, -3, 7]));    