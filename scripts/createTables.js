
import configDB from '../config/db.js';

async function createTables() {
    try {

        await configDB.authenticate();
        console.log('Conectado ao DB com sucesso!');

        await configDB.sync();
        console.log('Tabelas criadas com sucesso!');
        
    } catch (error) {
        console.error('Erro ao criar tabelas:', error);
    }
}

export default createTables;
