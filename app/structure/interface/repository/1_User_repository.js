import User from "../../model/1_User.js";
import Credential from "../../model/2_Credential.js";
import Adm from "../../model/3_Adm.js";
import Patient from "../../model/4_Patient.js";
import Professional from "../../model/5_Professional.js";

// ===== User =========================================================

export const create_User = async (Data) => {
    return await User.create(Data);
}
export const get_all_User = async () => {
    return await User.findAll();
}
export const get_User_by_id = async (id) => {
    return await User.findByPk(id);
}
export const update_User = async (id, updates) => {
    const Useru = await User.findByPk(id);
    if (!Useru) {
        return null;
    }
    return await Useru.update(updates);
}
export const delete_User = async (id) => {
    const Useru = await User.findByPk(id);
    if (!Useru) {
        return null;
    }
    await Useru.destroy();
    return true;
}


// ===== Credential =======================================================

export const create_Credential = async (Data) => {
    return await Credential.create(Data);
}
export const get_all_Credential = async () => {
    return await Credential.findAll();
}
export const get_Credential_by_id = async (id) => {
    return await Credential.findByPk(id);
}
export const update_Credential = async (id, updates) => {
    const Credentialu = await Credential.findByPk(id);
    if (!Credentialu) {
        return null;
    }
    return await Credentialu.update(updates);
}
export const delete_Credential = async (id) => {
    const Credentialu = await Credential.findByPk(id);
    if (!Credentialu) {
        return null;
    }
    await Credentialu.destroy();
    return true;
}


// ===== Adm ===================================================

export const create_Adm = async (Data) => {
    return await Adm.create(Data);
}
export const get_all_Adm = async () => {
    return await Adm.findAll();
}
export const get_Adm_by_id = async (id) => {
    return await Adm.findByPk(id);
}
export const update_Adm = async (id, updates) => {
    const Admu = await Adm.findByPk(id);
    if (!Admu) {
        return null;
    }
    return await Admu.update(updates);
}
export const delete_Adm = async (id) => {
    const Admu = await Adm.findByPk(id);
    if (!Admu) {
        return null;
    }
    await Admu.destroy();
    return true;
}


// ===== Patient ========================================================

export const create_Patient = async (Data) => {
    return await Patient.create(Data);
}
export const get_all_Patient = async () => {
    return await Patient.findAll();
}
export const get_Patient_by_id = async (id) => {
    return await Patient.findByPk(id);
}
export const update_Patient = async (id, updates) => {
    const Patientu = await Patient.findByPk(id);
    if (!Patientu) {
        return null;
    }
    return await Patientu.update(updates);
}
export const delete_Patient = async (id) => {
    const Patientu = await Patient.findByPk(id);
    if (!Patientu) {
        return null;
    }
    await Patientu.destroy();
    return true;
}


// ===== Professional ====================================================

export const create_Professional = async (Data) => {
    return await Professional.create(Data);
}
export const get_all_Professional = async () => {
    return await Professional.findAll();
}
export const get_Professional_by_id = async (id) => {
    return await Professional.findByPk(id);
}
export const update_Professional = async (id, updates) => {
    const Professionalu = await Professional.findByPk(id);
    if (!Professionalu) {
        return null;
    }
    return await Professionalu.update(updates);
}
export const delete_Professional = async (id) => {
    const Professionalu = await Professional.findByPk(id);
    if (!Professionalu) {
        return null;
    }
    await Professionalu.destroy();
    return true;
}