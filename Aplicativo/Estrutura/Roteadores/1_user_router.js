import express from "express";
import * as Controlador from "../Controladores/1_user_controller.js";

const roteador = express.Router();

// ===== User ========================================================
roteador.get("/User", Controlador.get_all_User);
roteador.post("/User", Controlador.create_User);
roteador.get("/User/:id", Controlador.get_User_by_id);
roteador.put("/User/:id", Controlador.update_User);
roteador.delete("/User/:id", Controlador.delete_User);

// ===== Credential ======================================================
roteador.get("/Credential", Controlador.get_all_Credential);
roteador.post("/Credential", Controlador.create_Credential);
roteador.get("/Credential/:id", Controlador.get_Credential_by_id);
roteador.put("/Credential/:id", Controlador.update_Credential);
roteador.delete("/Credential/:id", Controlador.delete_Credential);

// ===== Adm ==================================================
roteador.get("/Adm", Controlador.get_all_Adm);
roteador.post("/Adm", Controlador.create_Adm);
roteador.get("/Adm/:id", Controlador.get_Adm_by_id);
roteador.put("/Adm/:id", Controlador.update_Adm);
roteador.delete("/Adm/:id", Controlador.delete_Adm);

// ===== Patient =======================================================
roteador.get("/Patient", Controlador.get_all_Patient);
roteador.post("/Patient", Controlador.create_Patient);
roteador.get("/Patient/:id", Controlador.get_Patient_by_id);
roteador.put("/Patient/:id", Controlador.update_Patient);
roteador.delete("/Patient/:id", Controlador.delete_Patient);

// ===== Professional ===================================================
roteador.get("/Professional", Controlador.get_all_Professional);
roteador.post("/Professional", Controlador.create_Professional);
roteador.get("/Professional/:id", Controlador.get_Professional_by_id);
roteador.put("/Professional/:id", Controlador.update_Professional);
roteador.delete("/Professional/:id", Controlador.delete_Professional);

export default roteador;