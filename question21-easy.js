//Given a 0-indexed integer array nums of length n and an integer target, return the number of pairs (i, j) where 0 <= i < j < n and nums[i] + nums[j] < target.

function findPairs(nums,target){
    nums = nums.sort();
    let l=0, r=nums.length-1;
    let res = 0;

    while(l!=r){
        if(nums[l] + nums[r] < target){
            res += r - l;
            l++;
        }else{
            r--;
        }
    }
}