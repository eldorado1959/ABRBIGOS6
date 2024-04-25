const readlineSync = require('readline-sync');

// Array para armazenar os abrigos cadastrados
let abrigos = [];

// Função para cadastrar um novo abrigo
function cadastrarAbrigo() {
    console.log('*** Cadastro de Abrigo ***');
    let nome = readlineSync.question('Nome do Abrigo: ');
    let endereco = readlineSync.question('Endereco: ');
    let telefone = readlineSync.question('Telefone: ');
    let capacidade = readlineSync.question('Lotaçao: ');

    // Objeto representando o abrigo
    let abrigo = {
        nome: nome,
        endereco: endereco,
        telefone: telefone,
        capacidade: capacidade
    };

    // Adiciona o abrigo ao array de abrigos
    abrigos.push(abrigo);

    console.log('Abrigo cadastrado com sucesso!\n');
}

// Função para listar todos os abrigos cadastrados
function listarAbrigos() {
    console.log('*** Lista de Abrigos ***');
    if (abrigos.length === 0) {
        console.log('Nenhum abrigo cadastrado.\n');
        return;
    }
    for (let i = 0; i < abrigos.length; i++) {
        console.log(`Abrigo ${i + 1}:`);
        console.log(`Nome: ${abrigos[i].nome}`);
        console.log(`Endereço: ${abrigos[i].endereco}`);
        console.log(`Telefone: ${abrigos[i].telefone}`);
        console.log(`Capacidade de Lotação: ${abrigos[i].capacidade}\n`);
    }
}

// Função para procurar um abrigo por nome
function procurarAbrigo() {
    console.log('*** Procurar Abrigo ***');
    let nomeProcurado = readlineSync.question('Digite o nome do abrigo que deseja procurar: ');

    let abrigosEncontrados = abrigos.filter(abrigo => abrigo.nome === nomeProcurado);

    if (abrigosEncontrados.length > 0) {
        console.log('Abrigos encontrados:');
        abrigosEncontrados.forEach((abrigo, index) => {
            console.log(`Abrigo ${index + 1}:`);
            console.log(`Nome: ${abrigo.nome}`);
            console.log(`Endereço: ${abrigo.endereco}`);
            console.log(`Telefone: ${abrigo.telefone}`);
            console.log(`Capacidade de Lotação: ${abrigo.capacidade}\n`);
        });
    } else {
        console.log('Nenhum abrigo encontrado com esse nome.\n');
    }
}

// Menu principal
function main() {
    while (true) {
        console.log('*** Menu Principal ***');
        console.log('1. Cadastrar Abrigo');
        console.log('2. Listar Abrigos');
        console.log('3. Procurar Abrigo');
        console.log('4. Sair');

        let opcao = readlineSync.question('Escolha uma opção: ');

        switch (opcao) {
            case '1':
                cadastrarAbrigo();
                break;
            case '2':
                listarAbrigos();
                break;
            case '3':
                procurarAbrigo();
                break;
            case '4':
                console.log('Saindo do programa.');
                return;
            default:
                console.log('Opção inválida. Tente novamente.\n');
        }
    }
}

// Inicia o programa
main();
