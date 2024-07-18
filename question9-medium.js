//Reverse an integer

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let newNum = 0;
    let i = 10;
    let div = 10;
    let isNeg = x<0;
    x = Math.abs(x)

    while(x != 0 ){
        let rem = x % div;
        newNum = i*newNum + rem;
        x = Math.floor(x/div);
    }

    if (newNum > 2**31 - 1 || newNum < -(2**31)) {
        return 0;
    }

    if(isNeg)
        newNum = -newNum
    console.log(newNum)
};

reverse(-123)