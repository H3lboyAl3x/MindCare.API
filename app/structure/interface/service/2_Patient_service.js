import * as repository from "../repository/2_Patient_repository.js";

// ===== Payment =======================================================
export const create_Payment = async (data) => {
    return await repository.create_Payment(data);
};

export const get_all_Payment = async () => {
    return await repository.get_all_Payment();
};

export const get_Payment_by_id = async (id) => {
    return await repository.get_Payment_by_id(id);
};

export const update_Payment = async (id, updates) => {
    return await repository.update_Payment(id, updates);
};

export const delete_Payment = async (id) => {
    return await repository.delete_Payment(id);
};