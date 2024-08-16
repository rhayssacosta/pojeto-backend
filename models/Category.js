
const { DataTypes } = require('sequelize');
const configDB  = require('../config/db.js')

const Category = configDB.define('Category', {
    name: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    slug: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    use_in_menu: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
}, {
    tableName: 'category',
    timestamps: true,
});

module.exports = Category;
