
/* 1) Faça um programa que receba uma temperatura em Celsius e chame uma função que converta para Fahrenheit.
 F = 9*C/5 + 32 */
 
 const readline = require ('readline-sync')

const celsius = parseInt(readline.question("Oi, digite a temperatura em Celsius "))

function Fahrenheit (celsius)
    {return ((celsius*9 / 5) + 32)
} 

Fahrenheit (celsius)

console.log(`Esta temperatura em Fahrenheit é  ${(Fahrenheit (celsius))}`)