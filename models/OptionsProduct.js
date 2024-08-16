
const { DataTypes } = require('sequelize');
const configDB  = require('../config/db.js')

const OptionsProduct = configDB.define('OptionsProduct', {
    product_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        foreignKey: true,
    },
    title: {
        type: DataTypes.STRING(200),
        allowNull: false,
    },
    shape: {
        type: DataTypes.ENUM('square', 'circle'),
        defaultValue: 'square',
    },
    radius: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
    },
    type: {
        type: DataTypes.ENUM('text', 'color'),
        defaultValue: 'text',
        allowNull: true,
    },
    values: {
        type: DataTypes.STRING(200),
        allowNull: true,
    },
}, {
    tableName: 'options_product',
    timestamps: true,
});

module.exports = OptionsProduct;
