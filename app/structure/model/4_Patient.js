import { DataTypes } from "sequelize";
import sequelize from "../../config/db.js";

import User from "./1_User.js";

const Patient = sequelize.define('4_Patient', {
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