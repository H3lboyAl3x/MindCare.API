import { DataTypes } from "sequelize";
import sequelize from "../../Configuracao/db.js";

import Professional from "./5_Professional.js";
import Consultation from "./10_consultation.js"

const Feedback = sequelize.define('8_feedback', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    star: {
        type: DataTypes.DECIMAL,
        allowNull: true,
    },
    id_professional: {
        type: DataTypes.INTEGER,
        references: {
            model: Professional,
            key: "id",
        }
    },
    id_consultation: {
        type: DataTypes.INTEGER,
        references: {
            model: Consultation,
            key: "id",
        }
    }

});

export default Feedback;