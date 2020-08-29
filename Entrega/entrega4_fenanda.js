/* 4. Crie uma função que receba um número e devolva uma soma progressiva. 
Por exemplo, recebendo o número 5, a função deve retornar 15, ou seja, o resultado de 1 + 2 + 3 + 4 + 5. */


const readline = require ('readline-sync')

const numero = parseFloat(readline.question("Digite um numero: "))
let sequencia=0

function soma(numero){
    for (i=1; i<=numero; i++){
        sequencia+=i
 
    }
 console.log(sequencia)

} 
soma(numero)
