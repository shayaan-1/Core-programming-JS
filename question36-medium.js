//Given a string s and an integer k, return the maximum number of vowel letters in any substring of s with length k.
//Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'.

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
function isvowel(c){
    if(c === 'a' || c === 'o' || c === 'i' || c === 'e' || c === 'u' )
        return 1;
    return 0;
}
var maxVowels = function(s, k) {
    let l = 0;
    let r = 0;
    let res = 0;
    let window = 0;

    for(; r<k; r++){
        if(isvowel(s[r]))
            window += 1;
    }
    res = window;

    while(r < s.length){
        window -= isvowel(s[l]);
        window += isvowel(s[r]);
        l++;
        r++;
        res = Math.max(res,window);

    }
    return res;
};