//Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary tree and inorder is the inorder traversal of the same tree, 
//construct and return the binary tree.

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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */


function buildTree(preorder, inorder) {
    if (preorder.length === 0 || inorder.length === 0)
        return null;
  
    const rootValue = preorder[0];
    const root = new Node(rootValue);
  
    let rootIndexInorder = 0;
    for (let i = 0; i < inorder.length; i++) {
      if (inorder[i] === rootValue) {
        rootIndexInorder = i;
        break;
      }
    }
  
    const leftInorder = [];
    const rightInorder = [];
    for (let i = 0; i < inorder.length; i++) {
      if (i < rootIndexInorder) {
        leftInorder.push(inorder[i]);
      } else if (i > rootIndexInorder) {
        rightInorder.push(inorder[i]);
      }
    }
  
    const leftPreorder = [];
    const rightPreorder = [];
    for (let i = 1; i < preorder.length; i++) {
      if (i <= leftInorder.length) {
        leftPreorder.push(preorder[i]);
      } else {
        rightPreorder.push(preorder[i]);
      }
    }
  
    root.left = buildTree(leftPreorder, leftInorder);
    root.right = buildTree(rightPreorder, rightInorder);
  
    return root;
  }
  
  const preorder = [3, 9, 20, 15, 7];
  const inorder = [9, 3, 15, 20, 7];
  const tree = buildTree(preorder, inorder);

//with built in methods
// var buildTree = function(preorder, inorder) {
//     if (!preorder.length || !inorder.length) return null;

//   const rootValue = preorder[0];
//   const root = new TreeNode(rootValue);

//   const rootIndexInorder = inorder.indexOf(rootValue);

//   const leftInorder = inorder.slice(0, rootIndexInorder);
//   const rightInorder = inorder.slice(rootIndexInorder + 1);

//   const leftPreorder = preorder.slice(1, 1 + leftInorder.length);
//   const rightPreorder = preorder.slice(1 + leftInorder.length);

//   root.left = buildTree(leftPreorder, leftInorder);
//   root.right = buildTree(rightPreorder, rightInorder);

//   return root;
// };





