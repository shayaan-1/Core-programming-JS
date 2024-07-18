//Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.
//Note: You must not use any built-in BigInteger library or convert the inputs to integer directly.

function multiplyStrings(nums1,nums2){
    let n1 = 0;
    let n2 = 0;

    for(let i=0; i<nums1.length; i++){
        n1 = n1*10 + (nums1[i] - '0');
    }

    for(let i=0; i<nums2.length; i++){
        n2 = n2*10 + (nums2[i] - '0');
    }

    console.log(n1,n2);

    let res = n1*n2;
    console.log(res)
    let ans = [];
    if(res == 0){
        console.log( "0");
        return;
    }

    while(res>0){
        let rem = res%10;
        ans.unshift(rem);
        res = Math.floor(res/10);
    }

    ans = ans.join('');
    console.log(ans)
}

multiplyStrings("0","0");