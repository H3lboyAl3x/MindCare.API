import Professional_area_de_trabalho from "../../Modelos/14_Professional_are_de_trabalho.js";
import Professional_dia_da_semana from "../../Modelos/15_Professional_dia_da_semana.js";
import Denuncia from "../../Modelos/16_denuncia.js";
import Patient_Professional from "../../Modelos/17_Patient_Professional.js";

// ===== Professional_AREA_DE_TRABALHO ===================================

export const create_Professional_area_de_trabalho = async (Data) => {
    return await Professional_area_de_trabalho.create(Data);
}
export const get_all_Professional_area_de_trabalho = async () => {
    return await Professional_area_de_trabalho.findAll();
}
export const get_Professional_area_de_trabalho_by_id = async (id) => {
    return await Professional_area_de_trabalho.findByPk(id);
}
export const update_Professional_area_de_trabalho = async (id, updates) => {
    const Professional_area_de_trabalho = await Professional_area_de_trabalho.findByPk(id);
    if (!Professional_area_de_trabalho) {
        return null;
    }
    return await Professional_area_de_trabalho.update(updates);
}
export const delete_Professional_area_de_trabalho = async (id) => {
    const Professional_area_de_trabalho = await Professional_area_de_trabalho.findByPk(id);
    if (!Professional_area_de_trabalho) {
        return null;
    }
    await Professional_area_de_trabalho.destroy();
    return true;
}


// ===== Professional_DIA_DA_SEMANA ====================================

export const create_Professional_dia_da_semana = async (Data) => {
    return await Professional_dia_da_semana.create(Data);
}
export const get_all_Professional_dia_da_semana = async () => {
    return await Professional_dia_da_semana.findAll();
}
export const get_Professional_dia_da_semana_by_id = async (id) => {
    return await Professional_dia_da_semana.findByPk(id);
}
export const update_Professional_dia_da_semana = async (id, updates) => {
    const Professional_dia_da_semana = await Professional_dia_da_semana.findByPk(id);
    if (!Professional_dia_da_semana) {
        return null;
    }
    return await Professional_dia_da_semana.update(updates);
}
export const delete_Professional_dia_da_semana = async (id) => {
    const Professional_dia_da_semana = await Professional_dia_da_semana.findByPk(id);
    if (!Professional_dia_da_semana) {
        return null;
    }
    await Professional_dia_da_semana.destroy();
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

// ===== Patient_Professional ===================================

export const create_Patient_Professional = async (Data) => {
    return await Patient_Professional.create(Data);
}
export const get_all_Patient_Professional = async () => {
    return await Patient_Professional.findAll();
}
export const get_Patient_Professional_by_id = async (id) => {
    return await Patient_Professional.findByPk(id);
}
export const update_Patient_Professional = async (id, updates) => {
    const Patient_Professional = await Patient_Professional.findByPk(id);
    if (!Patient_Professional) {
        return null;
    }
    return await Patient_Professional.update(updates);
}
export const delete_Patient_Professional = async (id) => {
    const Patient_Professional = await Patient_Professional.findByPk(id);
    if (!Patient_Professional) {
        return null;
    }
    await Patient_Professional.destroy();
    return true;
}