// Check valid parenthesis. 

class Stack{
    constructor(capacity){
        this.capacity = capacity;
        this.arr = [];
        this.top = -1;
    }

    empty(){
        if(this.top === -1){
            return true;
        }
        return false;
    }

    push(val){
        if(this.capacity - 1  === this.top)
            return;

        this.top++;
        this.arr[this.top] = val;
    }

    pop(){
        if(this.empty())
            return;

        let val = this.arr[this.top];
        this.top--;
        return val;
    }
}

function validParenthesis(s){
    let stack = new Stack;
    for(let i = 0; i<s.length; i++){
        if(s[i] === '(' || s[i] === '[' || s[i] === '{')
            stack.push(s[i]);
        
        if(s[i] === ')'){
            if(stack.empty() || stack.pop() != '(')
                return false;
        }
        else if(s[i] === ']'){
            if(stack.empty() || stack.pop() != '[')
                return false;
        }
        else if(s[i] === '}'){
            if(stack.empty() || stack.pop() != '{')
                return false;
        }
    }

    if(!stack.empty())
        return false;

    return true;
}

console.log(validParenthesis("()[]"))