import { DataTypes } from "sequelize";
import sequelize from "../../Configuracao/db.js";

import Usuario from "./1_usuario.js";

const Paciente = sequelize.define('4_paciente', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
            model: Usuario,
            key: 'id',
        }
    }
});

export default Paciente;