import express from "express";
import * as controller from "../controller/1_User_controller.js";

const roteador = express.Router();

// ===== User ========================================================
roteador.get("/User", controller.get_all_User);
roteador.post("/User", controller.create_User);
roteador.get("/User/:id", controller.get_User_by_id);
roteador.put("/User/:id", controller.update_User);
roteador.delete("/User/:id", controller.delete_User);

// ===== Credential ======================================================
roteador.get("/Credential", controller.get_all_Credential);
roteador.post("/Credential", controller.create_Credential);
roteador.get("/Credential/:id", controller.get_Credential_by_id);
roteador.put("/Credential/:id", controller.update_Credential);
roteador.delete("/Credential/:id", controller.delete_Credential);

// ===== Adm ==================================================
roteador.get("/Adm", controller.get_all_Adm);
roteador.post("/Adm", controller.create_Adm);
roteador.get("/Adm/:id", controller.get_Adm_by_id);
roteador.put("/Adm/:id", controller.update_Adm);
roteador.delete("/Adm/:id", controller.delete_Adm);

// ===== Patient =======================================================
roteador.get("/Patient", controller.get_all_Patient);
roteador.post("/Patient", controller.create_Patient);
roteador.get("/Patient/:id", controller.get_Patient_by_id);
roteador.put("/Patient/:id", controller.update_Patient);
roteador.delete("/Patient/:id", controller.delete_Patient);

// ===== Professional ===================================================
roteador.get("/Professional", controller.get_all_Professional);
roteador.post("/Professional", controller.create_Professional);
roteador.get("/Professional/:id", controller.get_Professional_by_id);
roteador.put("/Professional/:id", controller.update_Professional);
roteador.delete("/Professional/:id", controller.delete_Professional);

export default roteador;