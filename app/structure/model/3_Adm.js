import { DataTypes } from "sequelize";
import sequelize from "../../config/db.js";

import User from "./1_User.js";

const Adm = sequelize.define('3_Adm', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
            model: User,
            key: 'id',
        }
    }
});

export default Adm;