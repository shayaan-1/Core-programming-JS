//Write a function to find the longest common prefix string amongst an array of strings.
//If there is no common prefix, return an empty string "".

/**
 * @param {string[]} strs
 * @return {string}
 */

var longestCommonPrefix = function(strs) {
    let res = "";

    for(let i=0; i<strs.length; i++){
        if(strs[i] == ""){
            res = "";
        }
        // console.log(strs[i])
        for(let j = 0; j<strs[i].length; j++){
            // console.log(strs[i].length)
            if(i == 0){
                res += strs[i][j];
            }

            if(res.length > strs[i].length){
                res = res.slice(0,strs[i].length);
            }

            if(res[j] !== strs[i][j]){
                res = res.slice(0,j);
            }
        }
        // console.log("HAHAH " + res)
    }

    console.log(res);
};


longestCommonPrefix(["abab","aba",""])