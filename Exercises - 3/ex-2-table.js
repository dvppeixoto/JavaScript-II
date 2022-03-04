// [ ] Escreva um programa onde, você chame uma função enviando um número (aceitar somente valores entre 1 e 10) e escrever a tabuada de 1 a 10 do valor lido.

function num(number) {
    if(number < 1 || number >10){
        console.log('FORA dos parâmetros')
        return  // usado para parar o programa.
    }
    for(i=1; i <=10; i++){
        console.log(`${i} + ${number} = ${i + number} `)
    }
}

num(4)

    