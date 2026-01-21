import * as repository from "../repository/5_Extra_repository.js";

// ===== Professional_Work_area ===================================
export const create_Professional_Work_area = async (data) => {
    return await repository.create_Professional_Work_area(data);
};

export const get_all_Professional_Work_area = async () => {
    return await repository.get_all_Professional_Work_area();
};

export const get_Professional_Work_area_by_id = async (id) => {
    return await repository.get_Professional_Work_area_by_id(id);
};

export const update_Professional_Work_area = async (id, updates) => {
    return await repository.update_Professional_Work_area(id, updates);
};

export const delete_Professional_Work_area = async (id) => {
    return await repository.delete_Professional_Work_area(id);
};


// ===== Professional_Day_of_week ====================================
export const create_Professional_Day_of_week = async (data) => {
    return await repository.create_Professional_Day_of_week(data);
};

export const get_all_Professional_Day_of_week = async () => {
    return await repository.get_all_Professional_Day_of_week();
};

export const get_Professional_Day_of_week_by_id = async (id) => {
    return await repository.get_Professional_Day_of_week_by_id(id);
};

export const update_Professional_Day_of_week = async (id, updates) => {
    return await repository.update_Professional_Day_of_week(id, updates);
};

export const delete_Professional_Day_of_week = async (id) => {
    return await repository.delete_Professional_Day_of_week(id);
};


// ===== Complaint ========================================================
export const create_Complaint = async (data) => {
    return await repository.create_Complaint(data);
};

export const get_all_Complaint = async () => {
    return await repository.get_all_Complaint();
};

export const get_Complaint_by_id = async (id) => {
    return await repository.get_Complaint_by_id(id);
};

export const update_Complaint = async (id, updates) => {
    return await repository.update_Complaint(id, updates);
};

export const delete_Complaint = async (id) => {
    return await repository.delete_Complaint(id);
};

// ===== Patient_Professional ========================================================
export const create_Patient_Professional = async (data) => {
    return await repository.create_Patient_Professional(data);
};

export const get_all_Patient_Professional = async () => {
    return await repository.get_all_Patient_Professional();
};

export const get_Patient_Professional_by_id = async (id) => {
    return await repository.get_Patient_Professional_by_id(id);
};

export const update_Patient_Professional = async (id, updates) => {
    return await repository.update_Patient_Professional(id, updates);
};

export const delete_Patient_Professional = async (id) => {
    return await repository.delete_Patient_Professional(id);
};