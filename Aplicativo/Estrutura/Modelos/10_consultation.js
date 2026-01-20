import { DataTypes } from "sequelize";
import sequelize from "../../Configuracao/db.js";

import Patient from "./4_patient.js";
import Professional from "./5_professional.js";

const Consultation = sequelize.define('10_consultation', {
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
    id_patient: {
        type: DataTypes.INTEGER,
        references: {
            model: Patient,
            key: "id",
        }
    },
    id_professional: {
        type: DataTypes.INTEGER,
        references: {
            model: Professional,
            key: "id",
        }
    }
});

export default Consultation;