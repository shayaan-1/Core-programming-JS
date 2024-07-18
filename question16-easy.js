//Find if 2 trees are identical

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

function isIdentical(head1, head2){
    if(head1 == null && head2 == null)
        return true;
    if(head1 != null && head2 == null)
        return false;
    if(head1 == null && head2 != null)
            return false;

    let left = isIdentical(head1.left,head2.left);
    let right = isIdentical(head1.right,head2.right);

    let curr = head1.val === head2.val;

    if(left && right && curr)
        return true;
    else{
        return false;
    }
}

// Test case 1: Identical trees
let head1 = new Node(10);
head1 = add(head1, 5);
head1 = add(head1, 15);
head1 = add(head1, 3);
head1 = add(head1, 7);

let head2 = new Node(10);
head2 = add(head2, 5);
head2 = add(head2, 15);
head2 = add(head2, 3);
head2 = add(head2, 7);

console.log("Test case 1 (should be true):", isIdentical(head1, head2));