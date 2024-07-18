//Given the head of a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list. Return the linked list sorted as well.

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
var deleteDuplicates = function(head) {
    let curr = head;
    let prev = null;

    while(curr!=null){
        if(curr.next!=null && curr.next.val == curr.val){
            let val = curr.val;
            while(curr!=null && curr.val == val){
                curr = curr.next
            }
            if(prev!=null){
                prev.next = curr;
            }
            else{
                head = curr;
            }
        }else{
            prev = curr;
            curr = curr.next;
        }
    }
    return head;
};