//Implement a function to remove duplicates from an unsorted linked list.

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

function removeDuplicates(head){
    let set = new Set();

    let p = head;
    let q = null;

    while(p!= null){
        if(!set.has(p.val)){
            set.add(p.val);
            q = p;
            p = p.next;
        }
        else{
            q.next = p.next;
            p = p.next;
        }
    }

    return head;
}

let l1 = new Node(1);
let l2 = new Node(2);
l1.next = l2;
let l3 = new Node(3);
let l4 = new Node(2);
let l5 = new Node(5);
let l6 = new Node(3);

l2.next = l3;
l3.next = l4;
l4.next = l5;
l5.next = l6;

print(l1);

console.log("Removed duplicates");
l1 = removeDuplicates(l1);
print(l1);
