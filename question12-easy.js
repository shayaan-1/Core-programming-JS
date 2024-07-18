//Linked List Cycle Detection

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

var hasCycle = function(head){
    if(head == null)
        return false;
    if(head.next == head)
        return true;
    let first = head;
    let second = head.next.next;

    while(second!=null){
        if(second == first)
            return true;
        first = first.next;
        second = second.next.next;
    }

    return false;
    
}


let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = head.next; // 5 points back to 2
console.log(hasCycle(head)); // true
