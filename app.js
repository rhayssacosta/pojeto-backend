
import createDatabase from "./scripts/createDatabase.js";
import createTables from "./scripts/createTables.js";
import insertData from "./scripts/insertData.js";

async function main() {
    try {
        await createDatabase();
        await createTables();
        await insertData();

    } catch (error) {
        console.log('Erro na execução do processo:', error);
    }
}

main();
