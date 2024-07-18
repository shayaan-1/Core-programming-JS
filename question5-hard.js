//Rotate an array to the right by k steps.

function rotateArrayKSteps(nums, k){
    let part1 = []
    let part2 = []
    let idx1 = 0;
    let idx2 = 0;

    let reqIdx = nums.length - k;

    for(let i=0; i<reqIdx; i++){
        part1[idx1] = nums[i]
        idx1++
    }
    // console.log(part1)

    for(let i=reqIdx; i<nums.length; i++){
        part2[idx2] = nums[i]
        idx2++
    }

    // console.log(part2)

    for(let i=0; i<part2.length; i++){
        nums[i] = part2[i]
    }
    // console.log(nums)

    for(let i=0; i<part1.length; i++){
        nums[i+part2.length] = part1[i]
    }
    console.log(nums)
}

rotateArrayKSteps([-1,-100,3,99],2)


function rotateArrayKStepsOptimised(nums,k){
    let temp = []

    for(let i=0; i<nums.length; i++){
        temp[(i+k)%nums.length] = nums[i]
    }
    nums = temp
    console.log(nums)
}

rotateArrayKStepsOptimised([1,2,3,4,5,6,7],3)
