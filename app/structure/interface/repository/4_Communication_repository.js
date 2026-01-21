import Consultation from "../../model/10_Consultation.js";
import Chat from "../../model/11_Chat.js";
import Message from "../../model/12_Message.js";
import Notification from "../../model/13_Notification.js";

// ===== Consultation ========================================================

export const create_Consultation = async (Data) => {
    return await Consultation.create(Data);
}
export const get_all_Consultation = async () => {
    return await Consultation.findAll();
}
export const get_Consultation_by_id = async (id) => {
    return await Consultation.findByPk(id);
}
export const update_Consultation = async (id, updates) => {
    const Consultation = await Consultation.findByPk(id);
    if (!Consultation) {
        return null;
    }
    return await Consultation.update(updates);
}
export const delete_Consultation = async (id) => {
    const Consultation = await Consultation.findByPk(id);
    if (!Consultation) {
        return null;
    }
    await Consultation.destroy();
    return true;
}


// ===== Chat ============================================================

export const create_Chat = async (Data) => {
    return await Chat.create(Data);
}
export const get_all_Chat = async () => {
    return await Chat.findAll();
}
export const get_Chat_by_id = async (id) => {
    return await Chat.findByPk(id);
}
export const update_Chat = async (id, updates) => {
    const Chat = await Chat.findByPk(id);
    if (!Chat) {
        return null;
    }
    return await Chat.update(updates);
}
export const delete_Chat = async (id) => {
    const Chat = await Chat.findByPk(id);
    if (!Chat) {
        return null;
    }
    await Chat.destroy();
    return true;
}


// ===== Message ========================================================

export const create_Message = async (Data) => {
    return await Message.create(Data);
}
export const get_all_Message = async () => {
    return await Message.findAll();
}
export const get_Message_by_id = async (id) => {
    return await Message.findByPk(id);
}
export const update_Message = async (id, updates) => {
    const Message = await Message.findByPk(id);
    if (!Message) {
        return null;
    }
    return await Message.update(updates);
}
export const delete_Message = async (id) => {
    const Message = await Message.findByPk(id);
    if (!Message) {
        return null;
    }
    await Message.destroy();
    return true;
}


// ===== Notification =====================================================

export const create_Notification = async (Data) => {
    return await Notification.create(Data);
}
export const get_all_Notification = async () => {
    return await Notification.findAll();
}
export const get_Notification_by_id = async (id) => {
    return await Notification.findByPk(id);
}
export const update_Notification = async (id, updates) => {
    const Notification = await Notification.findByPk(id);
    if (!Notification) {
        return null;
    }
    return await Notification.update(updates);
}
export const delete_Notification = async (id) => {
    const Notification = await Notification.findByPk(id);
    if (!Notification) {
        return null;
    }
    await Notification.destroy();
    return true;
}