
function sum(number1, number2){  // os parâmetros ( variáveis ) number1 e number2 ficam esperando para receber os valores quando a função for chamada. podemos ter nenhum parâmetro ou ter vários parâmetros. // é void por padrão = vazio ( não retorna nada se eu não declarar um retorno ). apenas executa a função. void Vs return.
    const result = number1 + number2
    console.log(result)
    return result // retorna o resultado.
      
} // FIM da função.

sum(2,3) // chama a função e injeta os valores 2 e 3 em number1 e number2, respectivamente. // 5


const firstNumber = 10
const seccondNumber = 30

sum(firstNumber, seccondNumber) // o first e o seccond são enviados pra função sum e somados // 40

console.log(`aqui está o primeiro número: ${firstNumber}`) //10
console.log(`aqui está o segundo número: ${seccondNumber}`) //30
console.log(`aqui está o resultado: ${sum(firstNumber, seccondNumber)}`) //40

//abaixo está como deve ser:

function sum2(number1, number2) {
    return number1 + number2 //assim que chegar no return a função para de executar.
    console.log('não será executado') //não será executado por conta do encerramento do return. Esse return foi criado pra que seja chamada lá fora da função.
}

const result = sum2(firstNumber, seccondNumber) //criamos uma variável para resumir a função.

console.log(`aqui está o primeiro número: ${firstNumber}`) //10
console.log(`aqui está o segundo número: ${seccondNumber}`) //30
console.log(`aqui está o resultado: ${sum2(firstNumber, seccondNumber)}`) //40
// ou 
console.log(`aqui está o resultado: ${result}`) //40


