"use strict";

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'OHAI> '
});

rl.prompt();

rl.on('line', (line) => {

    let args = line.split(" ");
    let cmd = args[0].toLowerCase().trim();

    switch (cmd) {
        case '':
            rl.prompt();
            break;
        case 'help':
        case 'h':
            helpCmd();
            break;
        case 'quit':
        case 'q':
            quitCmd();
            break;
        case 'add':
            addCmd();
            break;
        case 'list':
            listCmd();
            break;
        case 'show':
            showCmd(args[1]);
            break;
        case 'test':
            testCmd(args[1]);
            break;
        case 'play':
        case 'p':
            playCmd();
            break;
        case 'delete':
            deleteCmd(args[1]);
            break;
        case 'edit':
            editCmd(args[1]);
            break;
        case 'credits':
            creditsCmd();
            break;
        default:
            console.log(`Comando desconocido: '${cmd}'`);
            console.log('Use el comando "help" para ver todos los comandos disponibles');
            rl.prompt();
            break;
    }

}).on('close', () => {
    console.log('Hasta luego MariCarmen');
    process.exit(0);
});


const helpCmd = () => {
    console.log('Comandos:');
    console.log('   h|help - Muestra esta ayuda.');
    console.log('   list - Listar los quizzes existentes');
    console.log('   show <id> - Muestra la pregunta y la respuesta del quiz indicado');
    console.log('   add - Añadir un nuevo quiz interactivamente.');
    console.log('   delete <id> - Borrar el quiz indicado.');
    console.log('   edit <id> - Editar el quiz indicado');
    console.log('   test <id> - Probar el quiz indicado');
    console.log('   p|play - Jugar a preguntar aleatoriamente todos los quizes');
    console.log('   credits - Creditos');
    console.log('   q|quiz - Salir del programa.');
    rl.prompt();
};

const addCmd = () => {
    console.log('añadir un nuevo quiz.');
    rl.prompt();
};

const listCmd = () => {
    console.log('Listar todos los quizes existentes');
    rl.prompt();
};

const showCmd = id => {
    console.log('Muestra el quiz indicado');
    rl.prompt();
};

const playCmd = () => {
    console.log('Jugar');
    rl.prompt();
};

const quitCmd = () => {
    rl.close();
    rl.prompt();
};

const testCmd = id => {
    console.log('Probar el quiz indicado');
    rl.prompt();
};

const deleteCmd = id => {
    console.log('Borrar el quiz indicado');
    rl.prompt();
};

const editCmd = id => {
    console.log('Editar el quiz indicado');
    rl.prompt();
};

const creditsCmd = () => {
    //console.log('Autores de la práctica:');
    console.log('MARTIN');
    rl.prompt();
};