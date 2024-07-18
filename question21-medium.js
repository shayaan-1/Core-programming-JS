//Reverse a singly linked list.

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

function print(head){
    let temp = head;

    while(temp != null){
        console.log(temp.val);
        temp = temp.next;
    }
}

function reverse(head) {
    if (head == null || head.next == null) {
        return head;
    }

    let p = null;
    let curr = head;
    let q = null;

    while (curr != null) {
        q = curr.next; 
        curr.next = p; 
        p = curr; 
        curr = q;
    }

    head = p; 
    return head;
}

let l1 = new Node(1);
let l2 = new Node(2);
l1.next = l2;
let l3 = new Node(3);
l2.next = l3;
l1 = reverse(l1);
print(l1);