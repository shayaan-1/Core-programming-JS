//Implement Stack using queues

class Queue{
    constructor(capacity){
        this.capacity = capacity;
        this.arr = [];
        this.front = -1;
        this.rear = -1;
    }
    empty(){
        if(this.front === -1 && this.rear === -1)
            return true;
        return false;
    }
    enqueue(val){
        if(this.front === -1 && this.rear === -1){
            this.front = 0;
        }

        if(this.rear === this.capacity-1){
            return;
        }
        this.rear++;
        this.arr[this.rear] = val;
    }

    dequeue(){
        if(this.front === -1 && this.rear === -1)
            return;

        if(this.front === this.rear){
            let val = this.arr[this.front];
            this.front = -1;
            this.rear = -1;
            return val;
        }

        let val = this.arr[this.front];
        this.front++;
        return val;
    }

    print(){
        for(let i=this.front; i<=this.rear; i++){
            console.log(this.arr[i]);
        }
    }
    
}

class Stack{
    constructor(capacity){
        this.capacity = capacity;
        this.queue1 = new Queue(capacity);
        this.queue2 = new Queue(capacity);
    }

    push(val){
        while(!this.queue1.empty()){
            this.queue2.enqueue(this.queue1.dequeue());
        }
        this.queue1.enqueue(val);
        while(!this.queue2.empty()){
            this.queue1.enqueue(this.queue2.dequeue());
        }
    }

    pop(){
        if(this.queue1.empty())
            return;

        let res = this.queue1.dequeue();
        return res;
    }
}

let stack = new Stack(100);
stack.push(1)
stack.push(2)
stack.push(3)

console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());


