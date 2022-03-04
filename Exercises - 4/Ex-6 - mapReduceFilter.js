// adicionar 10% de valor de mercado a todas as companias. - map
// filtrar apenas as empresas mais antigas até o ano 2000.  - filter
// somar o valor de mercado das empresas filtradas, ou seja, antes de 2000. - reduce


const companies = [
    { name: 'Samsung', marketValue: 50, CEO: 'Kim Hyun Suk', foundedOn: 1938 },
    { name: 'Microsof', marketValue: 415, CEO: 'Satya Nadella', foundedOn: 1975 },
    { name: 'Intel', marketValue: 117, CEO: 'Brian Krzanich', foundedOn: 1968 },
    { name: 'Facebook', marketValue: 383, CEO: 'Mark Zuckerberg', foundedOn: 2004 },
    { name: 'Spotify', marketValue: 30, CEO: 'Daniel EK', foundedOn: 2006 },
    { name: 'Apple', marketValue: 845, CEO: 'Tim Cook', foundedOn:1976 },
]

const companies2 = [
    { name: 'Samsung', marketValue: 50, CEO: 'Kim Hyun Suk', foundedOn: 1938 },
    { name: 'Microsof', marketValue: 415, CEO: 'Satya Nadella', foundedOn: 1975 },
    { name: 'Intel', marketValue: 117, CEO: 'Brian Krzanich', foundedOn: 1968 },
    { name: 'Facebook', marketValue: 383, CEO: 'Mark Zuckerberg', foundedOn: 2004 },
    { name: 'Spotify', marketValue: 30, CEO: 'Daniel EK', foundedOn: 2006 },
    { name: 'Apple', marketValue: 845, CEO: 'Tim Cook', foundedOn:1976 },
]

const newMarketValue = companies.map( (item) => {
         item.marketValue = item.marketValue + (item.marketValue * 10/100)
         return item.marketValue
})
console.log(newMarketValue)

const oldCompanies = companies.filter( (item) => {
         return item.foundedOn < 2000
})
console.log(oldCompanies)

const newCompanies = oldCompanies.reduce( (acc, item) => {
         
         return item.marketValue + acc
}, 0)
console.log(newCompanies)


//resolução do prf. Rodolfo:



const add10PercentMarketValue = company => {  // Função 1 - Map, genérica.
      company.marketValue = company.marketValue + company.marketValue / 10
      
      return company
}
const oldCompanies2 = company => company.foundedOn < 2000 // Função 2 - Filter, genérica.

const allOldCompaniesMarketValue = (acc, company) => acc + company.marketValue  //Função 3 - Reduce, genérica.

const myBestCompanies = companies2.map(add10PercentMarketValue).filter(oldCompanies2) .reduce(allOldCompaniesMarketValue, 0)


console.log(myBestCompanies)




