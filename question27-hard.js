//You want to change s to t. Changing the ith character of s to ith character of t costs |s[i] - t[i]| (i.e., the absolute difference between the ASCII values of the characters).
//Return the maximum length of a substring of s that can be changed to be the same as the corresponding substring of t with a cost less than or equal to maxCost. 
//If there is no substring from s that can be changed to its corresponding substring from t, return 0.

/**
 * @param {string} s
 * @param {string} t
 * @param {number} maxCost
 * @return {number}
 */
var equalSubstring = function(s, t, maxCost) {
    let left = 0, win = 0, maxLength = 0;

    for (let right = 0; right < s.length; right++) {
        win += Math.abs(s.charCodeAt(right) - t.charCodeAt(right));

        while (win > maxCost) {
            win -= Math.abs(s.charCodeAt(left) - t.charCodeAt(left));
            left++;
        }

        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
};