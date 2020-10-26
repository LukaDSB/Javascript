const peso1 = 1.0
const peso2 = Number('2.0')

console.log (peso1, peso2)
console.log(Number.isInteger(peso1)) //isInteger é usado para identificar se a variável em questão é ou não do tipo inteiro, retornando True ou False.
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2 
const media = total / (peso1 + peso2)

console.log(media.toFixed(2)) //toFixed define a quantidade de casas decimais a serem impressas.
console.log (media.toString(2)) //toString transforma a variável em uma String, o número entre parênteses é a base da variável, no exemplo, 2 = binário.
console.log (typeof media)
console.log (typeof Number)