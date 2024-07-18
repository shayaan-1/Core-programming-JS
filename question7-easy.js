//Write a program to find the sum of all prime numbers between 1 and N.

function sumOfAllPrime(n){
    let sum = 0;
    for(let i=1; i<=n; i++){
        if(isPrime(i)){
            sum+=i;
        }
    }
    return sum;
}

function isPrime(x){
    if(x==0 || x==1)
        return false;

    for(let i=2; i<=Math.floor(x/2); i++){
        if(x%i === 0){
            return false;
        }
    }
    return true;
}

console.log(sumOfAllPrime(10))
