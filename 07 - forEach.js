/*
For each -- mais poderoso dos FOR - serve para iterar arrays. recebe até 3 argumentos.
*/

const students = [
    { name: 'Rodolfo', age: 25 },
    { name: 'Diego', age: 42 },
    { name: 'Isabela', age: 18 },
    { name: 'Elisa', age: 22},
    { name: 'Roberto', age: 55},
    { name: 'Morgana', age: 52},
];

students.forEach( (student, index, array)  => {  //a primeira posição recebe ítem por ítem do array. a segunda posição recebe a posição de cada ítem. já a terceira posição mostra todo o array o número de vezes que tem o próprio array. Obs: a terceira posição só funciona se as duas posições anteriores forem utilizadas.
    console.log(student, index, array)
} )

//Exemplo: Se caso precisassemos calcular a média da idade de um array gigante de um banco de dados de 1500 alunos de uma escola, faríamos da seguinte forma:

const students2 = [
    { name: 'Rodolfo', age: 25 },
    { name: 'Diego', age: 42 },
    { name: 'Isabela', age: 18 },
    { name: 'Elisa', age: 22},
    { name: 'Roberto', age: 55},
    { name: 'Morgana', age: 52},
];

let allStudentsAge = 0

students2.forEach(  (student, index) => {
    allStudentsAge = allStudentsAge + student.age

})

const averageAge = allStudentsAge / students2.length

console.log(`A média dos alunos é de ${averageAge.toFixed(0)} anos.`)

// outro exemplo:

const students3 = [
    { name: 'Rodolfo', age: 25 },
    { name: 'Diego', age: 42 },
    { name: 'Isabela', age: 18 },
    { name: 'Elisa', age: 22},
    { name: 'Roberto', age: 55},
    { name: 'Morgana', age: 52},
];

students3.forEach( function(objetos, posicao) {    //foreach usando um function normal sem arrowfunction
      console.log(objetos, posicao)
      console.log(`meu nome é ${objetos.name}, tenho ${objetos.age} anos e estou na posição ${posicao}`)
})




    


