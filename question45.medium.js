//Given a string s, sort it in decreasing order based on the frequency of the characters. The frequency of a character is the number of times it appears in the string.
//Return the sorted string. If there are multiple answers, return any of them.

/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    let map = new Map();
    for(let i=0; i<s.length; i++){
        if(map.has(s[i])){
            let val = map.get(s[i]);
            map.set(s[i],val+1);
        }else{
            map.set(s[i],1);
        }
    }

    let buckets = [];
    map.forEach((freq, char) => {
        if (!buckets[freq]) {
            buckets[freq] = [];
        }
        buckets[freq].push(char);
    });
    
    let result = '';
    for (let i = buckets.length - 1; i >= 0; i--) {
        if (buckets[i]) {
            for (let char of buckets[i]) {
                result += char.repeat(i); 
            }
        }
    }
    
    return result;
};