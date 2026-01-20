import { DataTypes } from "sequelize";
import sequelize from "../../Configuracao/db.js";

import Patient from "./4_patient.js";

const Payment = sequelize.define('9_payment', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    value: {
        type: DataTypes.DECIMAL,
        allowNull: true,
    },
    session: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    id_patient: {
        type: DataTypes.INTEGER,
        references: {
            model: Patient,
            key: "id",
        }
    }
});

export default Payment;