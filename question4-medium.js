//Since it is impossible to change the length of the array in some languages, 
//you must instead have the result be placed in the first part of the array nums. 
//More formally, if there are k elements after removing the duplicates, 
//then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums.length === 0)
        return; 

    let idx = 1;
    let count = 1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i - 1]) {
            count++;
        } else {
            count = 1;
        }

        if (count <= 2) {
            nums[idx] = nums[i];
            idx++;
        }
    }
    return idx
};