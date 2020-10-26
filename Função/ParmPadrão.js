// Estratégia 1 para gerar valor padrão.
function soma1(a, b, c){
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}

console.log(soma1(), soma1(3), soma1(1, 2, 3), soma1(0, 0, 0)) // "0" retorna falso, logo, assume o valor padrão.

// Estratégias 2, 3 e 4 para gerar valor padrão.
function soma2(a, b, c){
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c // Forma mais segura, se o valor recebido não for recebido um número, retorna valor padrão.
    return a + b + c
}

console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0))

// Valor padrão do es2015
function soma3(a = 1, b = 1, c = 1){ // Forma mais adequada para os recursos atuais da linguagem.
    return a + b + c
}

console.log(soma3(), soma3(3), soma3(1, 2, 3), soma3( 0, 0, 0))