import { DataTypes } from "sequelize";
import sequelize from "../../config/db.js";

import User from "./1_User.js";

const Message = sequelize.define('12_Message', {
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
    content: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    id_sender: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
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

export default Message;