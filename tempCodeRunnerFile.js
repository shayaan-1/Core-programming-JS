    let n1 = 0;
    let n2 = 0;

    for(let i=0; i<nums1.length; i++){
        n1 = n1*10 + (nums1[i] - '0');
    }

    for(let i=0; i<nums2.length; i++){
        n2 = n2*10 + (nums2[i] - '0');
    }

    let res = n1*n2;
    let ans = [];

    while(res>0){
        let rem = res%10;
        ans.push(rem);
        res = Math.floor(res/10);
    }

    ans = ans.join('');
    console.log(ans)