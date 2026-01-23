import Professional_Work_area from "../../model/14_Professional_Work_area.js";
import Professional_Day_of_week from "../../model/15_Professional_Day_of_week.js";
import Complaint from "../../model/16_Complaint.js";
import Patient_Professional from "../../model/17_Patient_Professional.js";

// ===== Professional_Work_area ===================================

export const create_Professional_Work_area = async (Data) => {
    return await Professional_Work_area.create(Data);
}
export const get_all_Professional_Work_area = async () => {
    return await Professional_Work_area.findAll();
}
export const get_Professional_Work_area_by_id = async (id) => {
    return await Professional_Work_area.findByPk(id);
}
export const update_Professional_Work_area = async (id, updates) => {
    const Professional_Work_areau = await Professional_Work_area.findByPk(id);
    if (!Professional_Work_areau) {
        return null;
    }
    return await Professional_Work_areau.update(updates);
}
export const delete_Professional_Work_area = async (id) => {
    const Professional_Work_areau = await Professional_Work_area.findByPk(id);
    if (!Professional_Work_areau) {
        return null;
    }
    await Professional_Work_areau.destroy();
    return true;
}


// ===== Professional_Day_of_week ====================================

export const create_Professional_Day_of_week = async (Data) => {
    return await Professional_Day_of_week.create(Data);
}
export const get_all_Professional_Day_of_week = async () => {
    return await Professional_Day_of_week.findAll();
}
export const get_Professional_Day_of_week_by_id = async (id) => {
    return await Professional_Day_of_week.findByPk(id);
}
export const update_Professional_Day_of_week = async (id, updates) => {
    const Professional_Day_of_weeku = await Professional_Day_of_week.findByPk(id);
    if (!Professional_Day_of_weeku) {
        return null;
    }
    return await Professional_Day_of_weeku.update(updates);
}
export const delete_Professional_Day_of_week = async (id) => {
    const Professional_Day_of_weeku = await Professional_Day_of_week.findByPk(id);
    if (!Professional_Day_of_weeku) {
        return null;
    }
    await Professional_Day_of_weeku.destroy();
    return true;
}


// ===== Complaint ========================================================

export const create_Complaint = async (Data) => {
    return await Complaint.create(Data);
}
export const get_all_Complaint = async () => {
    return await Complaint.findAll();
}
export const get_Complaint_by_id = async (id) => {
    return await Complaint.findByPk(id);
}
export const update_Complaint = async (id, updates) => {
    const Complaintu = await Complaint.findByPk(id);
    if (!Complaintu) {
        return null;
    }
    return await Complaintu.update(updates);
}
export const delete_Complaint = async (id) => {
    const Complaintu = await Complaint.findByPk(id);
    if (!Complaintu) {
        return null;
    }
    await Complaintu.destroy();
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
    const Patient_Professionalu = await Patient_Professional.findByPk(id);
    if (!Patient_Professionalu) {
        return null;
    }
    return await Patient_Professionalu.update(updates);
}
export const delete_Patient_Professional = async (id) => {
    const Patient_Professionalu = await Patient_Professional.findByPk(id);
    if (!Patient_Professionalu) {
        return null;
    }
    await Patient_Professionalu.destroy();
    return true;
}