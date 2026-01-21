import { DataTypes } from "sequelize";
import sequelize from "../../config/db.js";

const Work_area = sequelize.define('7_Work_area', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    area: {
        type: DataTypes.STRING,
        allowNull: true,
    },
});

export default Work_area;