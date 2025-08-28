import * as Servico from "../Interfaces/Servicos/4_comunicacao_servico.js";

// ===== CONSULTA ========================================================
export const get_all_consulta = async (req, res) => {
    try {
        const consultas = await Servico.get_all_consulta();
        res.status(200).json(consultas);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const create_consulta = async (req, res) => {
    try {
        const newConsulta = await Servico.create_consulta(req.body);
        res.status(201).json(newConsulta);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const get_consulta_by_id = async (req, res) => {
    try {
        const consulta = await Servico.get_consulta_by_id(req.params.id);
        if (!consulta) {
            return res.status(404).json({ message: 'Consulta não encontrada com id: ' + req.params.id });
        }
        res.status(200).json(consulta);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const update_consulta = async (req, res) => {
    try {
        const updatedConsulta = await Servico.update_consulta(req.params.id, req.body);
        if (!updatedConsulta) {
            return res.status(404).json({ message: 'Consulta não encontrada' });
        }
        res.status(200).json(updatedConsulta);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const delete_consulta = async (req, res) => {
    try {
        const deleted = await Servico.delete_consulta(req.params.id);
        if (!deleted) {
            return res.status(404).json({ message: 'Consulta não encontrada' });
        }
        res.status(204).json();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


// ===== CHAT ============================================================
export const get_all_chat = async (req, res) => {
    try {
        const chats = await Servico.get_all_chat();
        res.status(200).json(chats);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const create_chat = async (req, res) => {
    try {
        const newChat = await Servico.create_chat(req.body);
        res.status(201).json(newChat);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const get_chat_by_id = async (req, res) => {
    try {
        const chat = await Servico.get_chat_by_id(req.params.id);
        if (!chat) {
            return res.status(404).json({ message: 'Chat não encontrado com id: ' + req.params.id });
        }
        res.status(200).json(chat);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const update_chat = async (req, res) => {
    try {
        const updatedChat = await Servico.update_chat(req.params.id, req.body);
        if (!updatedChat) {
            return res.status(404).json({ message: 'Chat não encontrado' });
        }
        res.status(200).json(updatedChat);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const delete_chat = async (req, res) => {
    try {
        const deleted = await Servico.delete_chat(req.params.id);
        if (!deleted) {
            return res.status(404).json({ message: 'Chat não encontrado' });
        }
        res.status(204).json();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


// ===== MENSAGEM ========================================================
export const get_all_mensagem = async (req, res) => {
    try {
        const mensagens = await Servico.get_all_mensagem();
        res.status(200).json(mensagens);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const create_mensagem = async (req, res) => {
    try {
        const newMensagem = await Servico.create_mensagem(req.body);
        res.status(201).json(newMensagem);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const get_mensagem_by_id = async (req, res) => {
    try {
        const mensagem = await Servico.get_mensagem_by_id(req.params.id);
        if (!mensagem) {
            return res.status(404).json({ message: 'Mensagem não encontrada com id: ' + req.params.id });
        }
        res.status(200).json(mensagem);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const update_mensagem = async (req, res) => {
    try {
        const updatedMensagem = await Servico.update_mensagem(req.params.id, req.body);
        if (!updatedMensagem) {
            return res.status(404).json({ message: 'Mensagem não encontrada' });
        }
        res.status(200).json(updatedMensagem);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const delete_mensagem = async (req, res) => {
    try {
        const deleted = await Servico.delete_mensagem(req.params.id);
        if (!deleted) {
            return res.status(404).json({ message: 'Mensagem não encontrada' });
        }
        res.status(204).json();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


// ===== NOTIFICACAO =====================================================
export const get_all_notificacao = async (req, res) => {
    try {
        const notificacoes = await Servico.get_all_notificacao();
        res.status(200).json(notificacoes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const create_notificacao = async (req, res) => {
    try {
        const newNotificacao = await Servico.create_notificacao(req.body);
        res.status(201).json(newNotificacao);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const get_notificacao_by_id = async (req, res) => {
    try {
        const notificacao = await Servico.get_notificacao_by_id(req.params.id);
        if (!notificacao) {
            return res.status(404).json({ message: 'Notificação não encontrada com id: ' + req.params.id });
        }
        res.status(200).json(notificacao);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const update_notificacao = async (req, res) => {
    try {
        const updatedNotificacao = await Servico.update_notificacao(req.params.id, req.body);
        if (!updatedNotificacao) {
            return res.status(404).json({ message: 'Notificação não encontrada' });
        }
        res.status(200).json(updatedNotificacao);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const delete_notificacao = async (req, res) => {
    try {
        const deleted = await Servico.delete_notificacao(req.params.id);
        if (!deleted) {
            return res.status(404).json({ message: 'Notificação não encontrada' });
        }
        res.status(204).json();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};