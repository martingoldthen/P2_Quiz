const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'quiz> '
});

rl.prompt();

rl.on('line', (line) => {
    switch (line.trim()) {
        case '':
            break;
        case 'help':
        case 'h':
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
            break;
        case 'quit':
        case 'q':
            rl.close();
            break;
        case 'add':
            console.log('añadir un nuevo quiz.');
            break;
        case 'list':
            console.log('Listar todos los quizes existentes');
            break;
        case 'show':
            console.log('Muestra el quiz indicado');
            break;
        case 'test':
            console.log('Probar el quiz indicado');
            break;
        case 'play':
        case 'p':
            console.log('Jugar');
            break;
        case 'delete':
            console.log('Borrar el quiz indicado');
            break;
        case 'edit':
            console.log('Editar el quiz indicado');
            break;
        case 'credits':
            console.log('Autores de la práctica:');
            console.log('Martin Gonzalez Calvo');
            break;
        default:
            console.log(`Comando desconocido: '${line.trim()}'`);
            console.log('Use el comando "help" para ver todos los comandos disponibles');
            break;
    }
    rl.prompt();
}).on('close', () => {
    console.log('Hasta luego MariCarmen');
    process.exit(0);
});
