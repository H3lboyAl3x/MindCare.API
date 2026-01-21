import express from "express";
import * as controller from "../controller/2_Patient_controller.js";

const roteador = express.Router();

// ===== payment ======================================================
roteador.get("/payment", controller.get_all_payment);
roteador.post("/payment", controller.create_payment);
roteador.get("/payment/:id", controller.get_payment_by_id);
roteador.put("/payment/:id", controller.update_payment);
roteador.delete("/payment/:id", controller.delete_payment);

export default roteador;