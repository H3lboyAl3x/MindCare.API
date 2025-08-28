import { DataTypes } from "sequelize";
import sequelize from "../../Configuracao/db.js";

const Usuario = sequelize.define('1_usuario', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    data_de_nascimento: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    genero: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    estado: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    }
});

export default Usuario;