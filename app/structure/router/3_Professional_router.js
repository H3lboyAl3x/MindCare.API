import express from "express";
import * as controller from "../controller/3_Professional_controller.js";

const roteador = express.Router();

// ===== Day_of_week ==================================================
roteador.get("/Day_of_week", controller.get_all_Day_of_week);
roteador.post("/Day_of_week", controller.create_Day_of_week);
roteador.get("/Day_of_week/:id", controller.get_Day_of_week_by_id);
roteador.put("/Day_of_week/:id", controller.update_Day_of_week);
roteador.delete("/Day_of_week/:id", controller.delete_Day_of_week);

// ===== Work_area ===============================================
roteador.get("/Work_area", controller.get_all_Work_area);
roteador.post("/Work_area", controller.create_Work_area);
roteador.get("/Work_area/:id", controller.get_Work_area_by_id);
roteador.put("/Work_area/:id", controller.update_Work_area);
roteador.delete("/Work_area/:id", controller.delete_Work_area);

// ===== Feedback =======================================================
roteador.get("/Feedback", controller.get_all_Feedback);
roteador.post("/Feedback", controller.create_Feedback);
roteador.get("/Feedback/:id", controller.get_Feedback_by_id);
roteador.put("/Feedback/:id", controller.update_Feedback);
roteador.delete("/Feedback/:id", controller.delete_Feedback);

export default roteador;