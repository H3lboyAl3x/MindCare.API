import { DataTypes } from "sequelize";
import sequelize from "../../config/db.js";

import Professional from "./5_Professional.js";
import Consultation from "./10_Consultation.js"

const Feedback = sequelize.define('8_Feedback', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    star: {
        type: DataTypes.DECIMAL,
        allowNull: true,
    },
    id_Professional: {
        type: DataTypes.INTEGER,
        references: {
            model: Professional,
            key: "id",
        }
    },
    id_Consultation: {
        type: DataTypes.INTEGER,
        references: {
            model: Consultation,
            key: "id",
        }
    }

});

export default Feedback;