//Given an integer array nums of unique elements, return all possible subsets (the power set)

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let res = [];

    function solve(arr,val){

        if(val === nums.length){
            res.push([...arr]);
            // console.log([...arr])
            // console.log("arr" + nums.length)
            return;
        }
        else{
            // console.log(val);
            solve(arr,val+1);
            arr.push(nums[val]);
            // console.log(arr)
            solve(arr,val+1);
            arr.pop();
        }
    }

    solve([],0);
    return res;
};

console.log(subsets([1,2,3]))