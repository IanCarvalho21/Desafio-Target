//2) Escreva um programa que verifique, em uma string, a existência da letra ‘a’, seja maiúscula ou minúscula, além de informar a quantidade de vezes em que ela ocorre.//
const readline = require('readline');

// Função para contar a quantidade de letras 'a' (maiúscula ou minúscula) em uma string
function contarLetraA(texto) {
    let contador = 0;
    // Percorre cada caractere da string e verifica se é 'a' ou 'A'
    for (let i = 0; i < texto.length; i++) {
        if (texto[i].toLowerCase() === 'a') {
            contador++;
        }
    }
    return contador;
}

// Configurar a interface de leitura para capturar entrada do usuário
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Solicitar ao usuário para digitar uma string
rl.question('Digite uma string para verificar a ocorrência da letra "a": ', (entrada) => {
    const quantidade = contarLetraA(entrada);

    if (quantidade > 0) {
        console.log(`A letra "a" ocorre ${quantidade} vez(es) na string.`);
    } else {
        console.log('A letra "a" não foi encontrada na string.');
    }

    rl.close(); // Fechar a interface após a execução
});
