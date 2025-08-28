import express from "express";
import * as Controlador from "../Controladores/1_usuario_controlador.js";

const roteador = express.Router();

// ===== USUARIO ========================================================
roteador.get("/usuario", Controlador.get_all_usuario);
roteador.post("/usuario", Controlador.create_usuario);
roteador.get("/usuario/:id", Controlador.get_usuario_by_id);
roteador.put("/usuario/:id", Controlador.update_usuario);
roteador.delete("/usuario/:id", Controlador.delete_usuario);

// ===== CREDENCIA ======================================================
roteador.get("/credencia", Controlador.get_all_credencia);
roteador.post("/credencia", Controlador.create_credencia);
roteador.get("/credencia/:id", Controlador.get_credencia_by_id);
roteador.put("/credencia/:id", Controlador.update_credencia);
roteador.delete("/credencia/:id", Controlador.delete_credencia);

// ===== ADMINISTRADOR ==================================================
roteador.get("/administrador", Controlador.get_all_administrador);
roteador.post("/administrador", Controlador.create_administrador);
roteador.get("/administrador/:id", Controlador.get_administrador_by_id);
roteador.put("/administrador/:id", Controlador.update_administrador);
roteador.delete("/administrador/:id", Controlador.delete_administrador);

// ===== PACIENTE =======================================================
roteador.get("/paciente", Controlador.get_all_paciente);
roteador.post("/paciente", Controlador.create_paciente);
roteador.get("/paciente/:id", Controlador.get_paciente_by_id);
roteador.put("/paciente/:id", Controlador.update_paciente);
roteador.delete("/paciente/:id", Controlador.delete_paciente);

// ===== PROFISSIONAL ===================================================
roteador.get("/profissional", Controlador.get_all_profissional);
roteador.post("/profissional", Controlador.create_profissional);
roteador.get("/profissional/:id", Controlador.get_profissional_by_id);
roteador.put("/profissional/:id", Controlador.update_profissional);
roteador.delete("/profissional/:id", Controlador.delete_profissional);

export default roteador;