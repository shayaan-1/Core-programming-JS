//Minimum Depth of Binary Tree

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
 * @return {number}
 */
var minDepth = function(root) {
    if(root == null)
        return 0;

    if(root.left == null && root.right == null)
        return 1;
    let ld, rd;

    if(root.left == null){
        ld = Number.MAX_VALUE;
    }
    else{
        ld = minDepth(root.left);
    }

    if(root.right == null){
        rd = Number.MAX_VALUE;
    }
    else{
        rd = minDepth(root.right);
    }

    return Math.min(ld,rd) + 1;
};