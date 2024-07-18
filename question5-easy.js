//Write a program to print the Fibonacci series up to N terms.

//0 1 1 2 3 5 8 ..

function fibonacci(n){
    if(n == 0){
        console.log("0");
        return;
    }

    if (n == 1){
        console.log("1");
        return;
    }

    let left = 0;
    let right = 1;

    console.log(left);
    console.log(right);

    for(let i=1; i<n; i++){
        let next = right + left;
        console.log(next);
        left = right;
        right = next;
    }
}

fibonacci(5)