//Given two strings text1 and text2, return the length of their longest common subsequence. 
//If there is no common subsequence, return 0.

function longestCommonSubSeq(text1, text2){
    return solve(text1,text2,0,0);
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

console.log(longestCommonSubSeq("abc","def"))

//optimised:
function longestCommonSubSeq(text1, text2) {
    const m = text1.length;
    const n = text2.length;
    const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (text1[i - 1] === text2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }

    return dp[m][n];
}

// Example usage:
console.log(longestCommonSubSeq("abc", "def"));  
console.log(longestCommonSubSeq("abcde", "ace")); 

