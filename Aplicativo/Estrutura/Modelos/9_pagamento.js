import { DataTypes } from "sequelize";
import sequelize from "../../Configuracao/db.js";

import Paciente from "./4_paciente.js";

const Pagamento = sequelize.define('9_pagamento', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    valor: {
        type: DataTypes.DECIMAL,
        allowNull: true,
    },
    sessao: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    tipo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    estado: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    id_paciente: {
        type: DataTypes.INTEGER,
        references: {
            model: Paciente,
            key: "id",
        }
    }
});

export default Pagamento;