//Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let arr = [];
    let idx = 0;
    let i = 0;
    let j = 0;

    while(i<nums1.length && j<nums2.length){
        if(nums1[i] <= nums2[j]){
            arr[idx] = nums1[i];
            i++;
            idx++;
        }
        else{
            arr[idx] = nums2[j];
            j++;
            idx++;
        }
    }

    while(i< nums1.length){
        arr[idx] = nums1[i];
        i++;
        idx++;
    }

    while(j < nums2.length){
        arr[idx] = nums2[j];
        j++;
        idx++;
    }

    let medianIdx = Math.floor(arr.length/2);
    let medVal;
    if(arr.length % 2 === 0){
        medVal = (arr[medianIdx] + arr[medianIdx - 1])/2
    }
    else{
        medVal = arr[medianIdx]
    }

   return medVal
};

findMedianSortedArrays([1,3],[2])