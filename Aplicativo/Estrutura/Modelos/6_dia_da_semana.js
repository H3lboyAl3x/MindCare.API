import { DataTypes } from "sequelize";
import sequelize from "../../Configuracao/db.js";

const Dia_da_semana = sequelize.define('dia_da_semana', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    dia: {
        type: DataTypes.STRING,
        allowNull: true,
    },
});

export default Dia_da_semana;