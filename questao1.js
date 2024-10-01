//1) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.//
const readline = require('readline');

// Função para verificar se um número pertence à sequência de Fibonacci
function pertenceFibonacci(numero) {
    let a = 0;
    let b = 1;
    
    if (numero === 0 || numero === 1) {
        return true;
    }

    let proximo = a + b;
    while (proximo <= numero) {
        if (proximo === numero) {
            return true;
        }
        a = b;
        b = proximo;
        proximo = a + b;
    }

    return false;
}

// Configurar a interface de leitura para capturar entrada do usuário
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Solicitar ao usuário para digitar um número
rl.question('Digite um número para verificar se pertence à sequência de Fibonacci: ', (entrada) => {
    const numeroEntrada = parseInt(entrada);

    // Verificar se o número pertence à sequência de Fibonacci
    if (pertenceFibonacci(numeroEntrada)) {
        console.log(`O número ${numeroEntrada} pertence à sequência de Fibonacci.`);
    } else {
        console.log(`O número ${numeroEntrada} NÃO pertence à sequência de Fibonacci.`);
    }

    rl.close(); // Fechar a interface após a execução
});
