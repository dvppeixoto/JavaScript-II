// A prefeitura de uma cidade fez uma pesquisa entre seus habitantes, coletando dados sobre o salário e número de filhos. A prefeitura deseja saber: - média do salário da população; - média do número de filhos; - maior salário; - O final da leitura de dados se dará com a entrada de um salário negativo. - Faça isso usando uma função!

function fortaleza(menorSalario, maiorSalario, filhos, casal) {

    const mediaSalario = (menorSalario + maiorSalario) / 2
    const mediaFilhos = filhos / casal
    if (menorSalario < 0 || maiorSalario < 0) {
        return console.log("SALÁRIO INEXISTENTE")
    }
    console.log(`a média salarial é ${mediaSalario}`)
    console.log(`a média de filhos é ${mediaFilhos}`)
    console.log(`o maior salário é ${maiorSalario}`)

}

fortaleza(780, 2400, 50, 100)
fortaleza(-200, 1400, 50, 100)
fortaleza(600, -100, 10, 60) 

//resolução do prof. Rodolfo

const people = [   //array de pessoas
    {
        numberOfChildren: 2,
        salary: 2000
    },

    {
        numberOfChildren: 5,
        salary: 3000
    },

    {
        numberOfChildren: 0,
        salary: 2500
    },

    {
        numberOfChildren: 2,
        salary: 1000
    },

    {
        numberOfChildren: 3,
        salary: 2300
    },

    {
        numberOfChildren: 1,
        salary: 200
    },

    {
        numberOfChildren: 0,
        salary: -2000
    }

]

function findAverageAndHighestSalary(peopleInformation) {

    let averageSalary = 0  //média do salário
    let averageChildren = 0 //média de filhos
    let highestSalary = 0  //maior salário. Na primeira passagem do for vai valer 2000. depois 3000...

    for (let i = 0; i <= peopleInformation.length; i++) {

        const salary = peopleInformation[i].salary  // vai guardar o salário atual do objeto de acordo com as passadas do for, ou seja, o valor do salário vai sendo substituído por cada iteração.
        const children = peopleInformation[i].numberOfChildren //o mesmo acontece com o children.

        if (salary > highestSalary) {
              highestSalary = salary  // aqui vai guardar o maior salário em highestSalary de acordo com as passadas do for.
        }
        
        if (salary < 0) { 
            console.log(`Média de salário R$ ${(averageSalary / i).toFixed(0)}`) //toFixed(0) para não deixar nenhuma casa decimal.
            console.log(`Média de filhos ${(averageChildren / i).toFixed(0)}`)
            console.log(`Maior salário R$ ${highestSalary}`)
            break
        }  
        else { //se não do if acima, ou seja, se o salário não for negativo.
            averageSalary = averageSalary + salary //soma os valores dos salários de cada objeto por passada do for.
            averageChildren += children //a mesma coisa que acima.
        }

    }
}

findAverageAndHighestSalary(people) //chama a função mandando o array de pessoas

//terceira forma do pro. Rodolfo

function averageAndHighestSalary(information) {

    let averageSalary = 0  
    let averageChildren = 0 
    let highestSalary = 0 
    
    let i =0

    while (information[i].salary > 0) { //enquanto o salário for maior que 0 ele não pára de iterar. pára quando encontra um salário negativo.
        averageSalary = averageSalary + information[i].salary //acumulando salário
        averageChildren += information[i].numberOfChildren  //acumulando numero de filhos
        information[i].salary > highestSalary ? highestSalary = information[i].salary : highestSalary = highestSalary // guarda o maior salário ou não.
        i++
        
    }
    console.log(`Média de salário R$ ${(averageSalary / i).toFixed(0)}`) 
    console.log(`Média de filhos ${(averageChildren / i).toFixed(0)}`)
    console.log(`Maior salário R$ ${highestSalary}`)
        
    
}

averageAndHighestSalary(people)


