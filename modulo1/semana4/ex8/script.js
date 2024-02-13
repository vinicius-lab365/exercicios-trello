// Implemente uma função que determine se um número é par ou ímpar.

function checkNumber(number) {
    if (isNaN(number) || number === 0) {
        return "Digite um número válido!";
    }
    
    return number % 2 === 0 ? "Par" : "Ímpar";
}

console.log(checkNumber(1));