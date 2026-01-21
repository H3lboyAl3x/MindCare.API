import express from "express";
import * as controller from "../controller/4_Communication_controller.js";

const roteador = express.Router();

// ===== Consultation =======================================================
roteador.get("/Consultation", controller.get_all_Consultation);
roteador.post("/Consultation", controller.create_Consultation);
roteador.get("/Consultation/:id", controller.get_Consultation_by_id);
roteador.put("/Consultation/:id", controller.update_Consultation);
roteador.delete("/Consultation/:id", controller.delete_Consultation);

// ===== Chat ===========================================================
roteador.get("/Chat", controller.get_all_Chat);
roteador.post("/Chat", controller.create_Chat);
roteador.get("/Chat/:id", controller.get_Chat_by_id);
roteador.put("/Chat/:id", controller.update_Chat);
roteador.delete("/Chat/:id", controller.delete_Chat);

// ===== Message =======================================================
roteador.get("/Message", controller.get_all_Message);
roteador.post("/Message", controller.create_Message);
roteador.get("/Message/:id", controller.get_Message_by_id);
roteador.put("/Message/:id", controller.update_Message);
roteador.delete("/Message/:id", controller.delete_Message);

// ===== Notification ====================================================
roteador.get("/Notification", controller.get_all_Notification);
roteador.post("/Notification", controller.create_Notification);
roteador.get("/Notification/:id", controller.get_Notification_by_id);
roteador.put("/Notification/:id", controller.update_Notification);
roteador.delete("/Notification/:id", controller.delete_Notification);

export default roteador;