import Profissional_area_de_trabalho from "../../Modelos/14_profissional_are_de_trabalho.js";
import Profissional_dia_da_semana from "../../Modelos/15_Profissional_dia_da_semana.js";
import Denuncia from "../../Modelos/16_denuncia.js";

// ===== PROFISSIONAL_AREA_DE_TRABALHO ===================================

export const create_profissional_area_de_trabalho = async (Data) => {
    return await Profissional_area_de_trabalho.create(Data);
}
export const get_all_profissional_area_de_trabalho = async () => {
    return await Profissional_area_de_trabalho.findAll();
}
export const get_profissional_area_de_trabalho_by_id = async (id) => {
    return await Profissional_area_de_trabalho.findByPk(id);
}
export const update_profissional_area_de_trabalho = async (id, updates) => {
    const profissional_area_de_trabalho = await Profissional_area_de_trabalho.findByPk(id);
    if (!profissional_area_de_trabalho) {
        return null;
    }
    return await profissional_area_de_trabalho.update(updates);
}
export const delete_profissional_area_de_trabalho = async (id) => {
    const profissional_area_de_trabalho = await Profissional_area_de_trabalho.findByPk(id);
    if (!profissional_area_de_trabalho) {
        return null;
    }
    await profissional_area_de_trabalho.destroy();
    return true;
}


// ===== PROFISSIONAL_DIA_DA_SEMANA ====================================

export const create_profissional_dia_de_semana = async (Data) => {
    return await Profissional_dia_da_semana.create(Data);
}
export const get_all_profissional_dia_de_semana = async () => {
    return await Profissional_dia_da_semana.findAll();
}
export const get_profissional_dia_de_semana_by_id = async (id) => {
    return await Profissional_dia_da_semana.findByPk(id);
}
export const update_profissional_dia_de_semana = async (id, updates) => {
    const profissional_dia_de_semana = await Profissional_dia_da_semana.findByPk(id);
    if (!profissional_dia_de_semana) {
        return null;
    }
    return await profissional_dia_de_semana.update(updates);
}
export const delete_profissional_dia_de_semana = async (id) => {
    const profissional_dia_de_semana = await Profissional_dia_da_semana.findByPk(id);
    if (!profissional_dia_de_semana) {
        return null;
    }
    await profissional_dia_de_semana.destroy();
    return true;
}


// ===== DENUNCIA ========================================================

export const create_denuncia = async (Data) => {
    return await Denuncia.create(Data);
}
export const get_all_denuncia = async () => {
    return await Denuncia.findAll();
}
export const get_denuncia_by_id = async (id) => {
    return await Denuncia.findByPk(id);
}
export const update_denuncia = async (id, updates) => {
    const denuncia = await Denuncia.findByPk(id);
    if (!denuncia) {
        return null;
    }
    return await denuncia.update(updates);
}
export const delete_denuncia = async (id) => {
    const denuncia = await Denuncia.findByPk(id);
    if (!denuncia) {
        return null;
    }
    await denuncia.destroy();
    return true;
}