import { DataTypes } from "sequelize";
import sequelize from "../../Configuracao/db.js";

import Usuario from "./1_usuario.js";

const Administrador = sequelize.define('3_administrador', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
            model: Usuario,
            key: 'id',
        }
    }
});

export default Administrador;