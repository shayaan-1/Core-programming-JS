//Given an array of integers arr, a lucky integer is an integer that has a frequency in the array equal to its value.
// Return the largest lucky integer in the array. If there is no lucky integer return -1.

/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) { //2 3 4 5
  let res = Array(502).fill(0);
  
  for(let i=0; i<arr.length; i++){
    res[arr[i]]++;
  }

  for(let i=501; i>0; i--){
    if(i==res[i]){
        return i;
    }
  }
  return -1;
  
};