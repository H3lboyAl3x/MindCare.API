import { DataTypes } from "sequelize";
import sequelize from "../../Configuracao/db.js";

const Area_de_trabalho = sequelize.define('area_de_trabalho', {
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

export default Area_de_trabalho;