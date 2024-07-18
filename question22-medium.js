//Remove the nth node from the end of a linked list.

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

function removeNth(head,n){
    let temp = head;
    let count = 0;
    while(temp != null){
        count++;
        temp = temp.next;
    }
    let num = count - n;
    console.log("num = " + num)
    count = 0;
    temp = head.next;
    let helper = head;
    while(count < num - 1){
        helper = temp;
        temp = temp.next;
        count++;
    }
    helper.next = helper.next.next;
    return head;
}


let l1 = new Node(1);
let l2 = new Node(2);
l1.next = l2;
let l3 = new Node(3);
let l4 = new Node(4);
let l5 = new Node(5);
let l6 = new Node(7);

l2.next = l3;
l3.next = l4;
l4.next = l5;
l5.next = l6;

print(l1);

console.log("Ran nth removal")
l1 = removeNth(l1,4);

print(l1);