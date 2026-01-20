import * as Repositorio from "../Repositorios/5_extra_repositorio.js";

// ===== Professional_AREA_DE_TRABALHO ===================================
export const create_Professional_area_de_trabalho = async (data) => {
    return await Repositorio.create_Professional_area_de_trabalho(data);
};

export const get_all_Professional_area_de_trabalho = async () => {
    return await Repositorio.get_all_Professional_area_de_trabalho();
};

export const get_Professional_area_de_trabalho_by_id = async (id) => {
    return await Repositorio.get_Professional_area_de_trabalho_by_id(id);
};

export const update_Professional_area_de_trabalho = async (id, updates) => {
    return await Repositorio.update_Professional_area_de_trabalho(id, updates);
};

export const delete_Professional_area_de_trabalho = async (id) => {
    return await Repositorio.delete_Professional_area_de_trabalho(id);
};


// ===== Professional_DIA_DA_SEMANA ====================================
export const create_Professional_dia_da_semana = async (data) => {
    return await Repositorio.create_Professional_dia_da_semana(data);
};

export const get_all_Professional_dia_da_semana = async () => {
    return await Repositorio.get_all_Professional_dia_da_semana();
};

export const get_Professional_dia_da_semana_by_id = async (id) => {
    return await Repositorio.get_Professional_dia_da_semana_by_id(id);
};

export const update_Professional_dia_da_semana = async (id, updates) => {
    return await Repositorio.update_Professional_dia_da_semana(id, updates);
};

export const delete_Professional_dia_da_semana = async (id) => {
    return await Repositorio.delete_Professional_dia_da_semana(id);
};


// ===== DENUNCIA ========================================================
export const create_denuncia = async (data) => {
    return await Repositorio.create_denuncia(data);
};

export const get_all_denuncia = async () => {
    return await Repositorio.get_all_denuncia();
};

export const get_denuncia_by_id = async (id) => {
    return await Repositorio.get_denuncia_by_id(id);
};

export const update_denuncia = async (id, updates) => {
    return await Repositorio.update_denuncia(id, updates);
};

export const delete_denuncia = async (id) => {
    return await Repositorio.delete_denuncia(id);
};

// ===== Patient_Professional ========================================================
export const create_Patient_Professional = async (data) => {
    return await Repositorio.create_Patient_Professional(data);
};

export const get_all_Patient_Professional = async () => {
    return await Repositorio.get_all_Patient_Professional();
};

export const get_Patient_Professional_by_id = async (id) => {
    return await Repositorio.get_Patient_Professional_by_id(id);
};

export const update_Patient_Professional = async (id, updates) => {
    return await Repositorio.update_Patient_Professional(id, updates);
};

export const delete_Patient_Professional = async (id) => {
    return await Repositorio.delete_Patient_Professional(id);
};