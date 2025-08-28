import { DataTypes } from "sequelize";
import sequelize from "../../Configuracao/db.js";

import Paciente from "./4_paciente.js";
import Profissional from "./5_profissional.js";

const Consulta = sequelize.define('10_consulta', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    data: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    hora: {
        type: DataTypes.TIME,
        allowNull: false,
    },
    link: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    estado: {
        type: DataTypes.STRING,
        allowNull: false,
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
    }
});

export default Consulta;