import * as Repositorio from "../Repositorio/3_profissional_repositorio.js";

// ===== DIA_DA_SEMANA ===================================================
export const create_dia_da_semana = async (data) => {
    return await Repositorio.create_dia_da_semana(data);
};

export const get_all_dia_da_semana = async () => {
    return await Repositorio.get_all_dia_da_semana();
};

export const get_dia_da_semana_by_id = async (id) => {
    return await Repositorio.get_dia_da_semana_by_id(id);
};

export const update_dia_da_semana = async (id, updates) => {
    return await Repositorio.update_dia_da_semana(id, updates);
};

export const delete_dia_da_semana = async (id) => {
    return await Repositorio.delete_dia_da_semana(id);
};


// ===== AREA_DE_TRABALHO ================================================
export const create_area_de_trabalho = async (data) => {
    return await Repositorio.create_area_de_trabalho(data);
};

export const get_all_area_de_trabalho = async () => {
    return await Repositorio.get_all_area_de_trabalho();
};

export const get_area_de_trabalho_by_id = async (id) => {
    return await Repositorio.get_area_de_trabalho_by_id(id);
};

export const update_area_de_trabalho = async (id, updates) => {
    return await Repositorio.update_area_de_trabalho(id, updates);
};

export const delete_area_de_trabalho = async (id) => {
    return await Repositorio.delete_area_de_trabalho(id);
};


// ===== FEEDBACK ========================================================
export const create_feedback = async (data) => {
    return await Repositorio.create_feedback(data);
};

export const get_all_feedback = async () => {
    return await Repositorio.get_all_feedback();
};

export const get_feedback_by_id = async (id) => {
    return await Repositorio.get_feedback_by_id(id);
};

export const update_feedback = async (id, updates) => {
    return await Repositorio.update_feedback(id, updates);
};

export const delete_feedback = async (id) => {
    return await Repositorio.delete_feedback(id);
};