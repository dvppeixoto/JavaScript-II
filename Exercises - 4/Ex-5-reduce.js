
//fazer a soma de mercado

const companies = [
    { name: 'Samsung', marketValue: 50, CEO: 'Kim Hyun Suk', foundedOn: 1938},
    { name: 'Microsof', marketValue: 415, CEO: 'Satya Nadella', foundedOn: 1975},
    { name: 'Intel', marketValue: 117, CEO: 'Brian Krzanich', foundedOn: 1968},
    { name: 'Facebook', marketValue: 383, CEO: 'Mark Zuckerberg', foundedOn: 2004},
    { name: 'Spotify', marketValue: 30, CEO: 'Daniel EK', foundedOn: 2006},
    { name: 'Apple', marketValue: 845, CEO: 'Tim Cook', foundedOn:1976},
]

const reduce = companies.reduce( (acc, value) => { //ou: const reduce = companies.reduce( ((acc, current.marketValue), 0)
        return value.marketValue + acc 
}, 0)

console.log(reduce)

//de outra forma: nesta forma utilizamos quando o cálculo é mais complexo.

const newReduce = (acc,value) => value.marketValue + acc
const result = companies.reduce(newReduce, 0)
console.log(result)  

