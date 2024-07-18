//Write a function to find all permutations of a string.

function permutationsOfAString(nums) {
    let res = [];
    solve(res, nums, 0);
    return res;
}


function solve(res,nums,idx){
    if(idx === nums.length){
        res.push([...nums]);
        return;
    }

    for(let i=idx; i<nums.length; i++){
        [nums[i], nums[idx]] = [nums[idx], nums[i]];
        solve(res,nums,idx+1);

        [nums[i], nums[idx]] = [nums[idx], nums[i]];
    }
}

console.log(permutationsOfAString([1,1,3])); 
