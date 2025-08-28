import { DataTypes } from "sequelize";
import sequelize from "../../Configuracao/db.js";

import Usuario from "./1_usuario.js";

const Profissional = sequelize.define('profissional', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
            model: Usuario,
            key: 'id',
        }
    },
    nif: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    experiencia: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    estrela: {
        type: DataTypes.DECIMAL,
        allowNull: false,
    },
});

export default Profissional;