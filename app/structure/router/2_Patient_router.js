import express from "express";
import * as controller from "../controller/2_Patient_controller.js";

const roteador = express.Router();

// ===== Payment ======================================================
roteador.get("/Payment", controller.get_all_Payment);
roteador.post("/Payment", controller.create_Payment);
roteador.get("/Payment/:id", controller.get_Payment_by_id);
roteador.put("/Payment/:id", controller.update_Payment);
roteador.delete("/Payment/:id", controller.delete_Payment);

export default roteador;