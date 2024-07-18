//You are given positive integers n and m. Define two integers, num1 and num2, as follows: 
//num1: The sum of all integers in the range [1, n] that are not divisible by m. 
//num2: The sum of all integers in the range [1, n] that are divisible by m. 
//Return the integer num1 - num2. 

/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var differenceOfSums = function(n, m) {
    let sum1 = 0, sum2 = 0;
    for(let i=1; i<=n; i++){
        if(i%m != 0){
            sum1 += i;
        }
    }

    for(let i=1; i<=n; i++){
        if(i%m == 0){
            sum2 += i;
        }
    }

    return sum1 - sum2;
};