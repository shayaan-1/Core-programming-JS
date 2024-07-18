//Find the majority element in an array (element that appears more than n/3 times).

//Obs: There can be 2 elements only

function majority3Elem(nums){
    let map = new Map();
    let res = []

    for(let i=0; i<nums.length; i++){
        if(map.has(nums[i])){
            let curr = map.get(nums[i])
            curr++
            map.set(nums[i],curr)
        }
        else{
            map.set(nums[i],1)
        }
    }

    for(i=0; i<nums.length; i++){
        if(map.get(nums[i]) > nums.length/3){
            res.push(nums[i])
            map.delete(nums[i])
        }
    }

    return res
}

console.log(majority3Elem([3,2,3]))


function majority3ElemOptimised(nums) {
    if (!nums.length) return [];

    let candidate1 = null, candidate2 = null;
    let count1 = 0, count2 = 0;

    // First pass: Find potential candidates
    for (let num of nums) {
        if (candidate1 !== null && num === candidate1) {
            count1++;
        } else if (candidate2 !== null && num === candidate2) {
            count2++;
        } else if (count1 === 0) {
            candidate1 = num;
            count1 = 1;
        } else if (count2 === 0) {
            candidate2 = num;
            count2 = 1;
        } else {
            count1--;
            count2--;
        }
    }

    // Second pass: Verify candidates
    count1 = 0;
    count2 = 0;
    for (let num of nums) {
        if (num === candidate1) {
            count1++;
        } else if (num === candidate2) {
            count2++;
        }
    }

    let res = [];
    if (count1 > nums.length / 3) {
        res.push(candidate1);
    }
    if (count2 > nums.length / 3) {
        res.push(candidate2);
    }

    return res;
}

console.log(majority3ElemOptimised([3, 2, 3])); 
console.log(majority3ElemOptimised([1, 1, 1, 3, 3, 2, 2, 2])); 
