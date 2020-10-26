const produtos = [
    {nome: 'notebook', preco: 2499, fragil: true},
    {nome: 'iPad Prod', preco: 4199, fragil: true},
    {nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    {nome: 'Como de Plastico', preco: 18.99, fragil: false}
]

console.log(produtos.filter(function (x) {
    return x.preco > 2400
}))