//Find if a tree is height balanced or not.

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

function heightOfTree(head){
    if(head == null)
        return 0;
    
    let leftHeight = heightOfTree(head.left);
    let rightHeight = heightOfTree(head.right);

    let ans = Math.max(leftHeight,rightHeight) + 1;
    return ans;

}

function isBalanced(head){
    if(head == null)
        return true;

    let left = isBalanced(head.left);
    let right = isBalanced(head.right);
    let curr = Math.abs(heightOfTree(head.left) - heightOfTree(head.right)) <= 1;

    if(left && right && curr){
        return true;
    }
    else{
        return false;
    }
}


//OPTIMISED APPROACH
function checkHeightAndBalance(node) {
    if (node == null) {
        return { height: 0, isBalanced: true };
    }

    let leftResult = checkHeightAndBalance(node.left);
    let rightResult = checkHeightAndBalance(node.right);

    let currentHeight = Math.max(leftResult.height, rightResult.height) + 1;
    let currentBalance = leftResult.isBalanced && rightResult.isBalanced &&
                         Math.abs(leftResult.height - rightResult.height) <= 1;

    return { height: currentHeight, isBalanced: currentBalance };
}

let head = new Node(10);
head = add(head, 12);
head = add(head, 13);
head = add(head, 14);
head = add(head, 9);
head = add(head, 4);

console.log("Is the tree balanced?", checkHeightAndBalance(head));