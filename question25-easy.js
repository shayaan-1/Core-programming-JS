//Find leading integers in array. Leading integers are the integers having no value greater than them to their right. 

function leadingIntegers(nums){
    let res = [];
    let r = nums.length-1;
    let max = nums[r];
    res.push(max);
    r--;

    while(r>=0){
        if(nums[r] > max){
            max = nums[r];
            res.push(max);
        }
        r--;
    }

    return res;
}

console.log(leadingIntegers([1,3,5,2,4]))