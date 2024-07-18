//Given the head of a linked list, reverse the nodes of the list k at a time, and return the modified list.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
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


var reverseKGroup = function(head, k) {  // 1 2 3 4 5 6
    if(head == null)
        return null;

    let count = 0;
    let node = head;
    while (count < k && node != null) {
        node = node.next;
        count++;
    }

    if (count < k)
        return head;

    let next = null;
    let curr = head;
    let prev = null;

    count = 0;

    while(curr!=null && count<k){
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
        count++;
    }

    if(next!=null){
        head.next = reverseKGroup(next,k);
    }

    return prev;
};

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

l1 = reverseKGroup(l1,2);
print(l1);

