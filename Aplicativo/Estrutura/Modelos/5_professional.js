import { DataTypes } from "sequelize";
import sequelize from "../../Configuracao/db.js";

import User from "./1_user.js";

const Professional = sequelize.define('5_professional', {
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