import Payment from "../../model/9_Payment.js";

// ===== payment =======================================================

export const create_payment = async (Data) => {
    return await Payment.create(Data);
}
export const get_all_payment = async () => {
    return await Payment.findAll();
}
export const get_payment_by_id = async (id) => {
    return await Payment.findByPk(id);
}
export const update_payment = async (id, updates) => {
    const payment = await Payment.findByPk(id);
    if (!payment) {
        return null;
    }
    return await payment.update(updates);
}
export const delete_payment = async (id) => {
    const payment = await Payment.findByPk(id);
    if (!payment) {
        return null;
    }
    await payment.destroy();
    return true;
}