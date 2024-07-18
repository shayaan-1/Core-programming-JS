//Find the "Kth" largest element in an array.

//[2,4,5,7,9]

function kthLargest(nums , k){
    nums = mergeSort(nums)
    return nums[nums.length - k]
}

function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }

    const middle = Math.floor(array.length / 2);
    const left = array.slice(0, middle);
    const right = array.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let resultArray = [];
    let l = 0;
    let r = 0;

    while (l < left.length && r < right.length) {
        if (left[l] < right[r]) {
            resultArray.push(left[l]);
            l++;
        } else {
            resultArray.push(right[r]);
            r++;
        }
    }

    while(l<left.length){
        resultArray.push(left[l])
        l++;
    }

    while(r < right.length){
        resultArray.push(right[r])
        r++
    }

    return resultArray

}

console.log(kthLargest([3,7,1,9,11],3))


//Same problem can be optimised using heap


function kthLargestOptimised(nums, k) {
    let minHeap = new MinHeap();

    for (let num of nums) {
        minHeap.insert(num);
        if (minHeap.size() > k) {
            minHeap.extractMin();
        }
    }

    return minHeap.extractMin();
}

class MinHeap {
    constructor() {
        this.heap = [];
    }

    size() {
        return this.heap.length;
    }

    insert(value) {
        this.heap.push(value);
        this.bubbleUp(this.heap.length - 1);
    }

    extractMin() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();

        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown(0);
        return min;
    }

    bubbleUp(index) {
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[index] >= this.heap[parentIndex]) break;

            [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
            index = parentIndex;
        }
    }

    bubbleDown(index) {
        while (true) {
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;
            let smallestIndex = index;

            if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] < this.heap[smallestIndex]) {
                smallestIndex = leftChildIndex;
            }

            if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[smallestIndex]) {
                smallestIndex = rightChildIndex;
            }

            if (smallestIndex === index) break;

            [this.heap[index], this.heap[smallestIndex]] = [this.heap[smallestIndex], this.heap[index]];
            index = smallestIndex;
        }
    }
}


console.log(kthLargestOptimised([3, 7, 1, 9, 11], 3)); 