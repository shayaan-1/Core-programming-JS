//Implement two Stacks in an Array

class TwoStack{
    constructor(capacity){
        this.capacity = capacity;
        this.arr = [];
        this.top1 = -1;
        this.top2 = capacity;
    }

    push1(value){
        if(this.top1 === this.top2 -1 )
            return;
        this.top1++;
        this.arr[this.top1] = value;
    }

    push2(value){
        if(this.top1 === this.top2 -1 )
            return;
        this.top2--;
        this.arr[this.top2] = value;
    }

    pop1(){
        if(this.top1 === -1){
            return;
        }
        this.top1--;
        return this.arr[this.top1+1];
    }

    pop2(){
        if(this.top2 === this.capacity){
            return;
        }
        this.top2++;
        return this.arr[this.top2-1];
    }

    print(){
        console.log("Stack 1");
        for(let i=0; i<=this.top1; i++){
            console.log(this.arr[i]);
        }

        console.log("Stack 2");
        for(let i=this.capacity-1; i>=this.top2; i--){
            console.log(this.arr[i]);
        }
    }

};




let twoStacks = new TwoStack(5);
twoStacks.push1(1);
twoStacks.push1(2);
twoStacks.push2(10);
twoStacks.push2(9);
twoStacks.push2(8);

console.log("After pushing elements:");
twoStacks.print();

console.log("Popping elements:");
console.log("Popped from Stack 1:", twoStacks.pop1());
console.log("Popped from Stack 2:", twoStacks.pop2());

console.log("After popping elements:");
twoStacks.print();