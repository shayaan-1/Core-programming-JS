/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let first = -1;
    let last = -1;

    for(let i=0; i<nums.length; i++){
        if(first === -1 && last === -1 && nums[i] === target){
            first = i;
            last = i;
        }
        else if(nums[i] === target){
            last = i;
        }
    }

    return [first,last];
};

// console.log(searchRange([1,2,2,3,4,2,5],2))

function findFirst(nums,target){
    let start = 0;
    let end = nums.length - 1;
    var ans = -1;

    while(start <= end){
        let mid = Math.floor((start+end)/2);
        if(nums[mid] === target){
            ans = mid;
            end = mid - 1;
        }
        else if(target >= nums[mid]){
            start = mid + 1;
        }
        else{
            end = mid - 1;
        }
    }
    return ans;
}

function findLast(nums,target){
    let start = 0;
    let end = nums.length - 1;
    var ans = -1;

    while(start <= end){
        let mid = Math.floor((start+end)/2);
        if(nums[mid] === target){
            ans = mid;
            start = mid + 1;
        }
        else if(target >= nums[mid]){
            start = mid + 1;
        }
        else{
            end = mid - 1;
        }
    }
    return ans;
}

var searchRangeOptimised = function (nums, target){
    let first = findFirst(nums,target)
    let last = findLast(nums,target)
    return [first,last]
}

console.log(searchRangeOptimised([5,7,7,8,8,10],8))