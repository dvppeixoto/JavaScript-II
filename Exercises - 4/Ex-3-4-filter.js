
//retornar apenas os números pares e divisíveis por 5 usando filter.
const list = [20,3,234,12,17,541,6,87,275,1000]

const newList = list.filter( (number) => {
    return number % 2 === 0 && number % 5 === 0
})

console.log(newList)

//Exercício 2: mostrar apenas as empresas fundadas após 1975 e mais que 2 milhoes de U$ de valor de mercado.

const companies = [
    { name: 'Samsung', marketValue: 50, CEO: 'Kim Hyun Suk', foundedOn: 1938},
    { name: 'Microsof', marketValue: 415, CEO: 'Satya Nadella', foundedOn: 1975},
    { name: 'Intel', marketValue: 117, CEO: 'Brian Krzanich', foundedOn: 1968},
    { name: 'Facebook', marketValue: 383, CEO: 'Mark Zuckerberg', foundedOn: 2004},
    { name: 'Spotify', marketValue: 30, CEO: 'Daniel EK', foundedOn: 2006},
    { name: 'Apple', marketValue: 845, CEO: 'Tim Cook', foundedOn:1976},
]

const newCompanies = companies.filter( (companie) => {
        return companie.foundedOn > 1975 && companie.marketValue > 200
})

console.log(newCompanies)

// resolução do prof Rodolfo:

// Exercício 1:

  const newList2 = list.filter( number => {
      if(number % 2 !== 0) return false
      if(number % 5 !== 0) return false

      return true
  })
      console.log(newList2)


//Exercício 2:

const newCompanies2 = companies.filter(company => {
        if(company.foundedOn <= 1975 ) return false
        if(company.marketValue <= 200) return false

        return true

})

console.log(newCompanies2)


