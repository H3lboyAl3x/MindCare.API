import { DataTypes } from "sequelize";
import sequelize from "../../config/db.js";

import User from "./1_User.js";
import Consultation from "./10_Consultation.js"

const Notification = sequelize.define('13_Notification', {
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
    id_Consultation: {
        type: DataTypes.INTEGER,
        references: {
            model: Consultation,
            key: "id",
        }
    },
    id_recipient: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: "id",
        }
    }
});

export default Notification;