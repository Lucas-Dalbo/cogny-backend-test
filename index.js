const { dbConnector } = require('./db');
const { readLineAsync, readline } = require('./interface');
const { fetchDataToDB } = require('./model/fetchDataToDB');
const { findTesteCogny } = require('./model/findTesteCogny');
const { sumPopulationNode } = require('./model/sumPopulationNode');
const { sumPopulationSQL } = require('./model/sumPopulationSQL');


async function main() {
    const db = await dbConnector();
    const actions = {
        "1": fetchDataToDB,
        "2": findTesteCogny,
        "3": sumPopulationNode,
        "4": sumPopulationSQL,
    };

    const response = await readLineAsync(
        "\nO que deseja fazer?\n" +
        "   1. Consultar a API e salvar oas informações no banco de dados.\n" +
        "   2. Exibir as informações no banco de dados.\n" +
        "   3. Calcular a soma das populações de 2018, 2019 e 2020 usando o Node.\n" +
        "   4. Calcular a soma das populações de 2018, 2019 e 2020 usando query SQL.\n" +
        "   0. Sair;\n"
    );
    readline.close();
 
    if (response === "0") {
        console.log("Até mais tarde! ;)");
    } else {
        try {
            const actionResult = await actions[response](db)
            console.log(actionResult);
        } catch {
            console.log("Funcionalidade indisponível");
        }
    }
}

main();
