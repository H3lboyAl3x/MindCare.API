import { DataTypes } from "sequelize";
import sequelize from "../../config/db.js";

import Patient from "./4_Patient.js";

const Payment = sequelize.define('9_Payment', {
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
    id_Patient: {
        type: DataTypes.INTEGER,
        references: {
            model: Patient,
            key: "id",
        }
    }
});

export default Payment;