import { DataTypes } from "sequelize";
import sequelize from "../../Configuracao/db.js";

import User from "./1_user.js";

const Patient = sequelize.define('4_patient', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
            model: User,
            key: 'id',
        }
    }
});

export default Patient;