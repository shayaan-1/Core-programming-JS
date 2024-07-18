//Given two strings, check if they are anagrams.

function anagrams(str1, str2){
    let map = new Map();

    for(let i=0; i<str1.length; i++){
        let val;
        if(map.has(str1[i])){
            val = map.get(str1[i]) + 1;
            map.set(str1[i],val)
        }
        else{
            map.set(str1[i],1);
        }
    }

    // console.log(map)

    for(let i=0; i<str2.length; i++){
        let val;
        if(map.has(str1[i])){
            val = map.get(str1[i]) - 1;
            map.set(str1[i],val);
        }
        else{
            return false;
        }
    }

    // console.log(map)

    let flag = 0;
    map.forEach((value,key) => {
        if(map.get(key) !== 0)
            flag = 1;
    })

    if(flag === 1){
        return false;
    }
    else{
        return true;
    }
}

// console.log(anagrams("asaad","adacsa"))


function anagramsOptimised(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }

    let map = new Map();

    
    for (let i = 0; i < str1.length; i++) {
        map.set(str1[i], (map.get(str1[i]) || 0) + 1);

        map.set(str2[i], (map.get(str2[i]) || 0) - 1);
    }

    for (let value of map.values()) {
        if (value !== 0) {
            return false;
        }
    }

    return true;
}

console.log(anagramsOptimised("strstr","rtsrast"))