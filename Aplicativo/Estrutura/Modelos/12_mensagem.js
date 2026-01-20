import { DataTypes } from "sequelize";
import sequelize from "../../Configuracao/db.js";

import User from "./1_User.js";

const Mensagem = sequelize.define('12_mensagem', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    data: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    hora: {
        type: DataTypes.TIME,
        allowNull: false,
    },
    conteudo: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    id_remetente: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: "id",
        }
    },
    id_destinatoria: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: "id",
        }
    }
});

export default Mensagem;