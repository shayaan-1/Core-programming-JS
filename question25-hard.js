//Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.
//According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

/**
 * Definition for a binary tree node.
//  * function TreeNode(val) {
//  *     this.val = val;
//  *     this.left = this.right = null;
//  * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = this.right = null;
    }
}

var lowestCommonAncestor = function(root, p, q) {
    if(root == null)
        return null;

    if(root == p || root == q){
        return root;
    }

    let lAns = lowestCommonAncestor(root.left,p,q);
    let rAns = lowestCommonAncestor(root.right,p,q);

    if(lAns == null)
        return rAns;
    if(rAns == null)
        return lAns;

    return root;

};