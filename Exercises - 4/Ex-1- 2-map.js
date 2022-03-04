
/* Exercício 1 - usar o map e transformar a lista viva nesta lista comentada:

const list = [
    { name: 'Rodolfo', Vip: true, sector: 'black' },
    { name: 'Maria', Vip: false, sector: 'green'},
    { name: 'Diego', Vip: true, sector: 'black'},
    { name: 'Tamila', Vip: true, sector: 'black'},
    { name: 'Tarcilene', Vip: false, sector: 'green'},
    { name: 'Aninha', Vip: true, sector: 'black'},
    { name: 'Cláudio', Vip: false, sector: 'green'},
]
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

const newList = list.map( (camarote) => {
     if(camarote.vip === true){
               const newCamarote = [
                   { name: camarote.name, vip: camarote.vip, sector: 'black' }
               ]  
               return newCamarote  
     }
     else {
         const newCamarote2 = [ { name: camarote.name, vip: camarote.vip, sector: 'green' }]
         return newCamarote2     
    }   
})

console.log(newList)

// exercício 2 - usar o map e classificar o aluno aprovado ou não. Se >= 7, aprovado.

const students = [
    { name: 'Rodolfo', testGrade: 7 },
    { name: 'Maria', testGrade: 5 },
    { name: 'Diego', testGrade: 8 },
    { name: 'Tamila', testGrade: 9 },
    { name: 'Tarcilene', testGrade: 3 },
    { name: 'Aninha', testGrade: 2 },
    { name: 'Cláudio', testGrade: 10},
]

const newStudents = students.map( (result) => {
      if(result.testGrade >= 7){
          const approved = [ { name: result.name, finalResult: 'Approved' }]
          return approved
      }
      else {
          const disapproved = [ { name: result.name, finalResult: 'Disapproved'}]
          return disapproved
      }
})

console.log(newStudents)

// resolução do prof. Rodolfo:

//exercício 1:
const newList2 = list.map( client => {
    const newList2 = {     //não tem problema criar uma variável da função igual a variável que está fora dela.
        name: client.name,
        vip: client.vip,
        sector: client.vip ? 'Black' : 'Green'
    }
    return newList2
})
console.log(newList2)

//exercício 2:

const approvedStudents = students.map( student => {
     
      let approvedOrNot
      if(student.testGrade >= 7){
          approvedOrNot = 'approved'
      }  else{
          approvedOrNot = 'disapproved'
      }


      const students = {
          name: student.name,
          finalResult: approvedOrNot
      }
      return students
})

console.log(approvedStudents)

