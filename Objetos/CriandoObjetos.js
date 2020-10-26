//usando a notação literal
const obj1 = {}
console.log(obj1)

//Object em JS
const obj2 = new Object
console.log(obj2)

//Funções construtoras
function Produto(nome, preco, desc) {
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 2998.99, 0.25)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

//Função Factory -- função que fabrica um objeto
function criarFuncionario(nome, salariobase, faltas){
    return {
        nome,
        salariobase,
        faltas,
        getsalario(){
            return(salariobase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('João', 7980, 4)
const f2 = criarFuncionario('Maria', 11400, 1)

console.log(f1.getsalario(), f2.getsalario())