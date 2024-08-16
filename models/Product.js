
const { DataTypes } = require('sequelize');
const configDB  = require('../config/db.js')

const Product = configDB.define('Product', {
    enabled: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
    },
    name: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    slug: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    use_in_menu: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    description: {
        type: DataTypes.STRING(200),
        allowNull: true,
    },
    price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    price_with_discount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
}, {
    tableName: 'products',
    timestamps: true,
});

module.exports = Product;
