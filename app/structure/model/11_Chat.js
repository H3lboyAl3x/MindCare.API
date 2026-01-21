import { DataTypes } from "sequelize";
import sequelize from "../../config/db.js";

import Patient from "./4_Patient.js";
import Professional from "./5_Professional.js";

const Chat = sequelize.define('11_Chat', {
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
    }
});

export default Chat;