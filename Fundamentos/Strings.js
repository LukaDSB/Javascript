const escola = "Cod3r"

console.log(escola.charAt(4)) // ChartAt é usado para imprimir o caracter guardado no índice indicado, no caso, 3
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3))
console.log(escola.indexOf('3'))

console.log(escola.substring(1)) //substring é usado para pular a string desejada e imprimir a partir dela
console.log(escola.substring (0, 3)) //Pode ser usado para indicar o intervalo desejado para a leitura

console.log('Escola '.concat(escola).concat("!"))
console.log(escola.replace(3, 'e'))

console.log('Ana,Maria,Pedro'.split(','))