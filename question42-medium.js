//Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.
//A leaf is a node with no children.

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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    
    function helper(root,sum){
        if(root == null)
            return false;

        sum += root.val;
        if(root.left == null && root.right == null){
            return sum === targetSum;
        }

        let lAns = helper(root.left,sum);
        let rAns = helper(root.right,sum);

        return lAns || rAns;
    }
    return helper(root,0);
};