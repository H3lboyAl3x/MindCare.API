import express from "express";
import * as controller from "../controller/5_Extra_controller.js";

const roteador = express.Router();

// ===== Professional_Work_area =================================
roteador.get("/Professional_Work_area", controller.get_all_Professional_Work_area);
roteador.post("/Professional_Work_area", controller.create_Professional_Work_area);
roteador.get("/Professional_Work_area/:id", controller.get_Professional_Work_area_by_id);
roteador.put("/Professional_Work_area/:id", controller.update_Professional_Work_area);
roteador.delete("/Professional_Work_area/:id", controller.delete_Professional_Work_area);

// ===== Professional_Day_of_week ====================================
roteador.get("/Professional_Day_of_week", controller.get_all_Professional_Day_of_week);
roteador.post("/Professional_Day_of_week", controller.create_Professional_Day_of_week);
roteador.get("/Professional_Day_of_week/:id", controller.get_Professional_Day_of_week_by_id);
roteador.put("/Professional_Day_of_week/:id", controller.update_Professional_Day_of_week);
roteador.delete("/Professional_Day_of_week/:id", controller.delete_Professional_Day_of_week);

// ===== Complaint ======================================================
roteador.get("/Complaint", controller.get_all_Complaint);
roteador.post("/Complaint", controller.create_Complaint);
roteador.get("/Complaint/:id", controller.get_Complaint_by_id);
roteador.put("/Complaint/:id", controller.update_Complaint);
roteador.delete("/Complaint/:id", controller.delete_Complaint);

// ===== Patient_Professional ======================================================
roteador.get("/Patient_Professional", controller.get_all_Patient_Professional);
roteador.post("/Patient_Professional", controller.create_Patient_Professional);
roteador.get("/Patient_Professional/:id", controller.get_Patient_Professional_by_id);
roteador.put("/Patient_Professional/:id", controller.update_Patient_Professional);
roteador.delete("/Patient_Professional/:id", controller.delete_Patient_Professional);

//=====SMS===============================================================
roteador.post("/enviar-sms", controller.enviarCodigo);

export default roteador;