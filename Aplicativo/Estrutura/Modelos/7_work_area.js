import { DataTypes } from "sequelize";
import sequelize from "../../Configuracao/db.js";

const Work_area = sequelize.define('7_work_area', {
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