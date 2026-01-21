import { DataTypes } from "sequelize";
import sequelize from "../../config/db.js";

import Professional from "./5_Professional.js";
import Work_area from "./7_Work_area.js"

const Professional_Work_area = sequelize.define('14_Professional_Work_area', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_Professional: {
        type: DataTypes.INTEGER, 
        references: {
            model: Professional,
            key: "id",
        }
    },
    id_Work_area: {
        type: DataTypes.INTEGER,
        references: {
            model: Work_area,
            key: "id",
        }
    }
});

export default Professional_Work_area;