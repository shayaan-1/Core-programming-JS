//Given a string s, remove duplicate letters so that every letter appears once and only once.
/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function(s) {
    let res = new Set();

    for(let char of s){
        console.log(char);
        res.add(char);
    }
    console.log(res);

    let ans = "";
    for(let val of res){
        ans += val;
    }
    return ans;
};

console.log(removeDuplicateLetters("aadfghdbb"));

