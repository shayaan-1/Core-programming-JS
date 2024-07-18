//Given a string s, return the longest palindromic substring in s.

/**
 * @param {string} s
 * @return {string}
 */
/**
 * @param {string} s
 * @return {string}
 */

var longestPalindrome = function(s) {
    if (s.length < 1) {
        return "";
    }

    let start = 0;
    let end = 0;

    for (let i = 0; i < s.length; i++) {
        let len1 = expandFromMiddle(s, i, i);
        let len2 = expandFromMiddle(s, i, i + 1);
        let len = Math.max(len1, len2);

        if (len > end - start) {
            start = i - Math.floor((len - 1) / 2);
            end = i + Math.floor(len / 2);
        }
    }

    return s.slice(start, end + 1);
};

function expandFromMiddle(s, left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
        left--;
        right++;
    }
    return right - left - 1;
}




console.log(longestPalindrome("hbhsasaaasjfj"))