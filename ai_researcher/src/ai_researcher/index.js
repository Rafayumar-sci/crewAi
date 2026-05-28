// Calculator function using switch statement
function calculator(a, b, operator) {
    let result;

    switch (operator) {
        case '+':
            result = a + b;
            break;

        case '-':
            result = a - b;
            break;

        case '*':
            result = a * b;
            break;

        case '/':
            if (b === 0) {
                return 'Error: Division by zero';
            }
            result = a / b;
            break;

        case '%':
            result = a % b;
            break;

        case '**':
            result = a ** b;
            break;

        default:
            return 'Invalid operator';
    }

    return result;
}

// Example usage
console.log('2 + 3 =', calculator(2, 3, '+'));       // 5
console.log('10 - 4 =', calculator(10, 4, '-'));     // 6
console.log('6 * 7 =', calculator(6, 7, '*'));       // 42
console.log('20 / 4 =', calculator(20, 4, '/'));     // 5
console.log('10 % 3 =', calculator(10, 3, '%'));     // 1
console.log('2 ** 8 =', calculator(2, 8, '**'));     // 256
console.log('10 / 0 =', calculator(10, 0, '/'));     // Error: Division by zero
console.log('5 & 2 =', calculator(5, 2, '&'));       // Invalid operator