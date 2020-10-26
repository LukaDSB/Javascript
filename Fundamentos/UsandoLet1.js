var numero = 1 // 'numero' em escopo global.
{
    let numero = 2 // Variáveis 'let' tem escopo em bloco. 'numero' com escopo em bloco.
    console.log('dentro', numero)
}
console.log('fora', numero)