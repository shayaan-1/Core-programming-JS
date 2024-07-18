//Given an array of integers nums, sort the array in ascending order and return it.
//You must solve the problem without using any built-in functions in O(nlog(n)) time complexity and with the smallest space complexity possible.

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    if (nums.length < 2) {
        return nums;
    }
    
    let mid = Math.floor(nums.length / 2);
    let left = sortArray(nums.slice(0, mid));
    let right = sortArray(nums.slice(mid));
    
    return merge(left, right);
};

function merge(left, right) {
    let i = 0;
    let j = 0;
    let res = [];
    
    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            res.push(left[i]);
            i++;
        } else {
            res.push(right[j]);
            j++;
        }
    }
    
    while (i < left.length) {
        res.push(left[i]);
        i++;
    }
    
    while (j < right.length) {
        res.push(right[j]);
        j++;
    }
    
    return res;
}

