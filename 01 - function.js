
// a função printing só vai imprimir quando ela for chamada
function printing() {
    console.log('imprimindo')
}

printing()  //chama a função e executa o console.log de dentro da função

//função resumida sem criar a const e usando arrow function.
//o vscode reclama.
printing2 = () => {
    console.log('imprimindo2')
}

printing2()

