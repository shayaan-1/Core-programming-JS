//Given a string s, reverse the string according to the following rules:
//All the characters that are not English letters remain in the same position.
//All the English letters (lowercase or uppercase) should be reversed.
//Return s after reversing it.

/**
 * @param {string} s
 * @return {string}
 */
function isLetter(c){
    return (c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z');
}
var reverseOnlyLetters = function(s) {
    let l = 0;
    let r = s.length - 1;
    let arr = s.split('')

    while(l<r){
        while(l<r && !isLetter(arr[l])){
            l++;
        }

        while(l<r && !isLetter(arr[r])){
            r--;
        }

        if(l<r){
            [arr[l],arr[r]] = [arr[r],arr[l]];
            l++;
            r--;
        }
    }

    return arr.join('');
};