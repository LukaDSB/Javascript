const nums = [1, 2, 3, 4, 5]

//O map cria um array a partir de outro array, a "cópia" sempre será do mesmo tamanho do array usado como base
//for com propósito
//armazenar array em uma variável
let resultado = nums.map(function (x){
    return x * 2
}) 

console.log(resultado)

/*const soma10 = nums.map(function(x){
    return x + 10
})

console.log(soma10)*/

const soma10 = x => x + 10
const triplo = x => x * 3
const paraDinheiro = x => `R$ ${x}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)