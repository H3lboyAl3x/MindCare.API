import { DataTypes } from "sequelize";
import sequelize from "../../Configuracao/db.js";

import Professional from "./5_Professional.js";
import Dia_da_semana from "./6_dia_da_semana.js"

const Professional_dia_da_semana = sequelize.define('15_Professional_dia_da_semana', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_Professional: {
        type: DataTypes.INTEGER,
        references: {
            model: Professional,
            key: "id",
        }
    },
    id_dia_da_semana: {
        type: DataTypes.INTEGER,
        references: {
            model: Dia_da_semana,
            key: "id",
        }
    }
});

export default Professional_dia_da_semana;