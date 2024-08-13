
import { DataTypes } from 'sequelize';
import configDB from '../config/db.js';

const Product_Category = configDB.define('Product_Category', {
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

export default Product_Category;