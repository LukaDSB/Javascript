let valor //não inicializada
console.log(valor)

valor = null //ausência de valor, não aponta para nenhum endereço de memória
console.log(valor)
//console.log(valor.toString())

const produto ={}
console.log(produto.preco) //undefined = não definido
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined //evite atribuir undefined
console.log(!!produto.preco)
//delete produto.preco
console.log(produto)

produto.preco = null //sem preço
console.log(!!produto.preco)
console.log(produto)