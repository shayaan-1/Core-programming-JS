//Q51: Given an input string s, reverse the order of the words.
//Note that s may contain leading or trailing spaces or multiple spaces between two words. 
//The returned string should only have a single space separating the words. 
//Do not include any extra spaces. (Q25: medium)


/**
 * @param {string} s
 * @return {string}
 */

//with built-in functions: 

// var reverseWords = function(s) {
//     let res = [];
//     res = s.split(" ");
//     res = res.filter(s => s!="");
//     res.reverse();
//     let ans = res.join(" ");
//     console.log(ans);
// };

// reverseWords("    hello    world  ");


var reverseWords = function(s) {
    let res = [];
    let word = "";

    for (let i = 0; i < s.length; i++) {
        if (s[i] !== " ") {
            word += s[i];
        } else if (word.length > 0) {
            res.push(word);
            word = "";
        }
    }

    if (word.length > 0) { //for last word
        res.push(word);
    }

    for (let i = 0; i < Math.floor(res.length / 2); i++) {
        [res[i],res[res.length - 1 - i]] = [res[res.length - 1 - i],res[i]];
    }

    let ans = "";
    for (let i = 0; i < res.length; i++) {
        ans += res[i];
        if (i < res.length - 1) {
            ans += " ";
        }
    }

    console.log(ans);
};

reverseWords("    hello    world  ");
