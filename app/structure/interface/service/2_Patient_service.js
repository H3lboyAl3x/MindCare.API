import * as repository from "../repository/2_Patient_repository.js";

// ===== payment =======================================================
export const create_payment = async (data) => {
    return await repository.create_payment(data);
};

export const get_all_payment = async () => {
    return await repository.get_all_payment();
};

export const get_payment_by_id = async (id) => {
    return await repository.get_payment_by_id(id);
};

export const update_payment = async (id, updates) => {
    return await repository.update_payment(id, updates);
};

export const delete_payment = async (id) => {
    return await repository.delete_payment(id);
};