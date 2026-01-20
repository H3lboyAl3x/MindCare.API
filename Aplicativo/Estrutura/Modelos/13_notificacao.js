import { DataTypes } from "sequelize";
import sequelize from "../../Configuracao/db.js";

import User from "./1_User.js";
import Consulta from "./10_consulta.js"

const Notificacao = sequelize.define('13_notificacao', {
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
    id_consulta: {
        type: DataTypes.INTEGER,
        references: {
            model: Consulta,
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

export default Notificacao;