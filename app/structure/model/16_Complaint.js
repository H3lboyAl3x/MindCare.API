import { DataTypes } from "sequelize";
import sequelize from "../../config/db.js";

import User from "./1_User.js";

const Complaint = sequelize.define('16_Complaint', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_User1: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: "id",
        }
    },
    id_User2: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: "id",
        }
    },
    tipo: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});

export default Complaint;