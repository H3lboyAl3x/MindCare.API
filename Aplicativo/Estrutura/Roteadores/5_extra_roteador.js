import express from "express";
import * as Controlador from "../Controladores/5_extra_controlador.js";

const roteador = express.Router();

// ===== Professional_AREA_DE_TRABALHO =================================
roteador.get("/Professional_area_de_trabalho", Controlador.get_all_Professional_area_de_trabalho);
roteador.post("/Professional_area_de_trabalho", Controlador.create_Professional_area_de_trabalho);
roteador.get("/Professional_area_de_trabalho/:id", Controlador.get_Professional_area_de_trabalho_by_id);
roteador.put("/Professional_area_de_trabalho/:id", Controlador.update_Professional_area_de_trabalho);
roteador.delete("/Professional_area_de_trabalho/:id", Controlador.delete_Professional_area_de_trabalho);

// ===== Professional_DIA_DA_SEMANA ====================================
roteador.get("/Professional_dia_da_semana", Controlador.get_all_Professional_dia_da_semana);
roteador.post("/Professional_dia_da_semana", Controlador.create_Professional_dia_da_semana);
roteador.get("/Professional_dia_da_semana/:id", Controlador.get_Professional_dia_da_semana_by_id);
roteador.put("/Professional_dia_da_semana/:id", Controlador.update_Professional_dia_da_semana);
roteador.delete("/Professional_dia_da_semana/:id", Controlador.delete_Professional_dia_da_semana);

// ===== DENUNCIA ======================================================
roteador.get("/denuncia", Controlador.get_all_denuncia);
roteador.post("/denuncia", Controlador.create_denuncia);
roteador.get("/denuncia/:id", Controlador.get_denuncia_by_id);
roteador.put("/denuncia/:id", Controlador.update_denuncia);
roteador.delete("/denuncia/:id", Controlador.delete_denuncia);

// ===== Patient_Professional ======================================================
roteador.get("/Patient_Professional", Controlador.get_all_Patient_Professional);
roteador.post("/Patient_Professional", Controlador.create_Patient_Professional);
roteador.get("/Patient_Professional/:id", Controlador.get_Patient_Professional_by_id);
roteador.put("/Patient_Professional/:id", Controlador.update_Patient_Professional);
roteador.delete("/Patient_Professional/:id", Controlador.delete_Patient_Professional);

//=====SMS===============================================================
roteador.post("/enviar-sms", Controlador.enviarCodigo);

export default roteador;