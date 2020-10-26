console.log('a = ', a) // A variável não precisa ser declarada antes, porém nesse caso ela estará vazia.
var a = 2
console.log('a = ', a)

function teste() {
    console.log('a = ', a)
    var a = 2
    console.log('a = ', a)
}

teste()