//transformado a nossa função anônima em um modo flecha. 
// Use Arrow Functions!!

function sum(number1, number2){      //modo funtion padrão
    const result = number1 + number2
    return result
}


const sum2 = function(number1, number2){  // função anônima
    const result = number1 + number2
    return result
}

const sum3 = (number1, number2) => number1 + number2 //modo flecha
//obs: no modo flecha some a necessidade de usar o nome function e não é mecessário utilizar o return para retornar algum valor da função.

const sum4 = (number1, number2) => { // modo flecha com chaves precisa do return de volta.
    return number1 + number2 
} 

const sum5 = () => {    //arrow function sem parâmetro
return number1 + number2
}

const sum6 = number1 => { //arrow function com apenas um parâmetro não precisa de parênteses.
    return number1
}


