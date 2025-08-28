import { DataTypes } from "sequelize";
import sequelize from "../../Configuracao/db.js";

import Profissional from "./5_profissional.js";
import Area_de_trabalho from "./7_area_de_trabalho.js"

const Profissional_area_de_trabalho = sequelize.define('14_profissional_area_de_trabalho', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_profissional: {
        type: DataTypes.INTEGER,
        references: {
            model: Profissional,
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

export default Profissional_area_de_trabalho;