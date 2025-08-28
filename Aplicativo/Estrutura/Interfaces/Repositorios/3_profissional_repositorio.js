import Dia_da_semana from "../../Modelos/6_dia_da_semana.js";
import Area_de_trabalho from "../../Modelos/7_area_de_trabalho.js";
import Feedback from "../../Modelos/8_feedback.js";

// ===== DIA_DA_SEMANA ===================================================

export const create_dia_da_semana = async (Data) => {
    return await Dia_da_semana.create(Data);
}
export const get_all_dia_da_semana = async () => {
    return await Dia_da_semana.findAll();
}
export const get_dia_da_semana_by_id = async (id) => {
    return await Dia_da_semana.findByPk(id);
}
export const update_dia_da_semana = async (id, updates) => {
    const dia_da_semana = await Dia_da_semana.findByPk(id);
    if (!dia_da_semana) {
        return null;
    }
    return await dia_da_semana.update(updates);
}
export const delete_dia_da_semana = async (id) => {
    const dia_da_semana = await Dia_da_semana.findByPk(id);
    if (!dia_da_semana) {
        return null;
    }
    await dia_da_semana.destroy();
    return true;
}


// ===== AREA_DE_TRABALHO ================================================

export const create_area_de_trabalho = async (Data) => {
    return await Area_de_trabalho.create(Data);
}
export const get_all_area_de_trabalho = async () => {
    return await Area_de_trabalho.findAll();
}
export const get_area_de_trabalho_by_id = async (id) => {
    return await Area_de_trabalho.findByPk(id);
}
export const update_area_de_trabalho = async (id, updates) => {
    const area_de_trabalho = await Area_de_trabalho.findByPk(id);
    if (!area_de_trabalho) {
        return null;
    }
    return await area_de_trabalho.update(updates);
}
export const delete_area_de_trabalho = async (id) => {
    const area_de_trabalho = await Area_de_trabalho.findByPk(id);
    if (!area_de_trabalho) {
        return null;
    }
    await area_de_trabalho.destroy();
    return true;
}


// ===== FEEDBACK ========================================================

export const create_feedback = async (Data) => {
    return await Feedback.create(Data);
}
export const get_all_feedback = async () => {
    return await Feedback.findAll();
}
export const get_feedback_by_id = async (id) => {
    return await Feedback.findByPk(id);
}
export const update_feedback = async (id, updates) => {
    const feedback = await Feedback.findByPk(id);
    if (!feedback) {
        return null;
    }
    return await feedback.update(updates);
}
export const delete_feedback = async (id) => {
    const feedback = await Feedback.findByPk(id);
    if (!feedback) {
        return null;
    }
    await feedback.destroy();
    return true;
}