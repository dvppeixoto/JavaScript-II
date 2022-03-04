/*
REDUCE ( reduzir )
  - retorna um valor ( pode ser um novo array, um objeto, string, number, etc ). não obrigatoriamente um array.
  - aceita 4 parâmetros
      - acumulador
      - valor atual
      - index
      - array completo
*/

const list = [1,2,3,4]

const sum = list.reduce( (acc, current) => {
          return acc + current
}, 0) // o 0 é o valor inicial do acumulador 

console.log(sum)

//exemploe 2 p/ mostrar o acumulador atuando:
const sum2 = list.reduce( (acc, current) => {  // ou const sum2 = list.reduce( (acc, current) => acc + current, 0)
    console.log('acumulador', acc)
    console.log('atual', current)
    
    return acc + current
}, 0) // o 0 é o valor inicial do acumulador 

console.log(sum2)


//outra forma de escrever o reduce:

const myReduce = (acc,current) => acc + current
const sum3 = list.reduce( myReduce, 0)

console.log(sum3)

