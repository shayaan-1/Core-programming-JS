//Given an array, find the minimum length subarray whose sum is greater than or equal to a given number.

function minSubArray(nums , target){
    let minLength = nums.length + 1;
    let start = 0
    let end = 0
    let sum = 0

    while(end < nums.length){
        if(nums[end] >= target)
            return 1
        
        sum += nums[end]

        if(sum >= target && end-start < minLength){
            minLength = end - start + 1;
        }

        while(sum >= target && start <= end){
            sum -= nums[start];
            start++;
            if(sum < target){
                continue;
            }
            minLength = end - start + 1;
            console.log("Sum = " + sum)
        }

        end++
    }

    if(minLength === nums.length+1)
        minLength = 0

    return minLength
}

console.log(minSubArray([1,2,3,4,5],15))

//[3,7,1,2] , 4


function minSubArrayOptimised(nums,target){
    let minLength = nums.length + 1;
    let start = 0;
    let end = 0;
    let sum = 0;

    while (end < nums.length) {
        sum += nums[end];

        while (sum >= target) {
            minLength = Math.min(minLength, end - start + 1);
            sum -= nums[start];
            start++;
        }
        end++;
    }

    if (minLength === nums.length + 1) {
        return 0;
    }

    return minLength;

}

