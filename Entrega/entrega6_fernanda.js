/*Crie uma função com as seguintes características:

A função deve receber 3 parâmetros.
Se somente um argumento for passado, retorne o valor do argumento.
Se dois parâmetros forem passados, retorne a soma dos dois parâmetros.
Se todos os parâmetros forem passados, retorne a soma do primeiro com o segundo, e o resultado dividido pelo terceiro.
Se nenhum argumento for passado, retorne "não recebeu parâmetro" */
const readline = require('readline-sync')
const p1 = parseFloat(readline.question("Digite o valor 1: "))
const p2 = parseFloat(readline.question("Digite o valor 2:  "))
const p3 = parseFloat(readline.question("Digite o valor 3: "))
const total = soma(p1, p2, p3)

function soma(p1, p2, p3) {
    if (isNaN(p1) && isNaN(p2) && isNaN(p3)) {
        return ("Não existe parametros")
    } else
        if (!isNaN(p1) && !isNaN(p2) && !isNaN(p3)) {
            return ((p1 + p2) / p3)
        }
        else if (!isNaN(p1) && !isNaN(p2) && isNaN(p3)) {
            return (p1 + p2);
        }

        else if (!isNaN(p1) && isNaN(p2) && !isNaN(p3)) {
            return (p1 + p3)
        } else if (isNaN(p1) && !isNaN(p2) && !isNaN(p3)) {
            return (p2 + p3)
        }
        else if (isNaN(p1) && !isNaN(p2) && isNaN(p3)) {
            return (p2)
        } else if (!isNaN(p1) && isNaN(p2) && isNaN(p3)) {
            return (p1)
        }
        else if (isNaN(p1) && isNaN(p2) && !isNaN(p3)) {
            return (p3)
        }
    }console.log(total)
