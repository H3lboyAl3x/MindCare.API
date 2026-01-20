import express from "express";
import * as Controlador from "../Controladores/3_Professional_controlador.js";

const roteador = express.Router();

// ===== DIA_DA_SEMANA ==================================================
roteador.get("/dia_da_semana", Controlador.get_all_dia_da_semana);
roteador.post("/dia_da_semana", Controlador.create_dia_da_semana);
roteador.get("/dia_da_semana/:id", Controlador.get_dia_da_semana_by_id);
roteador.put("/dia_da_semana/:id", Controlador.update_dia_da_semana);
roteador.delete("/dia_da_semana/:id", Controlador.delete_dia_da_semana);

// ===== AREA_DE_TRABALHO ===============================================
roteador.get("/area_de_trabalho", Controlador.get_all_area_de_trabalho);
roteador.post("/area_de_trabalho", Controlador.create_area_de_trabalho);
roteador.get("/area_de_trabalho/:id", Controlador.get_area_de_trabalho_by_id);
roteador.put("/area_de_trabalho/:id", Controlador.update_area_de_trabalho);
roteador.delete("/area_de_trabalho/:id", Controlador.delete_area_de_trabalho);

// ===== FEEDBACK =======================================================
roteador.get("/feedback", Controlador.get_all_feedback);
roteador.post("/feedback", Controlador.create_feedback);
roteador.get("/feedback/:id", Controlador.get_feedback_by_id);
roteador.put("/feedback/:id", Controlador.update_feedback);
roteador.delete("/feedback/:id", Controlador.delete_feedback);

export default roteador;