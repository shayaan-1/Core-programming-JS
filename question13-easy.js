//Q49: Implement a function to insert a node at a specific position in a linked list.

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

function addNode(val,head,position){
    let temp = head;
    let num = 1;

    while(num < position -1){
        temp = temp.next;
        num++;
    }

    let newNode = new Node(val);
    newNode.next = temp.next;
    temp.next = newNode;

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
l1 = addNode(23,l1,5);


print(l1);