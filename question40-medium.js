//You are given the head of a linked list, which contains a series of integers separated by 0's. The beginning and end of the linked list will have Node.val == 0.
//For every two consecutive 0's, merge all the nodes lying in between them into a single node whose value is the sum of all the merged nodes. The modified list should not contain any 0's.
//Return the head of the modified linked list.

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
var mergeNodes = function(head) {
    let res = head;
    let curr = head.next;
    let sum = 0;

    while(curr!=null){
        if(curr.val == 0){
            head.val = sum;
            sum = 0;
            if(curr.next!=null){
                head = head.next;
            }
        }
        sum += curr.val;
        curr = curr.next;
    }
    head.next = null;
    return res;
};