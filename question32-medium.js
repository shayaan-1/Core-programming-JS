//Find height of BST

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

let head = new Node(10);
head = add(head,12);
head = add(head,13);
head = add(head,14);
head = add(head,9);
head = add(head,4);
console.log(heightOfTree(head));