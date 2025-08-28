import express from "express";
import * as Controlador from "../Controladores/4_comunicacao_controlador.js";

const roteador = express.Router();

// ===== CONSULTA =======================================================
roteador.get("/consulta", Controlador.get_all_consulta);
roteador.post("/consulta", Controlador.create_consulta);
roteador.get("/consulta/:id", Controlador.get_consulta_by_id);
roteador.put("/consulta/:id", Controlador.update_consulta);
roteador.delete("/consulta/:id", Controlador.delete_consulta);

// ===== CHAT ===========================================================
roteador.get("/chat", Controlador.get_all_chat);
roteador.post("/chat", Controlador.create_chat);
roteador.get("/chat/:id", Controlador.get_chat_by_id);
roteador.put("/chat/:id", Controlador.update_chat);
roteador.delete("/chat/:id", Controlador.delete_chat);

// ===== MENSAGEM =======================================================
roteador.get("/mensagem", Controlador.get_all_mensagem);
roteador.post("/mensagem", Controlador.create_mensagem);
roteador.get("/mensagem/:id", Controlador.get_mensagem_by_id);
roteador.put("/mensagem/:id", Controlador.update_mensagem);
roteador.delete("/mensagem/:id", Controlador.delete_mensagem);

// ===== NOTIFICACAO ====================================================
roteador.get("/notificacao", Controlador.get_all_notificacao);
roteador.post("/notificacao", Controlador.create_notificacao);
roteador.get("/notificacao/:id", Controlador.get_notificacao_by_id);
roteador.put("/notificacao/:id", Controlador.update_notificacao);
roteador.delete("/notificacao/:id", Controlador.delete_notificacao);

export default roteador;