//Given a string s representing a valid expression, implement a basic calculator to evaluate it, and return the result of the evaluation.

function calculate(s) {
    let stack = [];
    let result = 0;
    let number = 0;
    let sign = 1;

    for (let i = 0; i < s.length; i++) {
        let c = s[i];

        if (c >= '0' && c <= '9') {
            number = 10 * number + (c - '0');
        } else if (c === '+') {
            result += sign * number;
            number = 0;
            sign = 1;
        } else if (c === '-') {
            result += sign * number;
            number = 0;
            sign = -1;
        } else if (c === '(') {
            stack.push(result);
            stack.push(sign);
            sign = 1;
            result = 0;
        } else if (c === ')') {
            result += sign * number;
            number = 0;
            result *= stack.pop();
            result += stack.pop();
        }
    }

    if (number !== 0) {
        result += sign * number;
    }

    return result;
}

// Test cases
console.log(calculate("1 + 1")); // Output: 2
console.log(calculate("2 - 1 + 2")); // Output: 3
console.log(calculate("(1+(4+5+2)-3)+(6+8)")); // Output: 23
