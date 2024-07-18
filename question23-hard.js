//Right view of Binary Tree

class Queue1 {
    constructor(capacity) {
        this.capacity = capacity;
        this.arr = [];
        this.front = -1;
        this.rear = -1;
    }

    empty() {
        return this.front === -1 && this.rear === -1;
    }

    enqueue(val) {
        if (this.rear === this.capacity - 1) {
            return;
        }
        if (this.front === -1) {
            this.front = 0;
        }
        this.rear++;
        this.arr[this.rear] = val;
    }

    dequeue() {
        if (this.empty()) {
            return null;
        }
        let val = this.arr[this.front];
        if (this.front === this.rear) {
            this.front = -1;
            this.rear = -1;
        } else {
            this.front++;
        }
        return val;
    }
}

var rightSideView = function(root) {
    if (!root) return [];
    let q = new Queue1(100);
    let res = [];
    
    q.enqueue(root);

    while (!q.empty()) {
        let levelSize = q.rear - q.front + 1;
        for (let i = 0; i < levelSize; i++) {
            let curr = q.dequeue();
            
            if (i == levelSize - 1) {
                res.push(curr.val);
            }

            if (curr.left != null) {
                q.enqueue(curr.left);
            }

            if (curr.right != null) {
                q.enqueue(curr.right);
            }
        }
    }
    return res;
};


