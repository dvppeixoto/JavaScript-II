

const calculate = (number1, operator, number2) => {

    let result
    switch (operator) {
        case '+': result = number1 + number2
            
            break;
        case '-': result = number1 - number2
            
            break;
        case '*': result = number1 * number2
        
            break;
        case '/': result = number1 / number2
        
            break;

        default:
            console.log('Operação não realizada')
            break;
    }
    return result;
}

console.log(calculate(2,'+',4))
console.log(calculate(4,'-',4))
console.log(calculate(5,'*',5))
console.log(calculate(4,'/',2))
console.log(calculate(3,'x',7))


