
import User from '../models/User.js';
import Product from '../models/Product.js';
import ProductCategory from '../models/ProductCategory.js';
import OptionsProduct from '../models/OptionsProduct.js';
import ImageProduct from '../models/ImageProduct.js';
import Image from '../models/Image.js';
import Category from '../models/Category.js';

async function insertData() {
    try {
        // INSERT INTO users
        const user = [
            await User.create({
                username: 'Maria Silva',
                cpf: '123.456.789-00',
                email: 'maria.silva@example.com',
                phone: '(11) 91234-5678',
                password: 'senhaSegura123',
                address: 'Rua das Flores, 123',
                district: 'Centro',
                city: 'São Paulo',
                complement: 'Apto 101',
            }),
            await User.create({
                username: 'João Oliveira',
                cpf: '987.654.321-00',
                email: 'joao.oliveira@example.com',
                phone: '(21) 99876-5432',
                password: 'senhaSegura456',
                address: 'Av. Brasil, 456',
                district: 'Copacabana',
                city: 'Rio de Janeiro',
                complement: null,
            }),
            await User.create({
                username: 'Ana Souza',
                cpf: '111.222.333-44',
                email: 'ana.souza@example.com',
                phone: '(31) 98765-4321',
                password: 'senhaSegura789',
                address: 'Rua dos Pinheiros, 789',
                district: 'Savassi',
                city: 'Belo Horizonte',
                complement: 'Bloco B, Apto 202',
            }),
            await User.create({
                username: 'Lucas Martins',
                cpf: '222.333.444-55',
                email: 'lucas.martins@example.com',
                phone: '(41) 91234-5678',
                password: 'senhaSegura321',
                address: 'Av. Curitiba, 101',
                district: 'Centro',
                city: 'Curitiba',
                complement: 'Casa 2',
            }),
            await User.create({
                username: 'Fernanda Alves',
                cpf: '333.444.555-66',
                email: 'fernanda.alves@example.com',
                phone: '(71) 99876-5432',
                password: 'senhaSegura654',
                address: 'Rua Bahia, 202',
                district: 'Barra',
                city: 'Salvador',
                complement: 'Apto 305',
            }),
        ];

        const products = [
            await Product.create({
                enabled: true,
                name: 'Tênis Running Nike Air Max',
                slug: 'tenis-running-nike-air-max',
                use_in_menu: true,
                stock: 150,
                description: 'Tênis ideal para corrida, com amortecimento Air Max.',
                price: 499.90,
                price_with_discount: 449.90,
            }),
            await Product.create({
                enabled: true,
                name: 'Camiseta Adidas Performance',
                slug: 'camiseta-adidas-performance',
                use_in_menu: true,
                stock: 200,
                description: 'Camiseta leve e respirável para atividades esportivas.',
                price: 99.90,
                price_with_discount: 89.90,
            }),
            await Product.create({
                enabled: true,
                name: 'Bola de Futebol Nike Strike',
                slug: 'bola-futebol-nike-strike',
                use_in_menu: true,
                stock: 100,
                description: 'Bola de futebol com excelente controle e durabilidade.',
                price: 129.90,
                price_with_discount: 119.90,
            }),
            await Product.create({
                enabled: false,
                name: 'Shorts Under Armour HeatGear',
                slug: 'shorts-under-armour-heatgear',
                use_in_menu: false,
                stock: 75,
                description: 'Shorts leves com tecnologia HeatGear para manter o corpo seco.',
                price: 149.90,
                price_with_discount: 134.90,
            }),
            await Product.create({
                enabled: true,
                name: 'Tênis Casual Puma Suede Classic',
                slug: 'tenis-casual-puma-suede-classic',
                use_in_menu: true,
                stock: 50,
                description: 'Tênis casual icônico com design clássico em camurça.',
                price: 299.90,
                price_with_discount: 269.90,
            }),
        ];
        

        console.log('Usuários cadastrados com sucesso!');

    } catch (error) {
        console.error('Erro ao inserir dados iniciais:', error);
    }
}

export default insertData;