import * as repository from "../repository/3_Professional_repository.js";

// ===== Day_of_week ===================================================
export const create_Day_of_week = async (data) => {
    return await repository.create_Day_of_week(data);
};

export const get_all_Day_of_week = async () => {
    return await repository.get_all_Day_of_week();
};

export const get_Day_of_week_by_id = async (id) => {
    return await repository.get_Day_of_week_by_id(id);
};

export const update_Day_of_week = async (id, updates) => {
    return await repository.update_Day_of_week(id, updates);
};

export const delete_Day_of_week = async (id) => {
    return await repository.delete_Day_of_week(id);
};


// ===== Work_area ================================================
export const create_Work_area = async (data) => {
    return await repository.create_Work_area(data);
};

export const get_all_Work_area = async () => {
    return await repository.get_all_Work_area();
};

export const get_Work_area_by_id = async (id) => {
    return await repository.get_Work_area_by_id(id);
};

export const update_Work_area = async (id, updates) => {
    return await repository.update_Work_area(id, updates);
};

export const delete_Work_area = async (id) => {
    return await repository.delete_Work_area(id);
};


// ===== Feedback ========================================================
export const create_Feedback = async (data) => {
    return await repository.create_Feedback(data);
};

export const get_all_Feedback = async () => {
    return await repository.get_all_Feedback();
};

export const get_Feedback_by_id = async (id) => {
    return await repository.get_Feedback_by_id(id);
};

export const update_Feedback = async (id, updates) => {
    return await repository.update_Feedback(id, updates);
};

export const delete_Feedback = async (id) => {
    return await repository.delete_Feedback(id);
};