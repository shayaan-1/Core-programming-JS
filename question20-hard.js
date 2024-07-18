//Validate BST

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
 * @return {boolean}
 */
var isValidBST = function(root) {
    return validHelper(root,Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
};

function validHelper(root,min,max){
    if(root == null)
        return true;

    if(root.val >= max || root.val <= min)
        return false;

    return validHelper(root.left,min,root.val) && validHelper(root.right,root.val,max);
}


let root6 = new Node(10);
add(root6, 5);
add(root6, 15);
add(root6, 3);
add(root6, 7);
add(root6, 13);
add(root6, 18);
console.log(isValidBST(root6)); // Expected output: true