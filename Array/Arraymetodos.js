const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // .pop remove o elemento no último índice do array
console.log(pilotos) // Impressão do array sem o último elemento (No exemplo atual, "Massa")

pilotos.push('Verstappen') // .push adiciona um elemento ao último índice do array
console.log(pilotos) // Impressão do array após adição pelo método .push

pilotos.shift() // .shift remove o elemento no primeiro índice do array, contrário ao .pop
console.log(pilotos) // Impressão do array após remoção do primeiro elemento através do método .shift

pilotos.unshift('Hamilton') // .unshift contrário de .shift, ou seja, adiciona um elemento ao primeiro índice do array
console.log(pilotos)

// Splice pode  adicionar e remover elementos

// Adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa') // .splice(índice, '0 ou 1', Adicionar antes do índice indicado) 0 == remover 1 == adicinar
console.log(pilotos)

// Remover
pilotos.splice(3, 1) // 'Massa' saiu
console.log(pilotos)

const algunspilotos1 = pilotos.slice(2) // .slice cria um novo array a partir de um já existente //'(2)' == a partir do índice 2
console.log(algunspilotos1) // O índice passado (2), entrará no novo array gerado

const algunspilotos2 = pilotos.slice(1, 4)
console.log(algunspilotos2) // O último índice não é incluído