/**
 * @param {number[]} nums
 * @param {number} indexDiff
 * @param {number} valueDiff
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function(nums, indexDiff, valueDiff) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (Math.abs(nums[i] - nums[j]) <= valueDiff && Math.abs(i - j) <= indexDiff) {
                return true;
            }
        }
    }
    return false;
};

console.log(containsNearbyAlmostDuplicate([1, 5, 9, 1, 5, 9], 2, 3));  // Output: true
