import * as service from "../interface/service/2_Patient_service.js";

// ===== Payment =======================================================
export const get_all_Payment = async (req, res) => {
    try {
        const Payment = await service.get_all_Payment();
        res.status(200).json(Payment);
    } catch (error) {
        res.status(500).json({ error: error.Message });
    }
};

export const create_Payment = async (req, res) => {
    try {
        const newPayment = await service.create_Payment(req.body);
        res.status(201).json(newPayment);
    } catch (error) {
        res.status(400).json({ error: error.Message });
    }
};

export const get_Payment_by_id = async (req, res) => {
    try {
        const Payment = await service.get_Payment_by_id(req.params.id);
        if (!Payment) {
            return res.status(404).json({ Message: 'Payment não encontrado com id: ' + req.params.id });
        }
        res.status(200).json(Payment);
    } catch (error) {
        res.status(500).json({ error: error.Message });
    }
};

export const update_Payment = async (req, res) => {
    try {
        const updatedPayment = await service.update_Payment(req.params.id, req.body);
        if (!updatedPayment) {
            return res.status(404).json({ Message: 'Payment não encontrado' });
        }
        res.status(200).json(updatedPayment);
    } catch (error) {
        res.status(400).json({ error: error.Message });
    }
};

export const delete_Payment = async (req, res) => {
    try {
        const deleted = await service.delete_Payment(req.params.id);
        if (!deleted) {
            return res.status(404).json({ Message: 'Payment não encontrado' });
        }
        res.status(204).json();
    } catch (error) {
        res.status(500).json({ error: error.Message });
    }
};