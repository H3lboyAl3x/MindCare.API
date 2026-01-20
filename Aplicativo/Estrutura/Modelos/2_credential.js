import { DataTypes } from "sequelize";
import sequelize from "../../Configuracao/db.js";

import User from "./1_user.js";

const Credential = sequelize.define('2_credential', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
            model: User,
            key: 'id',
        }
    },
    number: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    pass: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

export default Credential;