//Given an array of integers arr, return the number of subarrays with an odd sum.

/**
 * @param {number[]} arr
 * @return {number}
 */
var numOfSubarrays = function(arr) {
    let sum = 0;
    let count = 0;
    for(let i = 0; i<arr.length; i++){
        sum = arr[i];
        if(sum%2!=0)
            count++;
        
        if(i < arr.length - 1){
            for(let j=i+1; j<arr.length; j++){
                sum += arr[j]
                if(sum%2 !== 0){
                    count++
                }
            }
        }
    }
    return count;
};

console.log(numOfSubarrays([1,3,5]))

var numOfSubarraysOptimised = function(arr) {
    const MOD = 10**9 + 7;
    let odd = 0;
    let even = 1; 
    let count = 0;
    let sum = 0;

    for (let num of arr) {
        sum += num;
        if (sum % 2 === 0) {
            count = (count + odd) % MOD;
            even++;
        } else {
            count = (count + even) % MOD;
            odd++;
        }
    }

    return count;
};