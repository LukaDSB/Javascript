const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function(nome, indice) { //Primeiro parametro é o elemento a ser percorrido, e o segundo é o  índice do elemento que está sendo executado
    console.log(`${indice + 1}) ${nome}`)
})//O ÍNDICE SEMPRE É PASSADO COMO SEGUNDO PARÂMETRO

//Dentro do laço forEach, há um laço for que irá percorrer todo o array (ex: aprovados), ele executa cada elemento por vez atribuindo seu índice a começar o 0
//Indice 0 vai receber o primeiro elemento do array (no caso, Agatha)
//Cada vez que o laço percorrer o array, ao índice será atraibuído índice + 1

aprovados.forEach(nome => console.log(nome)) //Pode ser usado com arrow function
//A variável "nome" recebe o primeiro elemento do array (no caso, Agatha) e após a impressão o laço se repete atribuindo à "nome" o elemento seguinte do array
/*------------------------------------------------------------------*/

//Também pode-se: armazenar uma função em uma variável e passar a função para o .forEach
const exibirAprovados = aprovado => console.log(aprovado) //A variável "aprovado" é uma função que recebeu o primeiro elemento do array 
aprovados.forEach(exibirAprovados)