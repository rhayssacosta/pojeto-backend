
import { DataTypes } from 'sequelize';
import configDB from '../config/db.js';

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

export default ImageProduct;
