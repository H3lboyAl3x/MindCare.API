import * as Repositorio from "../Repositorios/2_paciente_repositorio.js";

// ===== PAGAMENTO =======================================================
export const create_pagamento = async (data) => {
    return await Repositorio.create_pagamento(data);
};

export const get_all_pagamento = async () => {
    return await Repositorio.get_all_pagamento();
};

export const get_pagamento_by_id = async (id) => {
    return await Repositorio.get_pagamento_by_id(id);
};

export const update_pagamento = async (id, updates) => {
    return await Repositorio.update_pagamento(id, updates);
};

export const delete_pagamento = async (id) => {
    return await Repositorio.delete_pagamento(id);
};