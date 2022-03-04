// MAP / REDUCE / FILTER - Caem bastante em entrevista de emprego e são muito poderosos e muito usando em Javascript.
//                       - muito usado com react.
/*MAP - muito parecido com o forEach. a diferença é que o MAP retorna um valor pra algum lugar ( variavel ).
      - cria um novo array a partir do array percorrido ( array original)
      - cria um novo array, com a mesma quantidade de itens do array original.
      - aceita 3 parâmetros:
            - item do array
            - index
            - array completo
*/

// Exemplo 1:

const numbers = [1,2,3,4] // array original

const newArray = numbers.map( (number) => {     //criado um novo array. o map itera item por item do array.
      return number * 2 // no final temos um novo array
})

     console.log(newArray) //mostra o novo array

     
// Exemplo 2:

const students = [
    { name: 'Rodolfo', age: 25 },
    { name: 'Diego', age: 42 },
    { name: 'Isabela', age: 18 },
    { name: 'Elisa', age: 22},
    { name: 'Roberto', age: 55},
    { name: 'Morgana', age: 52},
];

const newStudents = students.map( (student) => {
         const newStudy = {  //essa constante é criada dentro da variável student
             name: student.name + ' do Vale',
             age: student.age + 5
         }
         return newStudy
})

console.log(students) // o array original continua inalterado.
console.log(newStudents)

// 03 formas diferentes de escrever de escrever a função. utilizando o array do exemplo1:

 
const newArray2 = numbers.map( (number) => {      //primeira forma
      return number * 2 
})

const newArray3 = numbers.map( function(number) {  //segunda forma
      return number * 2

})

const newArray4 = numbers.map( number => number * 2)  //terceira forma. lembrando que o javascript embute um return na mesma linha.

     console.log(newArray2)
     console.log(newArray3)
     console.log(newArray4) 

// exemplo 3: outra forma de usar o Map. ainda utilizando o array original do exemplo1.

// const numbers = [1,2,3,4] // array original
const double = number => number * 2 //camada 1 
const sum = number => number + 10  //camada 2 

const newArray5 = numbers.map(double).map(sum) // 1 * 2 + 10 = 12; 2 * 2 + 10 = 14; ... podemos empilhar vários maps.

     console.log(newArray5)








