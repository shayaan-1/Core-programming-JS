//The next permutation of an array of integers is the next lexicographically greater permutation of its integer.
// More formally, if all the permutations of the array are sorted in one container according to their
// lexicographical order, then the next permutation of that array is the permutation that follows it in
// the sorted container. If such arrangement is not possible, the array must be rearranged as the lowest possible order (i.e., sorted in ascending order).

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var nextPermutation = function(nums) {
    let n = nums.length - 1;
    let infpt = -1;

    for (let i = n; i > 0; i--) {
        if (nums[i] > nums[i - 1]) {
            infpt = i - 1;
            break;
        }
    }

    if (infpt === -1) {
        reverse(nums, 0, n);
    } else {
        for (let i = n; i > infpt; i--) {
            if (nums[i] > nums[infpt]) {
                [nums[infpt], nums[i]] = [nums[i], nums[infpt]];
                break;
            }
        }

        reverse(nums, infpt + 1, n);
    }
};

function reverse(nums, start, end) {
    while (start < end) {
        [nums[start], nums[end]] = [nums[end], nums[start]];
        start++;
        end--;
    }
}

console.log(nextPermutation([1,3,2]))
