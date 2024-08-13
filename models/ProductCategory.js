
import { DataTypes } from 'sequelize';
import configDB from '../config/db.js';

const ProductCategory = configDB.define('ProductCategory', {
    product_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        foreignKey: true,
    },
    category_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        foreignKey: true,
    },
}, {
    tableName: 'product_category',
    timestamps: true,
});

export default ProductCategory;