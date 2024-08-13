
import User from '../models/User.js';
import Product from '../models/Product.js';
import ProductCategory from '../models/ProductCategory.js';
import OptionsProduct from '../models/OptionsProduct.js';
import ImageProduct from '../models/ImageProduct.js';
import Image from '../models/Image.js';
import Category from '../models/Category.js';

async function insertData() {
    try {
        // INSERT INTO users ...
        const user = await User.create({
            username: 'Wanessa',
            cpf: '123.456.789-10',
            email: 'wanessa@email.com',
            phone: '(11) 99999-9999',
            password: 'testeDeAPI'
        });
        console.log(`Novo usuário criado: ${user.toJSON()}`);



    } catch (error) {
        console.error('Erro ao inserir dados iniciais:', error);
    }
}

export default insertData;