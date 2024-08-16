
const { DataTypes } = require('sequelize');
const configDB  = require('../config/db.js')

const Order = configDB.define('Order', {
    sale_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        foreignKey: true,
    },
    products_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        foreignKey: true,
    },
}, {
    tableName: 'order',
    timestamps: true,
});

module.exports = Order;