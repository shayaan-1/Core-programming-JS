//Diameter of Binary Tree

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

function diameter(head){
    if(head == null)
        return 0;

    let left = diameter(head.left);
    let right = diameter(head.right);
    let curr = heightOfTree(head.left) + heightOfTree(head.right) + 1;

    let ans = Math.max(left,Math.max(curr,right));

}


//An optimised solution:
function diameterOptimized(head) {
    let diameter = 0;

    function heightAndDiameter(node) {
        if (node == null) {
            return 0;
        }

        let leftHeight = heightAndDiameter(node.left);
        let rightHeight = heightAndDiameter(node.right);

        let currentDiameter = leftHeight + rightHeight;
        diameter = Math.max(diameter, currentDiameter);

        return Math.max(leftHeight, rightHeight) + 1;
    }

    heightAndDiameter(head);
    return diameter;
}

// Initialize the BST
let head = new Node(10);
head = add(head, 12);
head = add(head, 13);
head = add(head, 14);
head = add(head, 9);
head = add(head, 4);

// Calculate the diameter
console.log("Diameter of the tree:", diameterOptimized(head));
