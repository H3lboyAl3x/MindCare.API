import Pagamento from "../../Modelos/9_pagamento.js";

// ===== PAGAMENTO =======================================================

export const create_pagamento = async (Data) => {
    return await Pagamento.create(Data);
}
export const get_all_pagamento = async () => {
    return await Pagamento.findAll();
}
export const get_pagamento_by_id = async (id) => {
    return await Pagamento.findByPk(id);
}
export const update_pagamento = async (id, updates) => {
    const pagamento = await Pagamento.findByPk(id);
    if (!pagamento) {
        return null;
    }
    return await pagamento.update(updates);
}
export const delete_pagamento = async (id) => {
    const pagamento = await Pagamento.findByPk(id);
    if (!pagamento) {
        return null;
    }
    await pagamento.destroy();
    return true;
}