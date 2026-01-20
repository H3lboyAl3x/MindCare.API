import { DataTypes } from "sequelize";
import sequelize from "../../Configuracao/db.js";

import Patient from "./4_Patient.js";
import Professional from "./5_Professional.js";

const Patient_Professional = sequelize.define('16_Patient_Professional', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
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
    },
});

export default Patient_Professional;