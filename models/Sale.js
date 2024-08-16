
const { DataTypes } = require('sequelize');
const configDB  = require('../config/db.js')

const Sale = configDB.define('Sale', {
    total: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    payment:{
        type: DataTypes.STRING(20),
        allowNull: false,
    },
    sale_date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        foreignKey: true,
    },
}, {
    tableName: 'sale',
    timestamps: true,
});

module.exports = Sale;