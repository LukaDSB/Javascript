for (let i = 0; i < 10; i++){  //Variáveis declaradas com 'let' tem escopo de bloco. Só é visível dentro do bloco.
    console.log(i)
}
console.log('i = ',i) // 'i' não pode ser "detectado", pois é uma variável local do laço 'for'.