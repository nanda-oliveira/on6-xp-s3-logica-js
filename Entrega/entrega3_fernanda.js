/* 3. Faça um programa que receba um valor em metros e e chame uma função que converta em milímetros. */

const readline = require ('readline-sync')

const metros = parseFloat(readline.question("Digite o valor em metros "))

function milim (metros)
    {return ((metros*1000).toFixed(1))

}
milim (metros)

console.log(`Este valor representa ${milim(metros)} milimetros. `)