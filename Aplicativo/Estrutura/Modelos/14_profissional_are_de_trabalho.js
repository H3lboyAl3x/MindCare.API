import { DataTypes } from "sequelize";
import sequelize from "../../Configuracao/db.js";

import Professional from "./5_Professional.js";
import Area_de_trabalho from "./7_area_de_trabalho.js"

const Professional_area_de_trabalho = sequelize.define('14_Professional_area_de_trabalho', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_Professional: {
        type: DataTypes.INTEGER,
        references: {
            model: Professional,
            key: "id",
        }
    },
    id_area_de_trabalho: {
        type: DataTypes.INTEGER,
        references: {
            model: Area_de_trabalho,
            key: "id",
        }
    }
});

export default Professional_area_de_trabalho;