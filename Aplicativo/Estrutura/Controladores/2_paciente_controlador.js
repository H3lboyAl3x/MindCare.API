import * as Servico from "../Interfaces/Servicos/2_Patient_servico.js";

// ===== PAGAMENTO =======================================================
export const get_all_pagamento = async (req, res) => {
    try {
        const pagamento = await Servico.get_all_pagamento();
        res.status(200).json(pagamento);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const create_pagamento = async (req, res) => {
    try {
        const newPagamento = await Servico.create_pagamento(req.body);
        res.status(201).json(newPagamento);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const get_pagamento_by_id = async (req, res) => {
    try {
        const pagamento = await Servico.get_pagamento_by_id(req.params.id);
        if (!pagamento) {
            return res.status(404).json({ message: 'Pagamento não encontrado com id: ' + req.params.id });
        }
        res.status(200).json(pagamento);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const update_pagamento = async (req, res) => {
    try {
        const updatedPagamento = await Servico.update_pagamento(req.params.id, req.body);
        if (!updatedPagamento) {
            return res.status(404).json({ message: 'Pagamento não encontrado' });
        }
        res.status(200).json(updatedPagamento);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const delete_pagamento = async (req, res) => {
    try {
        const deleted = await Servico.delete_pagamento(req.params.id);
        if (!deleted) {
            return res.status(404).json({ message: 'Pagamento não encontrado' });
        }
        res.status(204).json();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};