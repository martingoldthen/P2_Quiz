const model = require('./model');
const {log, biglog, colorize, errorlog} = require('./out');


/**
 * Muestra la ayuda
 * @param rl Objeto readline usado para implementar el CLI
 */
exports.helpCmd = rl => {
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
exports.listCmd = rl => {
    model.getAll().forEach((quiz, id) =>{
       log(`[${colorize(id, 'magenta')}]: ${quiz.question}`)
    });
    rl.prompt();
};

/**
 * Muestra el quiz indicado en el parametro (pregunta y respuesta)
 * @param rl Objeto readline usado para implementar el CLI
 * @param id ID del quiz a mostrar
 */
exports.showCmd = (rl, id) => {
    if(typeof id=== "undefined"){
        errorlog('Falta el parametro id');
    } else{
        try{
            const quiz = model.getByIndex(id);
            log(`[${colorize(id, 'magenta')}]: ${quiz.question} ${colorize('=>', 'magenta')} ${quiz.answer}`);
        }catch(error){
            errorlog(error.message);
        }
    }
    rl.prompt();
};

/**
 * Añade un nuevo quiz al modelo
 * Pregunta interactivamente por la pregunta y la respuesta
 * @param rl Objeto readline usado para implementar el CLI
 */
exports.addCmd = rl => {                               //question es una funcion callback
    rl.question(colorize(' Introduzca una pregunta: ', 'red'), question => {
        rl.question(colorize(' Introduzca la respuesta ', 'red'), answer => {
            model.add(question,answer);
            log(` ${colorize('Se ha añadido', 'magenta')}:\n ${question} ${colorize('=>','magenta')} ${answer}`);
        })
    });

    rl.prompt();
};

/**
 * Borra un quiz del modelo
 * @param id Clave del quiz a borrar en el modelo
 * @param rl Objeto readline usado para implementar el CLI
 */
exports.deleteCmd = (rl, id) => {
    if(typeof id === "undefined"){
        errorlog('Falta el parametro id');
    } else{
        try{
            model.deleteByIndex(id);
        }catch(error){
            errorlog(error.message);
        }
    }
    rl.prompt();
};

/**
 * Edita un quiz del modelo
 * @param id Clave del quiz a editar en el modelo
 * @param rl Objeto readline usado para implementar el CLI
 */
exports.editCmd = (rl, id) => {
    if(typeof id === "undefined"){
        errorlog(`Falta el parametro id`);
        rl.prompt();
    }else{
        try {
            const quiz = model.getByIndex(id);
            process.stdout.isTTY && setTimeout(() => {rl.write(quiz.question)},0);
            rl.question(colorize(' Introduzca una pregunta: ', 'red'), question => {
                process.stdout.isTTY && setTimeout(() => {rl.write(quiz.answer)},0);
                rl.question(colorize(' Introduzca la respuesta ', 'red'), answer => {
                    model.update(id, question, answer);
                    log(`Se ha cambiado el quiz ${colorize(id, 'magenta')} por: ${question} ${colorize('=>', 'magenta')} ${answer}`);
                    rl.prompt();
                });
            });
        }catch (error){
        errorlog(error.message);
        rl.prompt();
        }
    }
};


/**
 * Prueba un quiz, hace una pregunta del modelo
 * rl.question es asincrona!!!!
 * @param id Clave del quiz a probar
 * @param rl Objeto readline usado para implementar el CLI
 */
exports.testCmd = (rl, id) => {
    if (typeof id === "undefined") {
        errorlog(`Falta el parametro id`);
        rl.prompt();
    } else {
        try {
            const quiz = model.getByIndex(id);
            rl.question(colorize(`${quiz.question}` + "\n", 'red'), answer => {
                if (answer.trim().toLowerCase() === quiz.answer.toLowerCase()) {
                    log("Su respuesta es");
                    biglog('CORRECTA', 'green');
                    rl.prompt();
                } else if(answer.trim().toLowerCase() !== quiz.answer.toLowerCase()) {
                    log("Su respuesta es");
                    biglog('INCORRECTA', 'red');
                    rl.prompt();
                }
            });
        } catch (error) {
            errorlog(error.message);
            rl.prompt();
        }
    }
};

/*
                quiz = model...blabla
    ahora queremos preguntar
    rl.question quiz.q resp => {

       resp === quiz.answer CORRECTO INCORRECTO
        rl.prompt();
    }
        catch
            rl.prompt();*/


/**
 * Pregunta los quizzes existentes aleatoriamente
 * Se gana si se contesta a todos correctamente
 * @param rl Objeto readline usado para implementar el CLI
 */
exports.playCmd = rl => {
    log('Jugar');
    rl.prompt();
};


/**
 * Muestra los autores de la practica
 * Esta simplificado porque el corrector lo pilla mal
 *  @param rl Objeto readline usado para implementar el CLI
 */

exports.creditsCmd = rl => {
    log('MARTIN');
    rl.prompt();
};


/**
 * Termina el programa
 * @param rl Objeto readline usado para implementar el CLI
 */
exports.quitCmd = rl => {
    rl.close();
};

