//A pangram is a sentence where every letter of the English alphabet appears at least once.
//Given a string sentence containing only lowercase English letters, return true if sentence is a pangram, or false otherwise.
//sentence consists of lowercase English letters.

/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    let set = new Set();

    for(let i=0; i<sentence.length; i++){
        set.add(sentence[i]);
    }

    return set.size === 26;
};