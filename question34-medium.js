//kth smallest element in BST

class Node{
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}


function add(head,val){
    if(head == null){
        let newNode = new Node(val);
        return newNode;
    }

    if(head.val > val){
        head.left = add(head.left,val);
    }
    else if(head.val < val){
        head.right = add(head.right,val);
    }
    return head;
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    let count = 0;
    let result = null;

    function inOrder(root){
        if(root == null || result !== null){
            return;
        }

        inOrder(root.left);
        count++;
        if (count === k) {
          result = root.val;
          return;
        }
    
        inOrder(root.right);    
    }

    inOrder(root);
    return result;
};

let root = new Node(10);
add(root, 5);
add(root, 15);
add(root, 3);
add(root, 7);
add(root, 13);
add(root, 18);

console.log(kthSmallest(root, 1)); // Expected output: 3 (1st smallest)
console.log(kthSmallest(root, 3)); // Expected output: 7 (3rd smallest)
console.log(kthSmallest(root, 5)); // Expected output: 13 (5th smallest)