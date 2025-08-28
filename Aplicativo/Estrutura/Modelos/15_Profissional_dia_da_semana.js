import { DataTypes } from "sequelize";
import sequelize from "../../Configuracao/db.js";

import Profissional from "./5_profissional.js";
import Dia_da_semana from "./6_dia_da_semana.js"

const Profissional_dia_da_semana = sequelize.define('profissional_dia_da_semana', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_profissional: {
        type: DataTypes.INTEGER,
        references: {
            model: Profissional,
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

export default Profissional_dia_da_semana;