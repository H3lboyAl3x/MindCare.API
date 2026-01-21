import { DataTypes } from "sequelize";
import sequelize from "../../config/db.js";

import Patient from "./4_Patient.js";
import Professional from "./5_Professional.js";

const Consultation = sequelize.define('10_Consultation', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    date: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    hour: {
        type: DataTypes.TIME,
        allowNull: false,
    },
    link: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    id_Patient: {
        type: DataTypes.INTEGER,
        references: {
            model: Patient,
            key: "id",
        }
    },
    id_Professional: {
        type: DataTypes.INTEGER,
        references: {
            model: Professional,
            key: "id",
        }
    }
});

export default Consultation;