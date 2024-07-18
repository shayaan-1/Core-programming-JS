//Write a function to find the sum of digits of a number.

//1234 = 10

function sumOfDigits(x){
    let sum = 0;
    while(x>0){
        let rem = x%10;
        sum += rem;
        x = Math.floor(x/10);
    }

    return sum;
}


console.log(sumOfDigits(1234))