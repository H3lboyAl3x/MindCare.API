import { DataTypes } from "sequelize";
import sequelize from "../../config/db.js";

import User from "./1_User.js";

const Professional = sequelize.define('5_Professional', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
            model: User,
            key: 'id',
        }
    },
    nif: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    experience: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    star: {
        type: DataTypes.DECIMAL,
        allowNull: false,
    },
});

export default Professional;