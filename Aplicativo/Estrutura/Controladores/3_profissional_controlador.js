import * as Servico from "../Interfaces/Servicos/3_Professional_servico.js";

// ===== DIA_DA_SEMANA ===================================================
export const get_all_dia_da_semana = async (req, res) => {
    try {
        const dia = await Servico.get_all_dia_da_semana();
        res.status(200).json(dia);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const create_dia_da_semana = async (req, res) => {
    try {
        const newDia = await Servico.create_dia_da_semana(req.body);
        res.status(201).json(newDia);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const get_dia_da_semana_by_id = async (req, res) => {
    try {
        const dia = await Servico.get_dia_da_semana_by_id(req.params.id);
        if (!dia) {
            return res.status(404).json({ message: 'Dia da semana não encontrado com id: ' + req.params.id });
        }
        res.status(200).json(dia);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const update_dia_da_semana = async (req, res) => {
    try {
        const updatedDia = await Servico.update_dia_da_semana(req.params.id, req.body);
        if (!updatedDia) {
            return res.status(404).json({ message: 'Dia da semana não encontrado' });
        }
        res.status(200).json(updatedDia);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const delete_dia_da_semana = async (req, res) => {
    try {
        const deleted = await Servico.delete_dia_da_semana(req.params.id);
        if (!deleted) {
            return res.status(404).json({ message: 'Dia da semana não encontrado' });
        }
        res.status(204).json();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


// ===== AREA_DE_TRABALHO ================================================
export const get_all_area_de_trabalho = async (req, res) => {
    try {
        const area = await Servico.get_all_area_de_trabalho();
        res.status(200).json(area);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const create_area_de_trabalho = async (req, res) => {
    try {
        const newArea = await Servico.create_area_de_trabalho(req.body);
        res.status(201).json(newArea);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const get_area_de_trabalho_by_id = async (req, res) => {
    try {
        const area = await Servico.get_area_de_trabalho_by_id(req.params.id);
        if (!area) {
            return res.status(404).json({ message: 'Área de trabalho não encontrada com id: ' + req.params.id });
        }
        res.status(200).json(area);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const update_area_de_trabalho = async (req, res) => {
    try {
        const updatedArea = await Servico.update_area_de_trabalho(req.params.id, req.body);
        if (!updatedArea) {
            return res.status(404).json({ message: 'Área de trabalho não encontrada' });
        }
        res.status(200).json(updatedArea);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const delete_area_de_trabalho = async (req, res) => {
    try {
        const deleted = await Servico.delete_area_de_trabalho(req.params.id);
        if (!deleted) {
            return res.status(404).json({ message: 'Área de trabalho não encontrada' });
        }
        res.status(204).json();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


// ===== FEEDBACK ========================================================
export const get_all_feedback = async (req, res) => {
    try {
        const feedback = await Servico.get_all_feedback();
        res.status(200).json(feedback);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const create_feedback = async (req, res) => {
    try {
        const newFeedback = await Servico.create_feedback(req.body);
        res.status(201).json(newFeedback);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const get_feedback_by_id = async (req, res) => {
    try {
        const feedback = await Servico.get_feedback_by_id(req.params.id);
        if (!feedback) {
            return res.status(404).json({ message: 'Feedback não encontrado com id: ' + req.params.id });
        }
        res.status(200).json(feedback);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const update_feedback = async (req, res) => {
    try {
        const updatedFeedback = await Servico.update_feedback(req.params.id, req.body);
        if (!updatedFeedback) {
            return res.status(404).json({ message: 'Feedback não encontrado' });
        }
        res.status(200).json(updatedFeedback);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const delete_feedback = async (req, res) => {
    try {
        const deleted = await Servico.delete_feedback(req.params.id);
        if (!deleted) {
            return res.status(404).json({ message: 'Feedback não encontrado' });
        }
        res.status(204).json();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};