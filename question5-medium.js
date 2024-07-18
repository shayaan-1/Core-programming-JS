//Write a function to find the intersection of two arrays.

function intersectionOf2Arrays(nums1, nums2){
    let nums3 = [];
    let idx = 0;
    let help = new Set();
    let help2 = new Set();

    for(let i=0; i<nums1.length; i++){
        help.add(nums1[i])
    }

    for(let i=0; i<nums2.length; i++){
        help2.add(nums2[i])
    }

    help.forEach((val)=>{
        if(help2.has(val)){
            nums3[idx] = val
            idx++
        }
    })

    console.log(nums3)

}

// intersectionOf2Arrays([1,2,4,5,2,8,6,5],[2,5,7,1,9,2])

function intersectionOf2ArraysOptimised(nums1, nums2){
    let set = new Set(nums1)
    let res = []
    let idx = 0;

    for(let num of nums2){
        if(set.has(num)){
            res[idx] = num
            idx++
            set.delete(num)
        }
    }

    console.log(res)
}

intersectionOf2ArraysOptimised([1,2,4,5,2,8,6,5],[2,5,7,1,9,2])

