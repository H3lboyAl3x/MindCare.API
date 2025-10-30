import express from "express";
import * as Controlador from "../Controladores/5_extra_controlador.js";

const roteador = express.Router();

// ===== PROFISSIONAL_AREA_DE_TRABALHO =================================
roteador.get("/profissional_area_de_trabalho", Controlador.get_all_profissional_area_de_trabalho);
roteador.post("/profissional_area_de_trabalho", Controlador.create_profissional_area_de_trabalho);
roteador.get("/profissional_area_de_trabalho/:id", Controlador.get_profissional_area_de_trabalho_by_id);
roteador.put("/profissional_area_de_trabalho/:id", Controlador.update_profissional_area_de_trabalho);
roteador.delete("/profissional_area_de_trabalho/:id", Controlador.delete_profissional_area_de_trabalho);

// ===== PROFISSIONAL_DIA_DA_SEMANA ====================================
roteador.get("/profissional_dia_da_semana", Controlador.get_all_profissional_dia_da_semana);
roteador.post("/profissional_dia_da_semana", Controlador.create_profissional_dia_da_semana);
roteador.get("/profissional_dia_da_semana/:id", Controlador.get_profissional_dia_da_semana_by_id);
roteador.put("/profissional_dia_da_semana/:id", Controlador.update_profissional_dia_da_semana);
roteador.delete("/profissional_dia_da_semana/:id", Controlador.delete_profissional_dia_da_semana);

// ===== DENUNCIA ======================================================
roteador.get("/denuncia", Controlador.get_all_denuncia);
roteador.post("/denuncia", Controlador.create_denuncia);
roteador.get("/denuncia/:id", Controlador.get_denuncia_by_id);
roteador.put("/denuncia/:id", Controlador.update_denuncia);
roteador.delete("/denuncia/:id", Controlador.delete_denuncia);

// ===== PACIENTE_PROFISSIONAL ======================================================
roteador.get("/paciente_profissional", Controlador.get_all_paciente_profissional);
roteador.post("/paciente_profissional", Controlador.create_paciente_profissional);
roteador.get("/paciente_profissional/:id", Controlador.get_paciente_profissional_by_id);
roteador.put("/paciente_profissional/:id", Controlador.update_paciente_profissional);
roteador.delete("/paciente_profissional/:id", Controlador.delete_paciente_profissional);

//=====SMS===============================================================
roteador.post("/enviar-sms", Controlador.enviarCodigo);

export default roteador;