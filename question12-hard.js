//Given a string s, find the longest palindromic subsequence's length in s.

function longestPalindromicSubSeq(s){
    let res = s.split('');
    let i = 0, j = res.length - 1;
    while(i <= j){
        [res[i],res[j]] = [res[j],res[i]];
        i++;
        j--;
    }
    res = res.join('')
    return solve(s,res,0,0);
}

function solve(text1, text2, i, j){
    if(i === text1.length)
        return 0;
    if(j === text2.length)
        return 0;

    let ans = 0;

    if(text1[i] === text2[j])
        ans =  1 + solve(text1, text2, i+1, j+1);
    else{
        ans = Math.max(solve(text1,text2,i+1,j),solve(text1,text2,i,j+1));
    }

    return ans;
}

console.log(longestPalindromicSubSeq("abbd"));

//efficient:

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function(s) {
    const n = s.length;
    const dp = Array.from({ length: n }, () => Array(n).fill(0));

    // Base case: A single character is always a palindrome of length 1
    for (let i = 0; i < n; i++) {
        dp[i][i] = 1;
    }

    // Build the dp table
    for (let len = 2; len <= n; len++) {
        for (let i = 0; i <= n - len; i++) {
            const j = i + len - 1;
            if (s[i] === s[j]) {
                dp[i][j] = dp[i + 1][j - 1] + 2;
            } else {
                dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
            }
        }
    }

    return dp[0][n - 1];
};

// Example usage:
const s = "bbbab";
console.log(longestPalindromeSubseq(s));  // Output: 4
