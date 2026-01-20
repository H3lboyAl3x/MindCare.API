import express from "express";
import * as Controlador from "../Controladores/2_Patient_controlador.js";

const roteador = express.Router();

// ===== PAGAMENTO ======================================================
roteador.get("/pagamento", Controlador.get_all_pagamento);
roteador.post("/pagamento", Controlador.create_pagamento);
roteador.get("/pagamento/:id", Controlador.get_pagamento_by_id);
roteador.put("/pagamento/:id", Controlador.update_pagamento);
roteador.delete("/pagamento/:id", Controlador.delete_pagamento);

export default roteador;