//Find minimum node in BST

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

function minimum(root){
    if(root == null)
        return;
    if(root.left == null && root.right == null)
        return root.val;

    let p =root;
    while(p.left!=null){
        p = p.left;
    }
    return p.val;
}



let head = new Node(10);
head = add(head,12);
head = add(head,13);
head = add(head,14);
head = add(head,9);
head = add(head,4);
console.log(minimum(head))