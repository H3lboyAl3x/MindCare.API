import express from "express";
import dotenv from "dotenv";
import sequelize from "./Aplicativo/Configuracao/db.js";

import User_roteador from "./Aplicativo/Estrutura/Roteadores/1_user_router.js";

import cors from "cors";
import { ErrorHandler } from "./Aplicativo/Middlewares/ErrorHandler.js";
import http from "http";

import path from "path";
import { fileURLToPath } from "url";

import open from "open";
import os from "os";

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

    server.listen(PORT, "0.0.0.0", async () => {

      const interfaces = os.networkInterfaces();
      let ipLocal = "localhost";
      for (const interfaceName in interfaces) {
        for (const iface of interfaces[interfaceName]) {
          if (iface.family === "IPv4" && !iface.internal) {
            ipLocal = iface.address;
          }
        }
      }

      const localUrl = `http://localhost:${PORT}/docs`;
      const networkUrl = `http://${ipLocal}:${PORT}/docs`;

      console.log(`\n--- Server Ready ---`);
      console.log(`Local:   ${localUrl}`);
      console.log(`Rede:    ${networkUrl}`);
      console.log(`--------------------\n`);

      try {
        await open(localUrl);
      } catch (err) {
        console.log("Aviso: Não foi possível abrir o navegador automaticamente.");
      }
    });
  } catch (error) {
    console.error("Falha ao conectar com banco de dados:", error);
  }
})();