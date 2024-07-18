//Find the maximum product of two integers in an array.

function maxProd(nums){
    let maxVal = nums[0];
    let secondMax = nums[0];

    for(let i=0; i<nums.length; i++){
        if(nums[i] > maxVal){
            maxVal = nums[i]
        }
    }

    for(let i = 0; i<nums.length; i++){
        if(nums[i] > secondMax && nums[i] < maxVal){
            secondMax = nums[i]
        }
    }

    console.log("Max Val: " + maxVal + "\nSecond Max: " + secondMax);
    console.log("Product: " + maxVal*secondMax);
}

// maxProd([2,3,1,8,3,0,6])


function maxProdOptimised(nums){
    let maxVal = nums[0];
    let secondMax = nums[0];

    for(let i=0; i<nums.length; i++){
        if(nums[i] > maxVal){
            maxVal = nums[i]
        }
        if(nums[i] > secondMax && nums[i] < maxVal){
            secondMax = nums[i]
        }
    }

    console.log("Max Val: " + maxVal + "\nSecond Max: " + secondMax);
    console.log("Product: " + maxVal*secondMax);
}

maxProdOptimised([2,3,1,8,3,0,6])
