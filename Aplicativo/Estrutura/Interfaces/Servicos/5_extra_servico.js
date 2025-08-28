import * as Repositorio from "../Repositorios/5_extra_repositorio.js";

// ===== PROFISSIONAL_AREA_DE_TRABALHO ===================================
export const create_profissional_area_de_trabalho = async (data) => {
    return await Repositorio.create_profissional_area_de_trabalho(data);
};

export const get_all_profissional_area_de_trabalho = async () => {
    return await Repositorio.get_all_profissional_area_de_trabalho();
};

export const get_profissional_area_de_trabalho_by_id = async (id) => {
    return await Repositorio.get_profissional_area_de_trabalho_by_id(id);
};

export const update_profissional_area_de_trabalho = async (id, updates) => {
    return await Repositorio.update_profissional_area_de_trabalho(id, updates);
};

export const delete_profissional_area_de_trabalho = async (id) => {
    return await Repositorio.delete_profissional_area_de_trabalho(id);
};


// ===== PROFISSIONAL_DIA_DA_SEMANA ====================================
export const create_profissional_dia_da_semana = async (data) => {
    return await Repositorio.create_profissional_dia_da_semana(data);
};

export const get_all_profissional_dia_da_semana = async () => {
    return await Repositorio.get_all_profissional_dia_da_semana();
};

export const get_profissional_dia_da_semana_by_id = async (id) => {
    return await Repositorio.get_profissional_dia_da_semana_by_id(id);
};

export const update_profissional_dia_da_semana = async (id, updates) => {
    return await Repositorio.update_profissional_dia_da_semana(id, updates);
};

export const delete_profissional_dia_da_semana = async (id) => {
    return await Repositorio.delete_profissional_dia_da_semana(id);
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