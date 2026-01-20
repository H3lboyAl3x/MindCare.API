import express from "express";
import dotenv from "dotenv";
import sequelize from "./Aplicativo/Configuracao/db.js";

import User_roteador from "./Aplicativo/Estrutura/Roteadores/1_user_router.js";

import cors from "cors";
import { ErrorHandler } from "./Aplicativo/Middlewares/ErrorHandler.js";
import http from "http";

import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Roteadores
app.use("/MindCare/API", User_roteador);

// Middleware de erros
app.use(ErrorHandler);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use("/docs", express.static(path.join(__dirname, "public")));

const server = http.createServer(app);

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Banco conectado com sucesso!");

    server.listen(PORT, () => {
      console.log(`Server is ready at http://localhost:${PORT}`);
      console.log(`Documentação em: http://localhost:${PORT}/docs`);
    });
  } catch (error) {
    console.error("Falha ao conectar com banco de dados:", error);
  }
})();