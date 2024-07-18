//Search in BST

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


function search(root,val){
    if(root == null){
        return false;
    }

    let p = root;
    while(p!=null){
        if(p.val == val)
            return true;
        else if(p.val > val){
            p = p.left;
        }
        else{
            p = p.right;
        }
    }

    return false;
}


// Test case
let root = new Node(20);
add(root, 8);
add(root, 22);
add(root, 4);
add(root, 12);
add(root, 10);
add(root, 14);

// Searching for existing values
console.log(search(root, 10)); // Expected: true
console.log(search(root, 22)); // Expected: true