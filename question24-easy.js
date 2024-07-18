//Sum of unique elements in an array

function sumOfUnique(nums){
    let map = new Map();
    let sum = 0;
    for(let i=0; i<nums.length; i++){
        if(map.has(nums[i])){
            let val = map.get(nums[i]);
            map.set(nums[i],val+1);
        }else{
            map.set(nums[i],1);
        }
    }

    for(let key of map.keys()){
        if(map.get(key) == 1){
            sum += key;
        }
    }

    return sum;
}

console.log(sumOfUnique([1,2,3,4,5,2,3]))