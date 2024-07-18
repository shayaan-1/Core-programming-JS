//Given an array of integers, find the maximum sum of a subarray (Kadane's Algorithm)

function maxSubArray(nums){
    let sum = 0;
    let maxi = nums[0];

    for(let i=0; i<nums.length; i++){
        sum += nums[i];

        maxi = Math.max(maxi,sum)

        if(sum < 0)
            sum = 0;
    }

    return maxi;
}

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))