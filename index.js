const { dbConnector } = require('./db');
const { readLineAsync, readline } = require('./interface');
const { fetchDataToDB } = require('./model/fetchDataToDB');
const { findAllActive } = require('./model/findAllActive');
const { sumPopulationNode } = require('./model/sumPopulationNode');


async function main() {
    const db = await dbConnector();
    const actions = {
        "1": fetchDataToDB,
        "2": findAllActive,
        "3": sumPopulationNode,
    };

    const response = await readLineAsync(
        "\nO que deseja fazer?\n" +
        "   1. Consultar a API e salvar os dados no banco de dados.\n" +
        "   2. Listar informações do banco de dados.\n" +
        "   3. Calcular a soma das populações de 2018, 2019 e 2020\n" +
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
