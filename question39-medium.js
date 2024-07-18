//Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.
//Each letter in magazine can only be used once in ransomNote.
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let map = new Map();
    for(let i=0; i<magazine.length; i++){
        if(map.has(magazine[i])){
            let val = map.get(magazine[i]);
            map.set(magazine[i],val+1);
        }else{
            map.set(magazine[i],1);
        }
    }

    // console.log(map)

    for(let i=0; i<ransomNote.length; i++){
        if(map.get(ransomNote[i])>0){
            let val = map.get(ransomNote[i]);
            map.set(ransomNote[i],val-1);
        }else{
            return false;
        }
    }
    return true;
};

console.log(canConstruct("aa","aab"))