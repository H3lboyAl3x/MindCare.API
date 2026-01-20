import express from "express";
import dotenv from "dotenv";
import sequelize from "./Aplicativo/Configuracao/db.js";
import User_roteador from "./Aplicativo/Estrutura/Roteadores/1_user_router.js";
import cors from "cors";
import { ErrorHandler } from "./Aplicativo/Middlewares/ErrorHandler.js";
import path from "path";
import { fileURLToPath } from "url";
import http from "http";

import open from "open";
import os from "os";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const isLocal = process.env.NODE_ENV !== 'production';

app.use(cors());
app.use(express.json());
app.use("/MindCare/API", User_roteador);
app.use(ErrorHandler);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use("/docs", express.static(path.join(__dirname, "public")));


const server = http.createServer(app);

const start = async () => {
  try {
    await sequelize.authenticate();
    console.log("Banco conectado com sucesso!");

    if (process.env.NODE_ENV !== 'production') {
      await sequelize.sync();
      server.listen(PORT, "0.0.0.0", async () => {
        console.log(`--- Server Ready (LOCAL) ---`);
        console.log(`Porta: ${PORT}`);
        try { await open(`http://localhost:${PORT}/docs`); } catch (e) {}
      });
    } else {
      console.log("Modo Produção: Servidor pronto.");
    }
  } catch (error) {
    console.error("Erro:", error);
  }
};

start();

export default app;