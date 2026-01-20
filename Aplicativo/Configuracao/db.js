import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: 'postgres',
        logging: false,
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false
            }
        }
    }
);

// Sincronização inteligente
const syncDatabase = async () => {
    try {
        const isProduction = process.env.NODE_ENV === 'production' || process.env.VERCEL;
        
        await sequelize.sync({ force: isProduction ? false : false }); 
        console.log("Banco de dados sincronizado.");
    } catch (error) {
        console.error("Erro ao sincronizar tabelas:", error);
    }
};

syncDatabase();

export default sequelize;