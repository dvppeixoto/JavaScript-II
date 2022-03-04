//Escreva um programa onde, você chame uma função mandando dois argumentos, 2 números, e a função responde qual número é maior.

function num(number1, number2) {
    if(number1 > number2){
        console.log(`${number1} é maior que ${number2}`)
    }
    else{
        console.log(`${number2} é maior que ${number1}`)
    }
    return
    
}

num(120, 67)

//resolução do prof. Rodolfo

const numbers = (numberOne, numberTwo) => {
    if(numberOne > numberTwo) console.log('o primeiro é maior')
    else console.log('o segundo é maior')
}

numbers(2,3)