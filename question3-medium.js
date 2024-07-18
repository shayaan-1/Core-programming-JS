//Given the array nums after the possible rotation and an integer target, 
//return the index of target if it is in nums, or -1 if it is not in nums.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var inSortedRotated = function(nums, target) {
    let start = 0;
    let end = nums.length - 1;
    var mid = -1;

    while(start <= end){
        mid = Math.floor((start+end)/2)

        if(nums[mid] === target)
            return mid;

        if(nums[start] <= nums[mid]){
            if(target >= nums[start] && target < nums[mid]){
                end = mid - 1;
            }
            else{
                start = mid + 1;
            }
        }
        else{
            if(target <= nums[end] && target > nums[mid]){
                start = mid + 1;
            }
            else{
                end = mid - 1;
            }
        }
    }

    return -1;
};

console.log(inSortedRotated([4,5,6,7,0,1,2],0))