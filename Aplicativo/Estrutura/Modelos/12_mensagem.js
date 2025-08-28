import { DataTypes } from "sequelize";
import sequelize from "../../Configuracao/db.js";

import Usuario from "./6_disponibilidade.js";

const Mensagem = sequelize.define('mensagem', {
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
    estado: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    id_remetente: {
        type: DataTypes.INTEGER,
        references: {
            model: Usuario,
            key: "id",
        }
    },
    id_destinatoria: {
        type: DataTypes.INTEGER,
        references: {
            model: Usuario,
            key: "id",
        }
    }
});

export default Mensagem;