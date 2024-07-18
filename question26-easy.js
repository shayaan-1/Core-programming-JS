//Given a string s, return true if s is a good string, or false otherwise.
//A string s is good if all the characters that appear in s have the same number of occurrences (i.e., the same frequency).

/**
 * @param {string} s
 * @return {boolean}
 */

var areOccurrencesEqual = function(s) {
    let map = new Map();
    for(let i=0; i<s.length; i++){
        if(map.has(s[i])){
            let val = map.get(s[i]);
            map.set(s[i],val+1);
        }else{
            map.set(s[i],1);
        }
    }
        const frequencies = [...map.values()];
    
        const firstFrequency = frequencies[0];
        for(let freq of frequencies) {
            if(freq !== firstFrequency) {
                return false;
            }
        }
        
        return true;
};

areOccurrencesEqual("abcdsa")


var areOccurrencesEqualOptimise = function(s) {
    let map = new Map();
    
    for(let char of s) {
        map.set(char, (map.get(char) || 0) + 1);
    }
    
    const frequencies = new Set(map.values());
    
    return frequencies.size === 1;
};