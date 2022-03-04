/*
FILTER
       - Cria um novo array a partir do array percorrido ( array original )
       - cria um novo array APENAS com os elementos filtrados
       - Aceita 3 parâmetros.
                  - item do array
                  - index
                  - array completo
*/

const list = [
    { name: 'Rodolfo', vip: true },
    { name: 'Maria', vip: false},
    { name: 'Diego', vip: true},
    { name: 'Tamila', vip: true},
    { name: 'Tarcilene', vip: false},
    { name: 'Aninha', vip: true},
    { name: 'Cláudio', vip: false},
]

const justVips = list.filter( (client ) => {
    return true  // vai imprimir o array original
   // return false // não retorna nenhum item do array
   // return client.vip  --> só vai retornar os valores verdadeiros ( true ).
})
console.log(justVips)


// Outro exemplo:

const students = [
    { name: 'Rodolfo', testGrade: 7 },
    { name: 'Maria', testGrade: 5 },
    { name: 'Diego', testGrade: 8 },
    { name: 'Tamila', testGrade: 9 },
    { name: 'Tarcilene', testGrade: 3 },
    { name: 'Aninha', testGrade: 2 },
    { name: 'Cláudio', testGrade: 10},
]

const newStudents = students.filter( (client ) => {
         return client.testGrade >= 7 // o filter substitui o if - else literalmente. filtra somente o que desejamos. 
                                      // é entendido como true. só retorna resultados verdadeiros.   
})

console.log(newStudents)

// ou: const newStudents = students.filter( client => client.testGrade >= 7)