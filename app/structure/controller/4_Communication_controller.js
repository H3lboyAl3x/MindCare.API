import * as service from "../interface/service/4_Communication_service.js";

// ===== Consultation ========================================================
export const get_all_Consultation = async (req, res) => {
    try {
        const Consultations = await service.get_all_Consultation();
        res.status(200).json(Consultations);
    } catch (error) {
        res.status(500).json({ error: error.Message });
    }
};

export const create_Consultation = async (req, res) => {
    try {
        const newConsultation = await service.create_Consultation(req.body);
        res.status(201).json(newConsultation);
    } catch (error) {
        res.status(400).json({ error: error.Message });
    }
};

export const get_Consultation_by_id = async (req, res) => {
    try {
        const Consultation = await service.get_Consultation_by_id(req.params.id);
        if (!Consultation) {
            return res.status(404).json({ Message: 'Consultation não encontrada com id: ' + req.params.id });
        }
        res.status(200).json(Consultation);
    } catch (error) {
        res.status(500).json({ error: error.Message });
    }
};

export const update_Consultation = async (req, res) => {
    try {
        const updatedConsultation = await service.update_Consultation(req.params.id, req.body);
        if (!updatedConsultation) {
            return res.status(404).json({ Message: 'Consultation não encontrada' });
        }
        res.status(200).json(updatedConsultation);
    } catch (error) {
        res.status(400).json({ error: error.Message });
    }
};

export const delete_Consultation = async (req, res) => {
    try {
        const deleted = await service.delete_Consultation(req.params.id);
        if (!deleted) {
            return res.status(404).json({ Message: 'Consultation não encontrada' });
        }
        res.status(204).json();
    } catch (error) {
        res.status(500).json({ error: error.Message });
    }
};


// ===== Chat ============================================================
export const get_all_Chat = async (req, res) => {
    try {
        const Chats = await service.get_all_Chat();
        res.status(200).json(Chats);
    } catch (error) {
        res.status(500).json({ error: error.Message });
    }
};

export const create_Chat = async (req, res) => {
    try {
        const newChat = await service.create_Chat(req.body);
        res.status(201).json(newChat);
    } catch (error) {
        res.status(400).json({ error: error.Message });
    }
};

export const get_Chat_by_id = async (req, res) => {
    try {
        const Chat = await service.get_Chat_by_id(req.params.id);
        if (!Chat) {
            return res.status(404).json({ Message: 'Chat não encontrado com id: ' + req.params.id });
        }
        res.status(200).json(Chat);
    } catch (error) {
        res.status(500).json({ error: error.Message });
    }
};

export const update_Chat = async (req, res) => {
    try {
        const updatedChat = await service.update_Chat(req.params.id, req.body);
        if (!updatedChat) {
            return res.status(404).json({ Message: 'Chat não encontrado' });
        }
        res.status(200).json(updatedChat);
    } catch (error) {
        res.status(400).json({ error: error.Message });
    }
};

export const delete_Chat = async (req, res) => {
    try {
        const deleted = await service.delete_Chat(req.params.id);
        if (!deleted) {
            return res.status(404).json({ Message: 'Chat não encontrado' });
        }
        res.status(204).json();
    } catch (error) {
        res.status(500).json({ error: error.Message });
    }
};


// ===== Message ========================================================
export const get_all_Message = async (req, res) => {
    try {
        const mensagens = await service.get_all_Message();
        res.status(200).json(mensagens);
    } catch (error) {
        res.status(500).json({ error: error.Message });
    }
};

export const create_Message = async (req, res) => {
    try {
        const newMessage = await service.create_Message(req.body);
        res.status(201).json(newMessage);
    } catch (error) {
        res.status(400).json({ error: error.Message });
    }
};

export const get_Message_by_id = async (req, res) => {
    try {
        const Message = await service.get_Message_by_id(req.params.id);
        if (!Message) {
            return res.status(404).json({ Message: 'Message não encontrada com id: ' + req.params.id });
        }
        res.status(200).json(Message);
    } catch (error) {
        res.status(500).json({ error: error.Message });
    }
};

export const update_Message = async (req, res) => {
    try {
        const updatedMessage = await service.update_Message(req.params.id, req.body);
        if (!updatedMessage) {
            return res.status(404).json({ Message: 'Message não encontrada' });
        }
        res.status(200).json(updatedMessage);
    } catch (error) {
        res.status(400).json({ error: error.Message });
    }
};

export const delete_Message = async (req, res) => {
    try {
        const deleted = await service.delete_Message(req.params.id);
        if (!deleted) {
            return res.status(404).json({ Message: 'Message não encontrada' });
        }
        res.status(204).json();
    } catch (error) {
        res.status(500).json({ error: error.Message });
    }
};


// ===== Notification =====================================================
export const get_all_Notification = async (req, res) => {
    try {
        const notificacoes = await service.get_all_Notification();
        res.status(200).json(notificacoes);
    } catch (error) {
        res.status(500).json({ error: error.Message });
    }
};

export const create_Notification = async (req, res) => {
    try {
        const newNotification = await service.create_Notification(req.body);
        res.status(201).json(newNotification);
    } catch (error) {
        res.status(400).json({ error: error.Message });
    }
};

export const get_Notification_by_id = async (req, res) => {
    try {
        const Notification = await service.get_Notification_by_id(req.params.id);
        if (!Notification) {
            return res.status(404).json({ Message: 'Notificação não encontrada com id: ' + req.params.id });
        }
        res.status(200).json(Notification);
    } catch (error) {
        res.status(500).json({ error: error.Message });
    }
};

export const update_Notification = async (req, res) => {
    try {
        const updatedNotification = await service.update_Notification(req.params.id, req.body);
        if (!updatedNotification) {
            return res.status(404).json({ Message: 'Notificação não encontrada' });
        }
        res.status(200).json(updatedNotification);
    } catch (error) {
        res.status(400).json({ error: error.Message });
    }
};

export const delete_Notification = async (req, res) => {
    try {
        const deleted = await service.delete_Notification(req.params.id);
        if (!deleted) {
            return res.status(404).json({ Message: 'Notificação não encontrada' });
        }
        res.status(204).json();
    } catch (error) {
        res.status(500).json({ error: error.Message });
    }
};