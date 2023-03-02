const { dbConnector } = require('./db');
const { readLineAsync, readline } = require('./interface');
const { fetchDataToDB } = require('./model/fetchDataToDB');
const { findAllActive } = require('./model/findAllActive');


// Call start
(async () => {
    const db = await dbConnector();
    const actions = {
        "1": fetchDataToDB,
        "2": findAllActive,
    };

    const response = await readLineAsync(
        "\nO que deseja fazer?\n" +
        "   1. Consultar a API e salvar os dados no banco de dados.\n" +
        "   2. Listar infromações do banco de dados.\n" +
        "   0. Sair;\n"
    );
    readline.close();
 
    if (response === "0") {
        console.log("Até mais tarde! ;)");
    } else {
        try {
            await actions[response](db);
        } catch {
            console.log("Funcionalidade indisponível");
        }
    }
})();