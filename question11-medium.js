//Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer.

/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    let num = 0;
    let sign = 1;
    for(let i=0; i<s.length; i++){
        if(s[i] === ' '){
            continue;
        }
        else if(s[i] === '-'){
            if(i>0 && s[i-1]===' '){
                sign = 0;
                continue;
            }
            break;
        }
        else if(s[i] < '0' || s[i]>'9'){
            break;
        }
        else{
            num = num*10 + (s[i] * 1)
            // console.log(num)
        }
    }

    if(sign === 0){
        num = -num
    }

    return num;
};

console.log(myAtoi("1337c0d3"))