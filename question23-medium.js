//Given the head of a linked list, return the list after sorting it in ascending order.


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
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

var sortList = function(head) {
    if(head == null || head.next == null)
        return head;

  let temp = head;  
  
  while(temp.next != null){
    let p = temp.next;
    while(p!= null){
        if(p.val < temp.val){
            [p.val,temp.val] = [temp.val,p.val];
        }
        p = p.next;
    }
    temp = temp.next;
  }
  return head;
};

let l1 = new Node(4);
let l2 = new Node(2);
l1.next = l2;
let l3 = new Node(1);
let l4 = new Node(3);
// let l5 = new Node(8);
// let l6 = new Node(6);

l2.next = l3;
l3.next = l4;
// l4.next = l5;
// l5.next = l6;

print(l1);
l1 = sortList(l1);
console.log("After sorting")
print(l1);



//optimise version:
var sortList = function(head) {
    if (head == null || head.next == null) {
        return head;
    }

    // Step 1. Cut the list to two halves
    let mid = getMid(head);
    let left = head;
    let right = mid.next;
    mid.next = null;

    // Step 2. Sort each half
    left = sortList(left);
    right = sortList(right);

    // Step 3. Merge the sorted halves
    return merge(left, right);
};

// Helper function to find the middle of the list
function getMid(head) {
    let slow = head;
    let fast = head;
    let prev = null;

    while (fast !== null && fast.next !== null) {
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
    }

    return prev;
}

// Helper function to merge two sorted lists
function merge(l1, l2) {
    let dummy = new ListNode();
    let current = dummy;

    while (l1 !== null && l2 !== null) {
        if (l1.val < l2.val) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }

    if (l1 !== null) {
        current.next = l1;
    } else {
        current.next = l2;
    }

    return dummy.next;
}