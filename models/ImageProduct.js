
const { DataTypes } = require('sequelize');
const configDB  = require('../config/db.js')

const ImageProduct = configDB.define('ImageProduct', {
    product_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        foreignKey: true,
    },
    enabled: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
    },
    image_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        foreignKey: true,
    },
}, {
    tableName: 'image_product',
    timestamps: true,
});

module.exports = ImageProduct;
