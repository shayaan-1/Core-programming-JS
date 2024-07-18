// Postfix Expreession evaluation using stack 

class Stack{
    constructor(capacity){
        this.capacity = capacity;
        this.arr = [];
        this.top = -1
    }

    push(val){
        if(this.top === this.capacity - 1){
            return;
        }

        this.top++;
        this.arr[this.top] = val;
    }

    pop(){
        if(this.top === -1){
            return;
        }

        let val = this.arr[this.top];
        this.top--;
        return val;
    }

    print(){
        for(let i=0; i<=this.top; i++){
            console.log(this.arr[i]);
        }
    }
}

function evalPostfix(s){  
    let stack = new Stack(50);
    for(let i=0; i<s.length; i++){
        if(s[i]>='0' && s[i]<='9'){
            let val = s[i] - '0';
            stack.push(val);
        }

        if(isOperator(s[i])){
            let val2 = stack.pop();
            let val1 = stack.pop();
            let operation = s[i];
            let newVal = operate(val1,val2,operation);
            stack.push(newVal);
        }
    }

    return stack.pop();
}

function isOperator(c){
    if(c === '+' || c === '-' || c === '*' || c === '/' || c === '^'){
        return true;
    }
    return false;
}

function operate(a,b,c){
    switch(c){
        case '+':
            return a+b;
        case '-':
            return a-b;
        case '*':
            return a*b;
        case '/':
            return a/b;
        case '^':
            return Math.pow(a,b);
        default:
            console.log("Wrong operator")
    }
}

console.log(evalPostfix("231*+9-"))