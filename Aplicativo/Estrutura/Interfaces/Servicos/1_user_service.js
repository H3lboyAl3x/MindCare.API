import * as Repositorio from "../Repositorios/1_user_repository.js";

// ===== User =========================================================
export const create_User = async (data) => {
    return await Repositorio.create_User(data);
};

export const get_all_User = async () => {
    return await Repositorio.get_all_User();
};

export const get_User_by_id = async (id) => {
    return await Repositorio.get_User_by_id(id);
};

export const update_User = async (id, updates) => {
    return await Repositorio.update_User(id, updates);
};

export const delete_User = async (id) => {
    return await Repositorio.delete_User(id);
};


// ===== Credential =======================================================
export const create_Credential = async (data) => {
    return await Repositorio.create_Credential(data);
};

export const get_all_Credential = async () => {
    return await Repositorio.get_all_Credential();
};

export const get_Credential_by_id = async (id) => {
    return await Repositorio.get_Credential_by_id(id);
};

export const update_Credential = async (id, updates) => {
    return await Repositorio.update_Credential(id, updates);
};

export const delete_Credential = async (id) => {
    return await Repositorio.delete_Credential(id);
};


// ===== Adm ===================================================
export const create_Adm = async (data) => {
    return await Repositorio.create_Adm(data);
};

export const get_all_Adm = async () => {
    return await Repositorio.get_all_Adm();
};

export const get_Adm_by_id = async (id) => {
    return await Repositorio.get_Adm_by_id(id);
};

export const update_Adm = async (id, updates) => {
    return await Repositorio.update_Adm(id, updates);
};

export const delete_Adm = async (id) => {
    return await Repositorio.delete_Adm(id);
};


// ===== Patient ========================================================
export const create_Patient = async (data) => {
    return await Repositorio.create_Patient(data);
};

export const get_all_Patient = async () => {
    return await Repositorio.get_all_Patient();
};

export const get_Patient_by_id = async (id) => {
    return await Repositorio.get_Patient_by_id(id);
};

export const update_Patient = async (id, updates) => {
    return await Repositorio.update_Patient(id, updates);
};

export const delete_Patient = async (id) => {
    return await Repositorio.delete_Patient(id);
};


// ===== Professional ====================================================
export const create_Professional = async (data) => {
    return await Repositorio.create_Professional(data);
};

export const get_all_Professional = async () => {
    return await Repositorio.get_all_Professional();
};

export const get_Professional_by_id = async (id) => {
    return await Repositorio.get_Professional_by_id(id);
};

export const update_Professional = async (id, updates) => {
    return await Repositorio.update_Professional(id, updates);
};

export const delete_Professional = async (id) => {
    return await Repositorio.delete_Professional(id);
};