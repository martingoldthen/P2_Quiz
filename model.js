//Modelo de datos.
//
//En esta variable estan todos los quizzes existentes
//Es un array de objetos, cada objeto tiene los atributos
//question y answer para guardar el texto de la pregunta y el de la respuesta
let quizzes = [
    {
        question: "Capital de Italia",
        answer: "Roma"
    },
    {
        question: "Capital de Francia",
        answer: "París"
    },
    {
        question: "Capital de España",
        answer: "Madrid"
    },
    {
        question: "Capital de Portugal",
        answer: "Lisboa"
    }];


//
/**
 * Devuelve el numero total de preguntas existentes
 *
 * @returns {number} numero total de preguntas
 */
exports.count = () => quizzes.length;


/**
 * Añade un nuevo quiz
 *
 * @param question String con la pregunta
 * @param answer   String con la respuesta
 */
exports.add = (question, answer) => {
    quizzes.push({
        question: (question || "").trim(),
        answer: (answer || "").trim()
    });
};


/**
 * Actualiza el quiz situado en la posicion del index
 *
 * @param id        Clave que identifica el quiz a actualizar
 * @param question  String con la pregunta
 * @param answer    String con con la respuesta
 */
exports.update = (id, question, answer) => {
    const quiz = quizzes[id];
    if(typeof quiz === "undefined"){
        throw new Error("El valor del parametro id no es valido");
    }
    quizzes.splice(id, 1, {
        question: (question || "").trim(),
        answer: (answer || "").trim()
    });
};

/**
 * Devuelve todos los quizzes existentes
 *
 * Devuelve un clon del valor guardado en la variable quizzes,
 * es decir, un objeto nuevo con todas las preguntas existentes
 * Para clonar quizzes se usa stringify + parse
 *
 *
 * @returns {any}
 */
exports.getAll = () => JSON.parse(JSON.stringify(quizzes));


/**
 * Devuelve un clon del quiz almacenado en la posicion dada
 *
 * Para clonar el quiz se usa stringify + parse
 *
 * @param id Clave que identifica el clon a devolver
 *
 * @returns {question, answer} El objeto quiz de la posicon dada
 */
exports.getByIndex = id => {
    const quiz = quizzes[id];
    if (typeof quiz === "undefined"){
        throw new Error("El valor del parametro id no es valido");
    }
    return JSON.parse(JSON.stringify(quiz));
};

exports.deleteByIndex = id => {
    const quiz = quizzes[id];
    if(typeof quiz === "undefined"){
        throw new Error("El valor del parametro id no es valido");
    }
    quizzes.splice(id, 1);
};
