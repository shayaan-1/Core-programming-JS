//Move 0s to the end of array

function moveZeros(nums){ //  = 
    let l = 0;
    let r = nums.length - 1;

    while(l<=r){
        if(l<=r && (nums[l] === 0 && nums[r]!==0)){
            [nums[l],nums[r]] = [nums[r],nums[l]];
            l++;
            r--;
        }
        if(l<=r && (nums[l] !== 0)){
            l++;
        }
        if(l<=r && (nums[r] === 0)){
            r--;
        }
    }
    return nums;
}

console.log(moveZeros([2,0,0,1,3,3]))