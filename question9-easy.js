//Find GCD and LCM of 2 numbers.

function gcd(x,y){
    if(x === 0)
        return y;
    else if(y === 0)
        return x;
    else{
        while( y!= 0){
            let rem = x%y;
            x = y;
            y = rem;
        }
        return x;
    }
}

function lcm(x,y){
    let hcf = gcd(x,y);
    return (x*y)/hcf;
}

console.log(gcd(24,48));
console.log(lcm(24,48));
