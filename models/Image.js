
import { DataTypes } from "sequelize";
import configDB from "../config/db.js";

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

export default Image;