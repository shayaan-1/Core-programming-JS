//Given the head of a singly linked list and two integers left and right where left <= right, reverse the nodes of the list from position left to position right, and return the reversed list.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */

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


var reverseBetween = function(head, left, right) {
    if(head == null || head.next == null || left == right){
        return head;
    }

    let prev = null;
    let curr = head;
    let i = 1;

    while(curr!=null && i<left){
        prev = curr;
        curr = curr.next;
        i++;
    }

    let ptrtoStart = prev;
    let start = curr;
    prev = null;

    while(curr!=null && i<right+1){
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
        i++;
    }

    start.next = curr;

    if(ptrtoStart != null){
        ptrtoStart.next = prev;
    }else{
        return prev;
    }

    return head;
};

let l1 = new Node(1);
let l2 = new Node(2);
l1.next = l2;
let l3 = new Node(3);
let l4 = new Node(4);
let l5 = new Node(5);
// let l6 = new Node(7);

l2.next = l3;
l3.next = l4;
l4.next = l5;
// l5.next = l6;

l1 = reverseBetween(l1,2,4);
print(l1);