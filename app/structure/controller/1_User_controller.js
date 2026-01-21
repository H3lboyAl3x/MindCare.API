import * as service from "../interface/service/1_User_service.js";

// ===== User ==========================================================
export const get_all_User = async (req, res) => {
    try {
        const User = await service.get_all_User();
        res.status(200).json(User);
    } catch (error) {
        res.status(500).json({ error: error.Message });
    }
};

export const create_User = async (req, res) => {
    try {
        const new_User = await service.create_User(req.body);
        res.status(201).json(new_User);
    } catch (error) {
        res.status(400).json({ error: error.Message });
    }
};

export const get_User_by_id = async (req, res) => {
    try {
        const User = await service.get_User_by_id(req.params.id);
        if (!User) {
            return res.status(404).json({ Message: 'Usuário não encontrado de id:' + req.params.id });
        }
        res.status(200).json(User);
    } catch (error) {
        res.status(500).json({ error: error.Message });
    }
};

export const update_User = async (req, res) => {
    try {
        const update_User = await service.update_User(req.params.id, req.body);
        if (!update_User) {
            return res.status(404).json({ Message: 'Usuário não encontrado' });
        }
        res.status(200).json(update_User);
    } catch (error) {
        res.status(400).json({ error: error.Message });
    }
};

export const delete_User = async (req, res) => {
    try {
        const deleted = await service.delete_User(req.params.id);
        if (!deleted) {
            return res.status(404).json({ Message: 'Usuário não encontrado' });
        }
        res.status(204).json();
    } catch (error) {
        res.status(500).json({ error: error.Message });
    }
};


// ===== Credential =========================================================
export const get_all_Credential = async (req, res) => {
    try {
        const Credential = await service.get_all_Credential();
        res.status(200).json(Credential);
    } catch (error) {
        res.status(500).json({ error: error.Message });
    }
};

export const create_Credential = async (req, res) => {
    try {
        const new_Credential = await service.create_Credential(req.body);
        res.status(201).json(new_Credential);
    } catch (error) {
        res.status(400).json({ error: error.Message });
    }
};

export const get_Credential_by_id = async (req, res) => {
    try {
        const Credential = await service.get_Credential_by_id(req.params.id);
        if (!Credential) {
            return res.status(404).json({ Message: 'Credência não encontrada de id:' + req.params.id });
        }
        res.status(200).json(Credential);
    } catch (error) {
        res.status(500).json({ error: error.Message });
    }
};

export const update_Credential = async (req, res) => {
    try {
        const update_Credential = await service.update_Credential(req.params.id, req.body);
        if (!update_Credential) {
            return res.status(404).json({ Message: 'Credência não encontrada' });
        }
        res.status(200).json(update_Credential);
    } catch (error) {
        res.status(400).json({ error: error.Message });
    }
};

export const delete_Credential = async (req, res) => {
    try {
        const deleted = await service.delete_Credential(req.params.id);
        if (!deleted) {
            return res.status(404).json({ Message: 'Credência não encontrada' });
        }
        res.status(204).json();
    } catch (error) {
        res.status(500).json({ error: error.Message });
    }
};


// ===== Adm =====================================================
export const get_all_Adm = async (req, res) => {
    try {
        const Adm = await service.get_all_Adm();
        res.status(200).json(Adm);
    } catch (error) {
        res.status(500).json({ error: error.Message });
    }
};

export const create_Adm = async (req, res) => {
    try {
        const new_Adm = await service.create_Adm(req.body);
        res.status(201).json(new_Adm);
    } catch (error) {
        res.status(400).json({ error: error.Message });
    }
};

export const get_Adm_by_id = async (req, res) => {
    try {
        const Adm = await service.get_Adm_by_id(req.params.id);
        if (!Adm) {
            return res.status(404).json({ Message: 'Adm não encontrado de id:' + req.params.id });
        }
        res.status(200).json(Adm);
    } catch (error) {
        res.status(500).json({ error: error.Message });
    }
};

export const update_Adm = async (req, res) => {
    try {
        const update_Adm = await service.update_Adm(req.params.id, req.body);
        if (!update_Adm) {
            return res.status(404).json({ Message: 'Adm não encontrado' });
        }
        res.status(200).json(update_Adm);
    } catch (error) {
        res.status(400).json({ error: error.Message });
    }
};

export const delete_Adm = async (req, res) => {
    try {
        const deleted = await service.delete_Adm(req.params.id);
        if (!deleted) {
            return res.status(404).json({ Message: 'Adm não encontrado' });
        }
        res.status(204).json();
    } catch (error) {
        res.status(500).json({ error: error.Message });
    }
};


// ===== Patient ==========================================================
export const get_all_Patient = async (req, res) => {
    try {
        const Patient = await service.get_all_Patient();
        res.status(200).json(Patient);
    } catch (error) {
        res.status(500).json({ error: error.Message });
    }
};

export const create_Patient = async (req, res) => {
    try {
        const new_Patient = await service.create_Patient(req.body);
        res.status(201).json(new_Patient);
    } catch (error) {
        res.status(400).json({ error: error.Message });
    }
};

export const get_Patient_by_id = async (req, res) => {
    try {
        const Patient = await service.get_Patient_by_id(req.params.id);
        if (!Patient) {
            return res.status(404).json({ Message: 'Patient não encontrado de id:' + req.params.id });
        }
        res.status(200).json(Patient);
    } catch (error) {
        res.status(500).json({ error: error.Message });
    }
};

export const update_Patient = async (req, res) => {
    try {
        const update_Patient = await service.update_Patient(req.params.id, req.body);
        if (!update_Patient) {
            return res.status(404).json({ Message: 'Patient não encontrado' });
        }
        res.status(200).json(update_Patient);
    } catch (error) {
        res.status(400).json({ error: error.Message });
    }
};

export const delete_Patient = async (req, res) => {
    try {
        const deleted = await service.delete_Patient(req.params.id);
        if (!deleted) {
            return res.status(404).json({ Message: 'Patient não encontrado' });
        }
        res.status(204).json();
    } catch (error) {
        res.status(500).json({ error: error.Message });
    }
};


// ===== Professional ======================================================
export const get_all_Professional = async (req, res) => {
    try {
        const Professional = await service.get_all_Professional();
        res.status(200).json(Professional);
    } catch (error) {
        res.status(500).json({ error: error.Message });
    }
};

export const create_Professional = async (req, res) => {
    try {
        const new_Professional = await service.create_Professional(req.body);
        res.status(201).json(new_Professional);
    } catch (error) {
        res.status(400).json({ error: error.Message });
    }
};

export const get_Professional_by_id = async (req, res) => {
    try {
        const Professional = await service.get_Professional_by_id(req.params.id);
        if (!Professional) {
            return res.status(404).json({ Message: 'Professional não encontrado de id:' + req.params.id });
        }
        res.status(200).json(Professional);
    } catch (error) {
        res.status(500).json({ error: error.Message });
    }
};

export const update_Professional = async (req, res) => {
    try {
        const update_Professional = await service.update_Professional(req.params.id, req.body);
        if (!update_Professional) {
            return res.status(404).json({ Message: 'Professional não encontrado' });
        }
        res.status(200).json(update_Professional);
    } catch (error) {
        res.status(400).json({ error: error.Message });
    }
};

export const delete_Professional = async (req, res) => {
    try {
        const deleted = await service.delete_Professional(req.params.id);
        if (!deleted) {
            return res.status(404).json({ Message: 'Professional não encontrado' });
        }
        res.status(204).json();
    } catch (error) {
        res.status(500).json({ error: error.Message });
    }
};