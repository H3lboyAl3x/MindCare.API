import { DataTypes } from "sequelize";
import sequelize from "../../config/db.js";

import Professional from "./5_Professional.js";
import Day_of_week from "./6_Day_of_week.js"

const Professional_Day_of_week = sequelize.define('15_Professional_Day_of_week.', {
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
    id_Day_of_week: {
        type: DataTypes.INTEGER,
        references: {
            model: Day_of_week,
            key: "id",
        }
    }
});

export default Professional_Day_of_week;