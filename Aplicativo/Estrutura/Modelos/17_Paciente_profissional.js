import { DataTypes } from "sequelize";
import sequelize from "../../Configuracao/db.js";

import Paciente from "./4_paciente.js";
import Profissional from "./5_profissional.js";

const Paciente_profissional = sequelize.define('16_paciente_profissional', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_paciente: {
        type: DataTypes.INTEGER,
        references: {
            model: Paciente,
            key: "id",
        }
    },
    id_profissional: {
        type: DataTypes.INTEGER,
        references: {
            model: Profissional,
            key: "id",
        }
    },
});

export default Paciente_profissional;