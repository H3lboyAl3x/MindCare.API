import { DataTypes } from "sequelize";
import sequelize from "../../Configuracao/db.js";

import User from "./1_user.js";

const Adm = sequelize.define('3_adm', {
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