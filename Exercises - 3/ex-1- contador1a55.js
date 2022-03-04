// [ ] Escreva um programa onde, você chame uma função enviando um número, a função deve imprime na tela os número de 1 até o número que você enviou.


function num(number) {
    for(let i=1; i + 1; i++){
        if(number>=i) {
            console.log(i)
            }
        else{
            break;
        }    
    }
    return number;
    }
    
(num(55));

//correção do prof. Rodolfo

const func2 = number => {
    for(i=1; i < number; i++){
        console.log('contando...', i)
    }

}

func2(30)

