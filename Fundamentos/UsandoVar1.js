{{{{var sera = 'Será???'}}}}

console.log(sera) // Variável 'sera' é uma variável global, não está dentro de nenhuma função.

function teste() {
    var local = 123
}

teste()
console.log(local) // Variável 'local' está visível apenas dentro da função 'teste'.