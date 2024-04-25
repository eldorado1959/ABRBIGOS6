const readlineSync = require('readline-sync');

// Array para armazenar os abrigos cadastrados
let abrigos = [];

// Função para cadastrar um novo abrigo
function cadastrarAbrigo() {
    console.log('*** Cadastro de Abrigo ***');
    let nome = readlineSync.question('Nome do Abrigo: ');
    let endereco = readlineSync.question('Endereço: ');
    let telefone = readlineSync.question('Telefone: ');
    let capacidade = readlineSync.question('Capacidade de Lotação: ');

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
    console.log('Nome               | Endereço           | Telefone    | Capacidade');
    console.log('--------------------------------------------------------------------');
    abrigos.forEach(abrigo => {
        console.log(`${padronizarTexto(abrigo.nome, 20)} | ${padronizarTexto(abrigo.endereco, 20)} | ${padronizarTexto(abrigo.telefone, 12)} | ${abrigo.capacidade}`);
    });
}

// Função para procurar um abrigo por nome
function procurarAbrigo() {
    console.log('*** Procurar Abrigo ***');
    let nomeProcurado = readlineSync.question('Digite o nome do abrigo que deseja procurar: ');

    let abrigosEncontrados = abrigos.filter(abrigo => abrigo.nome === nomeProcurado);

    if (abrigosEncontrados.length > 0) {
        console.log('Abrigos encontrados:');
        console.log('Nome               | Endereço           | Telefone    | Capacidade');
        console.log('--------------------------------------------------------------------');
        abrigosEncontrados.forEach(abrigo => {
            console.log(`${padronizarTexto(abrigo.nome, 20)} | ${padronizarTexto(abrigo.endereco, 20)} | ${padronizarTexto(abrigo.telefone, 12)} | ${abrigo.capacidade}`);
        });
    } else {
        console.log('Nenhum abrigo encontrado com esse nome.\n');
    }
}

// Função para padronizar o texto para exibição
function padronizarTexto(texto, tamanho) {
    if (texto.length < tamanho) {
        return texto.padEnd(tamanho);
    } else {
        return texto.slice(0, tamanho - 3) + '...';
    }
}

// Menu principal
function main() {
    while (true) {
        console.log('*** Menu Principal ***');
        console.log('01. Cadastrar Abrigo');
        console.log('02. Listar Abrigos');
        console.log('03. Procurar Abrigo');
        console.log('04. Sair');

        let opcao = readlineSync.question('Escolha uma opção: ');

        switch (opcao) {
            case '01':
                cadastrarAbrigo();
                break;
            case '02':
                listarAbrigos();
                break;
            case '03':
                procurarAbrigo();
                break;
            case '04':
                console.log('Saindo do programa.');
                return;
            default:
                console.log('Opção inválida. Tente novamente.\n');
        }
    }
}

// Inicia o programa
main();




