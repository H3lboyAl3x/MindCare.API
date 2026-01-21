import { DataTypes } from "sequelize";
import sequelize from "../../config/db.js";

const Day_of_week = sequelize.define('6_Day_of_week', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    day: {
        type: DataTypes.STRING,
        allowNull: true,
    },
});

export default Day_of_week;