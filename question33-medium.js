//A sum tree is one in which every node is equal to the sum of its left and right subtree. 
//Write a code to verify whether a tree is sum tree or not. 

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

function isSumTreeUtil(head) {
    if (head == null) {
        return { isSumTree: true, sum: 0 };
    }
    if (head.left == null && head.right == null) {
        return { isSumTree: true, sum: head.val };
    }

    let left = isSumTreeUtil(head.left);
    let right = isSumTreeUtil(head.right);

    let sum = left.sum + right.sum;
    let isSumTree = left.isSumTree && right.isSumTree && (head.val === sum);

    return { isSumTree: isSumTree, sum: sum + head.val };
}

function isSumTree(head){
    return isSumTreeUtil(head);
}

// Test cases
let head1 = new Node(26);
head1.left = new Node(10);
head1.right = new Node(3);
head1.left.left = new Node(4);
head1.left.right = new Node(6);
head1.right.right = new Node(3);

console.log(isSumTree(head1))