/* Escreva um programa onde, você cria uma função geradora de desconto. 

- A função aceita 4 parâmetros (Nome do cliente, valor total da compra, um booleano que diz se é a primeira compra do cliente ou não, um booleando que diz se o cliente vai pagar a vista ou não)

- Os descontos funcionam da seguinte forma: 

- Se é a primeira compra do cliente, pagar a vista, e a compra for maior que R$ 1000 => 30% de desconto 

- Se é a primeira compra do cliente, pagar a vista, e a compra for menor que R$ 1000, e maior que R$ 500 => 25% de desconto     

- Se é a primeira compra do cliente, pagar a vista e a compra for menor que R$ 500 => desconto de 20% 

- Se é a primeira compra do cliente, NÃO pagar a vista, e a compra for maior que R$ 1000 => 20% de desconto - Se é a primeira compra do cliente, NÃO pagar a vista, e a compra for menor que R$ 1000, e maior que R$ 500 => 15% de desconto 

- Se é a primeira compra do cliente, NÃO pagar a vista e a compra for menor que R$ 500 => desconto de 10% 

- Se NÃO é a primeira compra do cliente, pagar a vista, e a compra for maior que R$ 1000 => 20% de desconto     

- Se NÃO é a primeira compra do cliente, pagar a vista, e a compra for menor que R$ 1000, e maior que R$ 500 => 15% de desconto 

- Se NÃO é a primeira compra do cliente, pagar a vista e a compra for menor que R$ 500 => desconto de 10% 

- Se NÃO é a primeira compra do cliente, NÃO pagar a vista, e a compra for maior que R$ 1000 => 10% de desconto - Se NÃO é a primeira compra do cliente, NÃO pagar a vista, e a compra for menor que R$ 1000, e maior que R$ 500 => 5% de desconto 

- Se NÃO é a primeira compra do cliente, NÃO pagar a vista e a compra for menor que R$ 500 => SEM DESCONTO
- A função deve imprimir na tela: 

- Se o cliente recebeu desconto, imprima na tela um agradecimento pela compra, o valor total sem desconto, o valor total com desconto e a porcentagem de desconto que ele recebeu.       

- Se o cliente não recebeu desconto, imprima na tela um agradecimento pela compra, o valor total da sua compra e um cupom de desconto. Esse cupom deve ser um valor aleatório entre 10 e 20% para a próxima compra.
*/

function geradorDesconto(nome, valor, novoCliente, avista) {
    
//- Se é a primeira compra do cliente, pagar a vista, e a compra for maior que R$ 1000 => 30% de desconto 
            if(novoCliente == 'sim' && avista == 'sim' && valor > 1000) {
                const desconto30 = (30/100) * valor
                const valorTotalDesc = valor - desconto30
                console.log(`O valor total de sua compra foi de ${valor} reais.`)
                console.log(`Caro(a) ${nome}, Obrigado e PARABÉNS! Você ganhou 30% de desconto.`)
                console.log(`O valor total com desconto é de ${valorTotalDesc}.`)
                console.log(`O seu desconto foi de ${desconto30} reais.`)
          }
//- Se é a primeira compra do cliente, pagar a vista, e a compra for menor que R$ 1000, e maior que R$ 500 => 25% de desconto           
            else if(novoCliente == 'sim' && avista == 'sim' && (valor > 500 && valor < 1000)) {
                const desconto25 = (25/100) * valor
                const valorTotalDesc = valor - desconto25
                console.log(`O valor total de sua compra foi de ${valor} reais.`)
                console.log(`Caro(a) ${nome}, Obrigado e PARABÉNS! Você ganhou 25% de desconto.`)
                console.log(`O valor total com desconto é de ${valorTotalDesc}.`)
                console.log(`O seu desconto foi de ${desconto25} reais.`)
          }

//- Se é a primeira compra do cliente, pagar a vista e a compra for menor que R$ 500 => desconto de 20% 
            else if(novoCliente == 'sim' && avista == 'sim' && (valor < 500)) {
                const desconto20 = (20/100) * valor
                const valorTotalDesc = valor - desconto20
                console.log(`O valor total de sua compra foi de ${valor} reais.`)
                console.log(`Caro(a) ${nome}, Obrigado e PARABÉNS! Você ganhou 20% de desconto.`)
                console.log(`O valor total com desconto é de ${valorTotalDesc}.`)
                console.log(`O seu desconto foi de ${desconto20} reais`)
}
//- Se é a primeira compra do cliente, NÃO pagar a vista, e a compra for maior que R$ 1000 => 20% de desconto
            else if(novoCliente == 'sim' && avista == 'não' && (valor > 1000)) {
                const desconto20 = (20/100) * valor
                const valorTotalDesc = valor - desconto20
                console.log(`O valor total de sua compra foi de ${valor} reais.`)
                console.log(`Caro(a) ${nome}, Obrigado e PARABÉNS! Você ganhou 20% de desconto.`)
                console.log(`O valor total com desconto é de ${valorTotalDesc}.`)
                console.log(`O seu desconto foi de ${desconto20} reais.`)
}
//- Se é a primeira compra do cliente, NÃO pagar a vista, e a compra for menor que R$ 1000, e maior que R$ 500 => 15% de desconto 
            else if(novoCliente == 'sim' && avista == 'não' && (valor > 500 && valor < 1000)) {
                const desconto15 = (15/100) * valor
                const valorTotalDesc = valor - desconto15
                console.log(`O valor total de sua compra foi de ${valor} reais.`)
                console.log(`Caro ${nome}, Obrigado e PARABÉNS! Você ganhou 15% de desconto.`)
                console.log(`O valor total com desconto é de ${valorTotalDesc}.`)
                console.log(`O seu desconto foi de ${desconto15} reais.`)
}
//- Se NÃO é a primeira compra do cliente, pagar a vista e a compra for menor que R$ 500 => desconto de 10% 
            else if(novoCliente == 'não' && avista == 'sim' && (valor < 500)) {
                const desconto10 = (10/100) * valor
                const valorTotalDesc = valor - desconto10
                console.log(`O valor total de sua compra foi de ${valor} reais.`)
                console.log(`Caro(a) ${nome}, Obrigado e PARABÉNS! Você ganhou 10% de desconto.`)
                console.log(`O valor total com desconto é de ${valorTotalDesc}.`)
                console.log(`O seu desconto foi de ${desconto10} reais.`)
} 
//- Se NÃO é a primeira compra do cliente, NÃO pagar a vista, e a compra for maior que R$ 1000 => 10% de desconto.
            else if(novoCliente == 'não' && avista == 'não' && (valor > 1000)) {
                const desconto10 = (10/100) * valor
                const valorTotalDesc = valor - desconto10
                console.log(`O valor total de sua compra foi de ${valor} reais.`)
                console.log(`Caro(a) ${nome}, Obrigado e PARABÉNS! Você ganhou 10% de desconto.`)
                console.log(`O valor total com desconto é de ${valorTotalDesc}.`)
                console.log(`O seu desconto foi de ${desconto10} reais.`)
} 
//- Se NÃO é a primeira compra do cliente, NÃO pagar a vista, e a compra for menor que R$ 1000, e maior que R$ 500 => 5% de desconto 
            else if(novoCliente == 'não' && avista == 'não' && (valor > 500 && valor < 1000)) {
                const desconto5 = (5/100) * valor
                const valorTotalDesc = valor - desconto5
                console.log(`O valor total de sua compra foi de ${valor} reais.`)
                console.log(`Caro(a) ${nome}, Obrigado e PARABÉNS! Você ganhou 5% de desconto.`)
                console.log(`O valor total com desconto é de ${valorTotalDesc}.`)
                console.log(`O seu desconto foi de ${desconto5} reais.`)
} 
//- Se NÃO é a primeira compra do cliente, NÃO pagar a vista e a compra for menor que R$ 500 => SEM DESCONTO
            else if(novoCliente == 'não' && avista == 'não' && (valor < 500 )) {
                
                console.log(`Caro(a) ${nome}, Obrigado! O valor de sua compra é de ${valor} reais.`)
                console.log(`Você acaba de ganhar um desconto de ${Math.floor(Math.random() * (20 - 10) + 10)
                }% para a sua próxima compra.`) //Math.random() * (max - min) + min;
} 




}
geradorDesconto('Tamila',4000,'sim','sim')

//resolução do prof. Rodolfo
// precisa preencher os console.log

function calculateDiscount(name, value, firstPurchase, cashPayment) {
    if(firstPurchase && cashPayment){

        if(value > 1000 ) {}
        else if(value < 500) {}
        else {}

    }
    if(firstPurchase && !cashPayment) {

        if(value > 1000 ) {}
        else if(value < 500) {}
        else {}

    }
    if(!firstPurchase && cashPayment) {

        if(value > 1000 ) {}
        else if(value < 500) {}
        else {}

    }
    if(!firstPurchase && !cashPayment){

        if(value > 1000 ) {}
        else if(value < 500) {

            Math.floor(Math.random() * (20 - 10) + 10)
        }
        else {}

    }
}     

    
