//Implement a function to sort an array of 0s, 1s, and 2s.

function sortArray(nums){
    let count0 = 0;
    let count1 = 0;
    let count2 = 0;

    for(let i=0; i<nums.length; i++){
        if(nums[i] === 0)
            count0++;
        else if(nums[i] === 1)
            count1++;
        else{
            count2++;
        }
    }

    let idx = 0;
    while(count0 > 0){
        nums[idx] = 0;
        count0--;
        idx++;
    }
    while(count1 > 0){
        nums[idx] = 1;
        count1--;
        idx++;
    }
    while(count2 > 0){
        nums[idx] = 2;
        count2--;
        idx++;
    }

    return nums;
}

console.log(sortArray([1,0,1,0,2,1,2,1,0]))