import { DataTypes } from "sequelize";
import sequelize from "../../Configuracao/db.js";

import Profissional from "./5_profissional.js";
import Consulta from "./10_consulta.js"

const Feedback = sequelize.define('feedback', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    estrela: {
        type: DataTypes.DECIMAL,
        allowNull: true,
    },
    id_profissional: {
        type: DataTypes.INTEGER,
        references: {
            model: Profissional,
            key: "id",
        }
    },
    id_consulta: {
        type: DataTypes.INTEGER,
        references: {
            model: Consulta,
            key: "id",
        }
    }

});

export default Feedback;