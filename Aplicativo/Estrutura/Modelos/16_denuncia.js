import { DataTypes } from "sequelize";
import sequelize from "../../Configuracao/db.js";

import User from "./1_User.js";

const Denuncia = sequelize.define('16_denuncia', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_denunciador: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: "id",
        }
    },
    id_denunciado: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: "id",
        }
    },
    tipo: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});

export default Denuncia;