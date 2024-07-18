//Given a string s consisting of lowercase English letters, return the first letter to appear twice.

/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function(s) {
    let set = new Set();

    for(let i=0; i<s.length; i++){
        if(set.has(s[i])){
            return s[i];
        }
        else{
            set.add(s[i]);
        }
    }
};