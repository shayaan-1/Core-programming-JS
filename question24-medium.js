// Design Circular Queue using linkedList


class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class MyCircularQueue {
    constructor(k) {
        this.size = k;
        this.count = 0;
        this.head = null;
        this.tail = null;
    }
    
    enQueue(value) {
        if (this.isFull()) {
            return false;
        }
        const newNode = new Node(value);
        if (this.isEmpty()) {
            this.head = newNode;
            this.tail = newNode;
            newNode.next = newNode; 
        } else {
            newNode.next = this.tail.next;
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.count++;
        return true;
    }
    
    deQueue() {
        if (this.isEmpty()) {
            return false;
        }
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            this.tail.next = this.head;
        }
        this.count--;
        return true;
    }
    
    Front() {
        if(this.isEmpty())
            return -1;

        return this.head.value;
    }
    
    Rear() {
        if(this.isEmpty())
            return -1;

        return this.tail.value;
    }
    
    isEmpty() {
        return this.count === 0;
    }
    
    isFull() {
        return this.count === this.size;
    }

    print(){
        let temp = this.head;
        if(temp == null){
            console.log("Empty")
            return;
        }

        console.log(temp.value);
        temp = temp.next;

        while(temp!=this.head){
            console.log(temp.val);
            temp = temp.next;
        }
    }
}

/** 
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */


