/*

- Selecionando Elementos:
     - getElementById() - trás apenas um elemento ( element )
     - getElementByClassName() - trás diversos elementos (HTML Collection)
     - getElementByTagName() - trás diversos elementos (HTML Collection) 
     - getElementByName() - trás os elementos com o nome selecionado. (Nodelist).

     -querySelector - trás apenas um elemento, o primeiro que encontrar (element)
     -querySelectorAll - trás TODOS os elementos que encontrar (NodeList)

- Nodelist x HTML colection

*/

const first = document.getElementById("main-text")
console.log(first)

//o code runner ( ctrl + alt + del) no terminal não funciona.

const paragraph = document.getElementsByClassName('paragraph')
console.log(paragraph)


const tag = document.getElementsByTagName('body')
console.log(tag)

const selector = document.querySelector('p')
console.log(selector)// retorna por padrão o primeiro parágrafo que encontrar.

const selector2 = document.querySelector('.paragraph')
console.log(selector2) //retornou apenas a primeira classe .paragraph

const selector3 = document.querySelectorAll('p')
console.log(selector3) //a diferença do querySelectorAll para o getElementByClass é que ele retorna um Nodelist, já o getElementByClass retorna uma class colection.

const nodelist = document.querySelectorAll('p')
nodelist.forEach(element => {
  console.log(element)
}) // aqui é demonstrado a diferença entre html collection e nodelist. já que o queryselector faz parte do grupo de nodelist, conseguimos usar uma função foreach, por exemplo. Já se fosse por getElementByClass não seria possível por ser um html collection, ou seja, não conseguimos iterar.

const myInput = document.getElementsByName('my-input')
console.log(myInput) //se tivéssemos mais de um input com o nome 'my-input', ele iria chamar todos eles.





