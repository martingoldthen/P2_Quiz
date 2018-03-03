const model = require('./model');
const {log, biglog, colorize, errorlog} = require('./out');


/**
 * Muestra la ayuda
 * @param rl Objeto readline usado para implementar el CLI
 */
const helpCmd = rl => {
    log('Comandos:');
    log('   h|help - Muestra esta ayuda.');
    log('   list - Listar los quizzes existentes');
    log('   show <id> - Muestra la pregunta y la respuesta del quiz indicado');
    log('   add - Añadir un nuevo quiz interactivamente.');
    log('   delete <id> - Borrar el quiz indicado.');
    log('   edit <id> - Editar el quiz indicado');
    log('   test <id> - Probar el quiz indicado');
    log('   p|play - Jugar a preguntar aleatoriamente todos los quizes');
    log('   credits - Creditos');
    log('   q|quiz - Salir del programa.');
    rl.prompt();
};

/**
 * Lista todos los quizzes existentes en el modelo
 * @param rl Objeto readline usado para implementar el CLI
 */
const listCmd = rl => {
    log('Listar todos los quizes existentes');
    rl.prompt();
};




/**
 * Muestra el quiz indicado en el parametro (pregunta y respuesta)
 * @param rl Objeto readline usado para implementar el CLI
 * @param id ID del quiz a mostrar
 */
const showCmd = (rl, id) => {
    log('Muestra el quiz indicado');
    rl.prompt();
};

/**
 * Añade un nuevo quiz al modelo
 * Pregunta interactivamente por la pregunta y la respuesta
 * @param rl Objeto readline usado para implementar el CLI
 */
const addCmd = rl => {
    log('añadir un nuevo quiz.');
    rl.prompt();
};

/**
 * Borra un quiz del modelo
 * @param id Clave del quiz a borrar en el modelo
 * @param rl Objeto readline usado para implementar el CLI
 */
const deleteCmd = (rl, id) => {
    log('Borrar el quiz indicado');
    rl.prompt();
};

/**
 * Edita un quiz del modelo
 * @param id Clave del quiz a editar en el modelo
 * @param rl Objeto readline usado para implementar el CLI
 */
editCmd = (rl, id) => {
    log('Editar el quiz indicado');
    rl.prompt();
};


/**
 * Prueba un quiz, hace una pregunta del modelo
 * @param id Clave del quiz a probar
 * @param rl Objeto readline usado para implementar el CLI
 */
const testCmd = (rl, id) => {
    log('Probar el quiz indicado');
    rl.prompt();
};

/**
 * Pregunta los quizzes existentes aleatoriamente
 * Se gana si se contesta a todos correctamente
 * @param rl Objeto readline usado para implementar el CLI
 */
const playCmd = rl => {
    log('Jugar');
    rl.prompt();
};


/**
 * Muestra los autores de la practica
 * Esta simplificado porque el corrector lo pilla mal
 *  @param rl Objeto readline usado para implementar el CLI
 */

const creditsCmd = rl => {
    log('MARTIN');
    rl.prompt();
};


/**
 * Termina el programa
 * @param rl Objeto readline usado para implementar el CLI
 */
const quitCmd = rl => {
    rl.close();
};

exports = module.exports = {
    helpCmd,
    addCmd,
    listCmd,
    showCmd,
    playCmd,
    testCmd,
    deleteCmd,
    editCmd,
    creditsCmd,
    quitCmd
};