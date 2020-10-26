//Função sem retorno
function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(2, 3) // Parâmetros 'a' e 'b'.
imprimirSoma(2) // 'b' não foi recebido = Undefined. 2 + Undefined = Not a Number.
imprimirSoma(2, 3, 4, 5, 6, 7, 8) // A função só receberá os dois primeiros parâmetros.
imprimirSoma() // Undefined + Undefined.s

//Função com retorno
function soma(a, b = 1){ // O segundo parâmetro possui valor pré definido '1', caso não receba nenhum parâmetro, b = 1.
    return a + b
}

console.log(soma(2,3 )) 
console.log(soma(2))
console.log(soma())