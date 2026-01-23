import Payment from "../../model/9_Payment.js";

// ===== Payment =======================================================

export const create_Payment = async (Data) => {
    return await Payment.create(Data);
}
export const get_all_Payment = async () => {
    return await Payment.findAll();
}
export const get_Payment_by_id = async (id) => {
    return await Payment.findByPk(id);
}
export const update_Payment = async (id, updates) => {
    const Paymentu = await Payment.findByPk(id);
    if (!Paymentu) {
        return null;
    }
    return await Paymentu.update(updates);
}
export const delete_Payment = async (id) => {
    const Paymentu = await Payment.findByPk(id);
    if (!Paymentu) {
        return null;
    }
    await Paymentu.destroy();
    return true;
}