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

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Banco conectado com sucesso!");

    if (isLocal) {
      await sequelize.sync(); 
      
      server.listen(PORT, "0.0.0.0", async () => {
        const interfaces = os.networkInterfaces();
        let ipLocal = "localhost";
        for (const name in interfaces) {
          for (const iface of interfaces[name]) {
            if (iface.family === "IPv4" && !iface.internal) {
              ipLocal = iface.address;
            }
          }
        }

        console.log(`\n--- Server Ready (LOCAL) ---`);
        console.log(`Local:   http://localhost:${PORT}/docs`);
        console.log(`Rede:    http://${ipLocal}:${PORT}/docs`);
        console.log(`--------------------\n`);

        try {
          await open(`http://localhost:${PORT}/docs`);
        } catch (err) {
          console.log("Aviso: Navegador não abriu automaticamente.");
        }
      });
    } else {
      console.log("Servidor pronto para produção (Vercel)");
    }
  } catch (error) {
    console.error("Falha ao conectar:", error);
  }
})();

export default app;