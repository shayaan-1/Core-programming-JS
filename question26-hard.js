//Given a binary tree root, a node X in the tree is named good if in the path from root to X there are no nodes with a value greater than X.
//Return the number of good nodes in the binary tree.

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
var goodNodes = function(root) {
    function helper(root,max){
        if(root==null){
            return 0;
        }

        let currAns = 0;
        if(root.val>=max){
            max = root.val;
            currAns = 1;
        }

        let lAns = helper(root.left,max);
        let rAns = helper(root.right,max);

        return lAns + rAns + currAns;

    }

    return helper(root,Number.MIN_SAFE_INTEGER);
};