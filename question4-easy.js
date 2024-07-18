//Implement a function to merge two sorted arrays.

function mergeTwoArrays(nums1, nums2){
    let i=0;
    let j=0;
    let res = [];
    let idx = 0

    while(i<nums1.length && j<nums2.length){
        if(nums1[i] <= nums2[j]){
            res[idx] = nums1[i]
            idx++
            i++
        }
        else{
            res[idx] = nums2[j]
            idx++
            j++
        }
    }

    while(i < nums1.length){
        res[idx] = nums1[i]
        idx++
        i++
    }

    while(j < nums2.length){
        res[idx] = nums2[j]
        idx++
        j++
    }

    return res
}

console.log(mergeTwoArrays([1,4,6,8],[2,9,11]))