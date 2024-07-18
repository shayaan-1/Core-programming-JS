//kth distinct string in array

function kthDistinct(arr,k){
    let map = new Map();
    for(let i=0; i<arr.length; i++){
        if(map.has(arr[i])){
            let val = map.get(arr[i]);
            map.set(arr[i],val+1);
        }else{
            map.set(arr[i],1);
        }
    }
    let res = [];
    for(let key of map.keys()){
        if(map.get(key) == 1){
            res.push(key);
        }
    }

    if(res.length < k){
        return "";
    }
    return res[k-1];
}

console.log(kthDistinct(["aa","aa","b","a","p"],2))