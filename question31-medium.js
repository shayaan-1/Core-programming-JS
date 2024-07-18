//Construct a BST, add nodes and perform traversals 

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

function preOrder(head){
    if(head == null){
        return;
    }

    console.log(head.val);
    preOrder(head.left);
    preOrder(head.right);
}

function inOrder(head){
    if(head == null){
        return;
    }

    inOrder(head.left);
    console.log(head.val);
    inOrder(head.right);
}

function postOrder(head){
    if(head == null){
        return;
    }

    postOrder(head.left);
    postOrder(head.right);
    console.log(head.val);
}

let head = new Node(10);
head = add(head,12);
head = add(head,13);
head = add(head,14);
head = add(head,9);
head = add(head,4);
inOrder(head);
