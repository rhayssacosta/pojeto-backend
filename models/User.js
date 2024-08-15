
import { DataTypes } from 'sequelize';
import configDB from '../config/db.js';

const User = configDB.define('User', {
    username: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    cpf: {
        type: DataTypes.STRING(14),
        allowNull: false,
        unique: true,
    },
    email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
    },
    phone: {
        type: DataTypes.STRING(20),
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    address: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    district: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    city: {
        type: DataTypes.STRING(50),
        allowNull: false,
    }, 
    complement: {
        type: DataTypes.STRING(50),
        allowNull: true,
    },
}, {
    tableName: 'users',
    timestamps: true,
});

export default User;
