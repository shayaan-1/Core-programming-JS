// Given a string s, find the length of the longest substring without repeating characters.

function lengthOfLongestSubstring(s){
    // let subString = "";
    let len = 0;
    let set = new Set();
    let start = 0;
    let end = 0;
    let lStart = 0, lEnd = 0;

    while(end < s.length){
        // console.log(s[end]); //pwwkew set = {p,w,k,e,w}, len = 3
        while(set.has(s[end])){
            set.delete(s[start]);
            start++;
        }
        set.add(s[end]);
        if(end-start+1 > len){
            lStart = start;
            lEnd = end;
        }
        len = Math.max(len,end-start+1);
        end++;
    }

    console.log(s.substring(lStart,lEnd+1));

    return len;
}

console.log(lengthOfLongestSubstring("abcabcbb"))