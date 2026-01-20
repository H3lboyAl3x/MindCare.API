import * as Servico from "../Interfaces/Servicos/1_user_service.js";

// ===== User ==========================================================
export const get_all_User = async (req, res) => {
    try {
        const User = await Servico.get_all_User();
        res.status(200).json(User);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const create_User = async (req, res) => {
    try {
        const new_User = await Servico.create_User(req.body);
        res.status(201).json(new_User);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const get_User_by_id = async (req, res) => {
    try {
        const User = await Servico.get_User_by_id(req.params.id);
        if (!User) {
            return res.status(404).json({ message: 'Usuário não encontrado de id:' + req.params.id });
        }
        res.status(200).json(User);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const update_User = async (req, res) => {
    try {
        const update_User = await Servico.update_User(req.params.id, req.body);
        if (!update_User) {
            return res.status(404).json({ message: 'Usuário não encontrado' });
        }
        res.status(200).json(update_User);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const delete_User = async (req, res) => {
    try {
        const deleted = await Servico.delete_User(req.params.id);
        if (!deleted) {
            return res.status(404).json({ message: 'Usuário não encontrado' });
        }
        res.status(204).json();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


// ===== Credential =========================================================
export const get_all_Credential = async (req, res) => {
    try {
        const Credential = await Servico.get_all_Credential();
        res.status(200).json(Credential);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const create_Credential = async (req, res) => {
    try {
        const new_Credential = await Servico.create_Credential(req.body);
        res.status(201).json(new_Credential);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const get_Credential_by_id = async (req, res) => {
    try {
        const Credential = await Servico.get_Credential_by_id(req.params.id);
        if (!Credential) {
            return res.status(404).json({ message: 'Credência não encontrada de id:' + req.params.id });
        }
        res.status(200).json(Credential);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const update_Credential = async (req, res) => {
    try {
        const update_Credential = await Servico.update_Credential(req.params.id, req.body);
        if (!update_Credential) {
            return res.status(404).json({ message: 'Credência não encontrada' });
        }
        res.status(200).json(update_Credential);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const delete_Credential = async (req, res) => {
    try {
        const deleted = await Servico.delete_Credential(req.params.id);
        if (!deleted) {
            return res.status(404).json({ message: 'Credência não encontrada' });
        }
        res.status(204).json();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


// ===== Adm =====================================================
export const get_all_Adm = async (req, res) => {
    try {
        const Adm = await Servico.get_all_Adm();
        res.status(200).json(Adm);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const create_Adm = async (req, res) => {
    try {
        const new_Adm = await Servico.create_Adm(req.body);
        res.status(201).json(new_Adm);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const get_Adm_by_id = async (req, res) => {
    try {
        const Adm = await Servico.get_Adm_by_id(req.params.id);
        if (!Adm) {
            return res.status(404).json({ message: 'Adm não encontrado de id:' + req.params.id });
        }
        res.status(200).json(Adm);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const update_Adm = async (req, res) => {
    try {
        const update_Adm = await Servico.update_Adm(req.params.id, req.body);
        if (!update_Adm) {
            return res.status(404).json({ message: 'Adm não encontrado' });
        }
        res.status(200).json(update_Adm);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const delete_Adm = async (req, res) => {
    try {
        const deleted = await Servico.delete_Adm(req.params.id);
        if (!deleted) {
            return res.status(404).json({ message: 'Adm não encontrado' });
        }
        res.status(204).json();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


// ===== Patient ==========================================================
export const get_all_Patient = async (req, res) => {
    try {
        const Patient = await Servico.get_all_Patient();
        res.status(200).json(Patient);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const create_Patient = async (req, res) => {
    try {
        const new_Patient = await Servico.create_Patient(req.body);
        res.status(201).json(new_Patient);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const get_Patient_by_id = async (req, res) => {
    try {
        const Patient = await Servico.get_Patient_by_id(req.params.id);
        if (!Patient) {
            return res.status(404).json({ message: 'Patient não encontrado de id:' + req.params.id });
        }
        res.status(200).json(Patient);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const update_Patient = async (req, res) => {
    try {
        const update_Patient = await Servico.update_Patient(req.params.id, req.body);
        if (!update_Patient) {
            return res.status(404).json({ message: 'Patient não encontrado' });
        }
        res.status(200).json(update_Patient);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const delete_Patient = async (req, res) => {
    try {
        const deleted = await Servico.delete_Patient(req.params.id);
        if (!deleted) {
            return res.status(404).json({ message: 'Patient não encontrado' });
        }
        res.status(204).json();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


// ===== Professional ======================================================
export const get_all_Professional = async (req, res) => {
    try {
        const Professional = await Servico.get_all_Professional();
        res.status(200).json(Professional);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const create_Professional = async (req, res) => {
    try {
        const new_Professional = await Servico.create_Professional(req.body);
        res.status(201).json(new_Professional);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const get_Professional_by_id = async (req, res) => {
    try {
        const Professional = await Servico.get_Professional_by_id(req.params.id);
        if (!Professional) {
            return res.status(404).json({ message: 'Professional não encontrado de id:' + req.params.id });
        }
        res.status(200).json(Professional);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const update_Professional = async (req, res) => {
    try {
        const update_Professional = await Servico.update_Professional(req.params.id, req.body);
        if (!update_Professional) {
            return res.status(404).json({ message: 'Professional não encontrado' });
        }
        res.status(200).json(update_Professional);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const delete_Professional = async (req, res) => {
    try {
        const deleted = await Servico.delete_Professional(req.params.id);
        if (!deleted) {
            return res.status(404).json({ message: 'Professional não encontrado' });
        }
        res.status(204).json();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};