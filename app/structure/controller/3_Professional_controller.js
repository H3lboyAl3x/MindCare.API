import * as service from "../interface/service/3_Professional_service.js";

// ===== Day_of_week ===================================================
export const get_all_Day_of_week = async (req, res) => {
    try {
        const dia = await service.get_all_Day_of_week();
        res.status(200).json(dia);
    } catch (error) {
        res.status(500).json({ error: error.Message });
    }
};

export const create_Day_of_week = async (req, res) => {
    try {
        const newDia = await service.create_Day_of_week(req.body);
        res.status(201).json(newDia);
    } catch (error) {
        res.status(400).json({ error: error.Message });
    }
};

export const get_Day_of_week_by_id = async (req, res) => {
    try {
        const dia = await service.get_Day_of_week_by_id(req.params.id);
        if (!dia) {
            return res.status(404).json({ Message: 'Dia da semana não encontrado com id: ' + req.params.id });
        }
        res.status(200).json(dia);
    } catch (error) {
        res.status(500).json({ error: error.Message });
    }
};

export const update_Day_of_week = async (req, res) => {
    try {
        const updatedDia = await service.update_Day_of_week(req.params.id, req.body);
        if (!updatedDia) {
            return res.status(404).json({ Message: 'Dia da semana não encontrado' });
        }
        res.status(200).json(updatedDia);
    } catch (error) {
        res.status(400).json({ error: error.Message });
    }
};

export const delete_Day_of_week = async (req, res) => {
    try {
        const deleted = await service.delete_Day_of_week(req.params.id);
        if (!deleted) {
            return res.status(404).json({ Message: 'Dia da semana não encontrado' });
        }
        res.status(204).json();
    } catch (error) {
        res.status(500).json({ error: error.Message });
    }
};


// ===== Work_area ================================================
export const get_all_Work_area = async (req, res) => {
    try {
        const area = await service.get_all_Work_area();
        res.status(200).json(area);
    } catch (error) {
        res.status(500).json({ error: error.Message });
    }
};

export const create_Work_area = async (req, res) => {
    try {
        const newArea = await service.create_Work_area(req.body);
        res.status(201).json(newArea);
    } catch (error) {
        res.status(400).json({ error: error.Message });
    }
};

export const get_Work_area_by_id = async (req, res) => {
    try {
        const area = await service.get_Work_area_by_id(req.params.id);
        if (!area) {
            return res.status(404).json({ Message: 'Área de trabalho não encontrada com id: ' + req.params.id });
        }
        res.status(200).json(area);
    } catch (error) {
        res.status(500).json({ error: error.Message });
    }
};

export const update_Work_area = async (req, res) => {
    try {
        const updatedArea = await service.update_Work_area(req.params.id, req.body);
        if (!updatedArea) {
            return res.status(404).json({ Message: 'Área de trabalho não encontrada' });
        }
        res.status(200).json(updatedArea);
    } catch (error) {
        res.status(400).json({ error: error.Message });
    }
};

export const delete_Work_area = async (req, res) => {
    try {
        const deleted = await service.delete_Work_area(req.params.id);
        if (!deleted) {
            return res.status(404).json({ Message: 'Área de trabalho não encontrada' });
        }
        res.status(204).json();
    } catch (error) {
        res.status(500).json({ error: error.Message });
    }
};


// ===== Feedback ========================================================
export const get_all_Feedback = async (req, res) => {
    try {
        const Feedback = await service.get_all_Feedback();
        res.status(200).json(Feedback);
    } catch (error) {
        res.status(500).json({ error: error.Message });
    }
};

export const create_Feedback = async (req, res) => {
    try {
        const newFeedback = await service.create_Feedback(req.body);
        res.status(201).json(newFeedback);
    } catch (error) {
        res.status(400).json({ error: error.Message });
    }
};

export const get_Feedback_by_id = async (req, res) => {
    try {
        const Feedback = await service.get_Feedback_by_id(req.params.id);
        if (!Feedback) {
            return res.status(404).json({ Message: 'Feedback não encontrado com id: ' + req.params.id });
        }
        res.status(200).json(Feedback);
    } catch (error) {
        res.status(500).json({ error: error.Message });
    }
};

export const update_Feedback = async (req, res) => {
    try {
        const updatedFeedback = await service.update_Feedback(req.params.id, req.body);
        if (!updatedFeedback) {
            return res.status(404).json({ Message: 'Feedback não encontrado' });
        }
        res.status(200).json(updatedFeedback);
    } catch (error) {
        res.status(400).json({ error: error.Message });
    }
};

export const delete_Feedback = async (req, res) => {
    try {
        const deleted = await service.delete_Feedback(req.params.id);
        if (!deleted) {
            return res.status(404).json({ Message: 'Feedback não encontrado' });
        }
        res.status(204).json();
    } catch (error) {
        res.status(500).json({ error: error.Message });
    }
};