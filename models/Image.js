
const { DataTypes } = require('sequelize');
const configDB  = require('../config/db.js')

const Image = configDB.define('Image', {
    name: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    url: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
}, {
    tableName: 'image',
    timestamps: true,
});

module.exports = Image;