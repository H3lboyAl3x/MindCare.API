import * as service from "../interface/service/2_Patient_service.js";

// ===== payment =======================================================
export const get_all_payment = async (req, res) => {
    try {
        const payment = await service.get_all_payment();
        res.status(200).json(payment);
    } catch (error) {
        res.status(500).json({ error: error.Message });
    }
};

export const create_payment = async (req, res) => {
    try {
        const newpayment = await service.create_payment(req.body);
        res.status(201).json(newpayment);
    } catch (error) {
        res.status(400).json({ error: error.Message });
    }
};

export const get_payment_by_id = async (req, res) => {
    try {
        const payment = await service.get_payment_by_id(req.params.id);
        if (!payment) {
            return res.status(404).json({ Message: 'payment não encontrado com id: ' + req.params.id });
        }
        res.status(200).json(payment);
    } catch (error) {
        res.status(500).json({ error: error.Message });
    }
};

export const update_payment = async (req, res) => {
    try {
        const updatedpayment = await service.update_payment(req.params.id, req.body);
        if (!updatedpayment) {
            return res.status(404).json({ Message: 'payment não encontrado' });
        }
        res.status(200).json(updatedpayment);
    } catch (error) {
        res.status(400).json({ error: error.Message });
    }
};

export const delete_payment = async (req, res) => {
    try {
        const deleted = await service.delete_payment(req.params.id);
        if (!deleted) {
            return res.status(404).json({ Message: 'payment não encontrado' });
        }
        res.status(204).json();
    } catch (error) {
        res.status(500).json({ error: error.Message });
    }
};