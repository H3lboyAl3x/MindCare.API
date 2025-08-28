import { DataTypes } from "sequelize";
import sequelize from "../../Configuracao/db.js";

import Usuario from "./1_usuario.js";

const Denuncia = sequelize.define('16_denuncia', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_denunciador: {
        type: DataTypes.INTEGER,
        references: {
            model: Usuario,
            key: "id",
        }
    },
    id_denunciado: {
        type: DataTypes.INTEGER,
        references: {
            model: Usuario,
            key: "id",
        }
    },
    tipo: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});

export default Denuncia;