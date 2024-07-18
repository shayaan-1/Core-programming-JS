//Write a program to swap two numbers without using a temporary variable.

//2 3

function swap(x,y){
    console.log("Before swapping");
    console.log("x = " + x, ", y = " + y);
    x = x + y; 
    y = x - y;
    x = x - y; 
    console.log("After swapping");
    console.log("x = " + x, ", y = " + y);
}

swap(4,7);