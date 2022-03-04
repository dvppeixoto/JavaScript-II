/*
      ARRAY - METODOS
*/

const students = ['João', 'Diego', 'Paulo', 'Amanda', 'Flávia', 'Roberto']

//push
students.push('Rodolfo') //adiciona sempre no final do array.
console.log(students)
//length
console.log(students.length) //lembrar que quando permanecer branco se trata de uma propriedade.
//sort
console.log(students.sort()) // lembrar que quando ficar "verde" se trata de um método().
//delete
delete students[1]
console.log(students) //as outras posições não são afetadas. o ítem deletado fica como um espaço vazio( undefined )

//splice (unir / ligar) - unir, ligar - O splice modifica o array original.
const students2 = ['Sávio', 'Felipe', 'Sérgio', 'Clark', 'Letícia']
students2.splice(2,3) //o primeiro parâmetro indica a posição do array inicial e o outro parâmetro quantos arrays em seguida queremos tirar do array contanto com o inicial. 
console.log(students2)
//splice - outro exemplo
const students3 = ['Alves', 'Mel', 'Bubba', 'Bobby', 'Lua']
students3.splice(1,3,'Mar') //estou tirando a partir da posição [1] até a posição [3] e colocando 'Mar'.
console.log(students3)

//slice (fatiar) - O slice precisa de uma variável para não ter que mexer no array original. ele não modifica o array original.
const students4 = ['Orlando', 'Valderez', 'Keno', 'São Pedro', 'Cinthia']
const newStudents = students4.slice(1,3) // permanece dá posição 1 até a posição 2. Pára no 3.
console.log(newStudents)
//pop - tira o último ítem do array

const students5 = ['Nely', 'Jeane', 'Maurídio'] // maurídio foi excluído.
students5.pop()
console.log(students5)

//shift - retira o primeiro ítem do array
const students6 = ['fia', 'antonilda', 'keninha']
students6.shift()
console.log(students6)