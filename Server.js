import express from "express"; // <--- Faltava isso!
import dotenv from "dotenv";
import sequelize from "./Aplicativo/Configuracao/db.js";

import usuario_roteador from "./Aplicativo/Estrutura/Roteadores/1_usuario_roteador.js";
import paciente_roteador from "./Aplicativo/Estrutura/Roteadores/2_paciente_roteador.js";
import profissional_roteador from "./Aplicativo/Estrutura/Roteadores/3_profissional_roteador.js";
import comunicacao_roteador from "./Aplicativo/Estrutura/Roteadores/4_comunicacao_roteador.js";
import extra_roteador from "./Aplicativo/Estrutura/Roteadores/5_extra_roteador.js";

import cors from "cors";
import { ErrorHandler } from "./Aplicativo/Middlewares/ErrorHandler.js";
import http from "http";

dotenv.config(); // <--- precisa executar, senão não carrega o .env

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Roteadores
app.use("/MindCare/API", usuario_roteador);
app.use("/MindCare/API", paciente_roteador);
app.use("/MindCare/API", profissional_roteador);
app.use("/MindCare/API", comunicacao_roteador);
app.use("/MindCare/API", extra_roteador);

// Middleware de erros
app.use(ErrorHandler);

const server = http.createServer(app);

(async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ Banco conectado com sucesso!");

    server.listen(PORT, () => {
      console.log(`🚀 Servidor rodando na porta ${PORT}`);
    });
  } catch (error) {
    console.error("❌ Falha ao conectar com banco de dados:", error);
  }
})();