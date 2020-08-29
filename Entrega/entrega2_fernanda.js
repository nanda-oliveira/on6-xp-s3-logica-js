/* 2. Agora faça o contrário, um programa que receba uma temperatura em Fahrenheit 
e chame uma função que converta para Celsius. */

const readline = require ('readline-sync')

const Fahrenheit = parseInt(readline.question("Oi, digite a temperatura em Fahrenheit "))

function Celsius (Fahrenheit)
    {return (((Fahrenheit-32) * 5 / 9).toFixed(1))
} 

Celsius (Fahrenheit)

console.log(`Esta temperatura em Celsius é  ${(Celsius (Fahrenheit))}`)