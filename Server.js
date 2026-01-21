import express from "express";
import dotenv from "dotenv";
import sequelize from "./app/config/db.js";

import User_router from "./app/structure/router/1_User_router.js";
import Patient_router from "./app/structure/router/2_Patient_router.js";
import Professional_router from "./app/structure/router/3_Professional_router.js";
import Communication_router from "./app/structure/router/4_Communication_router.js";
import Extra_router from "./app/structure/router/5_Extra_router.js";

import cors from "cors";
import { ErrorHandler } from "./app/Middlewares/ErrorHandler.js";
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
app.use("/MindCare/API", User_router);
app.use("/MindCare/API", Patient_router);
app.use("/MindCare/API", Professional_router);
app.use("/MindCare/API", Communication_router);
app.use("/MindCare/API", Extra_router);

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

      const Interface = os.networkInterfaces();
      let ipLocal = "localhost";
      for (const interfaceName in Interface) {
        for (const iface of Interface[interfaceName]) {
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