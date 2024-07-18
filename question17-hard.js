//You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

// class Node{
//     constructor(val){
//         this.val = val;
//         this.next = null;
//     }
// }

// function print(head){
//     let temp = head;

//     while(temp != null){
//         console.log(temp.val);
//         temp = temp.next;
//     }
// }


// var mergeKLists = function(lists) {
//     let res = [];

//     let node = null;

//     for(let i=0; i<lists.length; i++){
//         node = lists[i];

//         while(node!=null){
//             res.push(node.val);
//             node = node.next;
//         }
//     }

//     res = res.sort((a, b) => a - b);
//     let ans = new Node(res[i]);
//     let traversal = ans;

//     for(i=1; i<res.length; i++){
//         let newNode = new Node(res[i]);
//         traversal.next = newNode;
//         traversal = traversal.next;
//     }

//     return ans;
// };


//<------------------------OPTIMISED----------------------------->
class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

class MinHeap {
    constructor(capacity) {
        this.heap = new Array(capacity);
        this.size = -1;
    }

    shiftDown(size, i) {
        let smallest = i;
        let left = 2 * i + 1;
        let right = 2 * i + 2;

        if (left <= size && this.heap[left].val < this.heap[smallest].val) {
            smallest = left;
        }
        if (right <= size && this.heap[right].val < this.heap[smallest].val) {
            smallest = right;
        }

        if (smallest !== i) {
            [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]];
            this.shiftDown(size, smallest);
        }
    }

    shiftUp(i) {
        let parent = Math.floor((i - 1) / 2);

        if (parent >= 0 && this.heap[parent].val > this.heap[i].val) {
            [this.heap[i], this.heap[parent]] = [this.heap[parent], this.heap[i]];
            this.shiftUp(parent);
        }
    }

    insert(node) {
        this.size += 1;
        this.heap[this.size] = node;
        this.shiftUp(this.size);
    }

    buildHeap(arr, len) {
        for (let i = 0; i < len; i++) {
            this.heap[i] = arr[i];
            this.size++;
        }

        let startIdx = Math.floor(len / 2) - 1;

        for (let i = startIdx; i >= 0; i--) {
            this.shiftDown(this.size, i);
        }
    }

    printHeap() {
        for (let i = 0; i <= this.size; i++) {
            console.log(this.heap[i].val + " ");
        }
        console.log();
    }

    deletion() {
        [this.heap[0], this.heap[this.size]] = [this.heap[this.size], this.heap[0]];
        let res = this.heap[this.size];
        this.size--;

        this.shiftDown(this.size, 0);
        return res;
    }

    getSize() {
        return this.size + 1;
    }
}

var mergeKLists = function(lists) {
    let minHeap = new MinHeap(lists.length);
    
    for (let list of lists) {
        if (list !== null) {
            minHeap.insert(list);
        }
    }

    let dummy = new ListNode(0);
    let current = dummy;

    while (minHeap.getSize() > 0) {
        let minNode = minHeap.deletion();
        current.next = minNode;
        current = current.next;
        if (minNode.next !== null) {
            minHeap.insert(minNode.next);
        }
    }

    return dummy.next;
};

// Helper function to print the linked list
function printList(head) {
    let current = head;
    while (current !== null) {
        console.log(current.val);
        current = current.next;
    }
}

// Example usage
let lists = [
    new ListNode(1, new ListNode(4, new ListNode(5))),
    new ListNode(1, new ListNode(3, new ListNode(4))),
    new ListNode(2, new ListNode(6))
];

let mergedList = mergeKLists(lists);
printList(mergedList);
