
import User from '../models/User.js';
import Product from '../models/Product.js';

async function insertData() {
    try {
        // INSERT INTO users ...
        const user = await User.create({
            username: 'Wanessa',
            cpf: '123.456.789-10',
            email: 'wanessa@email.com',
            phone: '(11) 99999-9999',
            password: 'teste'
        });
        console.log(`Novo usuário criado: ${user.toJSON()}`);

       

    } catch (error) {
        console.error('Erro ao inserir dados iniciais:', error);
    }
}

export default insertData;