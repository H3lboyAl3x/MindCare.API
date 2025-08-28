import * as Servico from "../Interfaces/Servicos/1_usuario_servico.js";

// ===== USUARIO ==========================================================
export const get_all_usuario = async (req, res) => {
    try {
        const usuario = await Servico.get_all_usuario();
        res.status(200).json(usuario);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const create_usuario = async (req, res) => {
    try {
        const new_usuario = await Servico.create_usuario(req.body);
        res.status(201).json(new_usuario);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const get_usuario_by_id = async (req, res) => {
    try {
        const usuario = await Servico.get_usuario_by_id(req.params.id);
        if (!usuario) {
            return res.status(404).json({ message: 'Usuário não encontrado de id:' + req.params.id });
        }
        res.status(200).json(usuario);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const update_usuario = async (req, res) => {
    try {
        const update_usuario = await Servico.update_usuario(req.params.id, req.body);
        if (!update_usuario) {
            return res.status(404).json({ message: 'Usuário não encontrado' });
        }
        res.status(200).json(update_usuario);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const delete_usuario = async (req, res) => {
    try {
        const deleted = await Servico.delete_usuario(req.params.id);
        if (!deleted) {
            return res.status(404).json({ message: 'Usuário não encontrado' });
        }
        res.status(204).json();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


// ===== CREDENCIA =========================================================
export const get_all_credencia = async (req, res) => {
    try {
        const credencia = await Servico.get_all_credencia();
        res.status(200).json(credencia);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const create_credencia = async (req, res) => {
    try {
        const new_credencia = await Servico.create_credencia(req.body);
        res.status(201).json(new_credencia);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const get_credencia_by_id = async (req, res) => {
    try {
        const credencia = await Servico.get_credencia_by_id(req.params.id);
        if (!credencia) {
            return res.status(404).json({ message: 'Credência não encontrada de id:' + req.params.id });
        }
        res.status(200).json(credencia);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const update_credencia = async (req, res) => {
    try {
        const update_credencia = await Servico.update_credencia(req.params.id, req.body);
        if (!update_credencia) {
            return res.status(404).json({ message: 'Credência não encontrada' });
        }
        res.status(200).json(update_credencia);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const delete_credencia = async (req, res) => {
    try {
        const deleted = await Servico.delete_credencia(req.params.id);
        if (!deleted) {
            return res.status(404).json({ message: 'Credência não encontrada' });
        }
        res.status(204).json();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


// ===== ADMINISTRADOR =====================================================
export const get_all_administrador = async (req, res) => {
    try {
        const administrador = await Servico.get_all_administrador();
        res.status(200).json(administrador);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const create_administrador = async (req, res) => {
    try {
        const new_administrador = await Servico.create_administrador(req.body);
        res.status(201).json(new_administrador);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const get_administrador_by_id = async (req, res) => {
    try {
        const administrador = await Servico.get_administrador_by_id(req.params.id);
        if (!administrador) {
            return res.status(404).json({ message: 'Administrador não encontrado de id:' + req.params.id });
        }
        res.status(200).json(administrador);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const update_administrador = async (req, res) => {
    try {
        const update_administrador = await Servico.update_administrador(req.params.id, req.body);
        if (!update_administrador) {
            return res.status(404).json({ message: 'Administrador não encontrado' });
        }
        res.status(200).json(update_administrador);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const delete_administrador = async (req, res) => {
    try {
        const deleted = await Servico.delete_administrador(req.params.id);
        if (!deleted) {
            return res.status(404).json({ message: 'Administrador não encontrado' });
        }
        res.status(204).json();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


// ===== PACIENTE ==========================================================
export const get_all_paciente = async (req, res) => {
    try {
        const paciente = await Servico.get_all_paciente();
        res.status(200).json(paciente);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const create_paciente = async (req, res) => {
    try {
        const new_paciente = await Servico.create_paciente(req.body);
        res.status(201).json(new_paciente);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const get_paciente_by_id = async (req, res) => {
    try {
        const paciente = await Servico.get_paciente_by_id(req.params.id);
        if (!paciente) {
            return res.status(404).json({ message: 'Paciente não encontrado de id:' + req.params.id });
        }
        res.status(200).json(paciente);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const update_paciente = async (req, res) => {
    try {
        const update_paciente = await Servico.update_paciente(req.params.id, req.body);
        if (!update_paciente) {
            return res.status(404).json({ message: 'Paciente não encontrado' });
        }
        res.status(200).json(update_paciente);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const delete_paciente = async (req, res) => {
    try {
        const deleted = await Servico.delete_paciente(req.params.id);
        if (!deleted) {
            return res.status(404).json({ message: 'Paciente não encontrado' });
        }
        res.status(204).json();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


// ===== PROFISSIONAL ======================================================
export const get_all_profissional = async (req, res) => {
    try {
        const profissional = await Servico.get_all_profissional();
        res.status(200).json(profissional);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const create_profissional = async (req, res) => {
    try {
        const new_profissional = await Servico.create_profissional(req.body);
        res.status(201).json(new_profissional);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const get_profissional_by_id = async (req, res) => {
    try {
        const profissional = await Servico.get_profissional_by_id(req.params.id);
        if (!profissional) {
            return res.status(404).json({ message: 'Profissional não encontrado de id:' + req.params.id });
        }
        res.status(200).json(profissional);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const update_profissional = async (req, res) => {
    try {
        const update_profissional = await Servico.update_profissional(req.params.id, req.body);
        if (!update_profissional) {
            return res.status(404).json({ message: 'Profissional não encontrado' });
        }
        res.status(200).json(update_profissional);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const delete_profissional = async (req, res) => {
    try {
        const deleted = await Servico.delete_profissional(req.params.id);
        if (!deleted) {
            return res.status(404).json({ message: 'Profissional não encontrado' });
        }
        res.status(204).json();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};