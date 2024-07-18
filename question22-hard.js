//Construct BST from preorder 

class Node{
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
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
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var bstFromPreorder = function(preorder) {
    let index = 0;

    function buildBSTHelper(bound) {
      if (index === preorder.length || preorder[index] > bound) {
        return null;
      }
  
      const rootValue = preorder[index++];
      const root = new TreeNode(rootValue);
  
      root.left = buildBSTHelper(rootValue);
      root.right = buildBSTHelper(bound);
  
      return root;
    }
  
    return buildBSTHelper(Infinity);  
};