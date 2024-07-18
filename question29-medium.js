//Given the head of a linked list, rotate the list to the right by k places.

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
var rotateRight = function(head, k) {
    for(let i=0; i<k; i++){
        head = rotateOne(head);
    }
    return head;
};

function rotateOne(head){
    let temp = head;
    let prev = null;
    while(temp.next!=null){
        prev = temp;
        temp = temp.next;
    }

    temp.next = head;
    prev.next = null;
    head = temp;
    return head;
}


//A Better solution
var rotateRight = function(head, k) {
    if (head == null || head.next == null || k == 0) return head;

    // Count the number of nodes in the list
    let length = 1;
    let temp = head;
    while (temp.next != null) {
        length++;
        temp = temp.next;
    }

    // Connect the last node to the head, making it circular
    temp.next = head;

    // Calculate the number of steps to the new head
    k = k % length;
    let stepsToNewHead = length - k;

    // Find the new head and tail
    temp = head;
    for (let i = 0; i < stepsToNewHead - 1; i++) {
        temp = temp.next;
    }
    let newHead = temp.next;
    temp.next = null;

    return newHead;
};