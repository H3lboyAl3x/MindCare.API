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
    const Consultationu = await Consultation.findByPk(id);
    if (!Consultationu) {
        return null;
    }
    return await Consultationu.update(updates);
}
export const delete_Consultation = async (id) => {
    const Consultationu = await Consultation.findByPk(id);
    if (!Consultationu) {
        return null;
    }
    await Consultationu.destroy();
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
    const Chatu = await Chat.findByPk(id);
    if (!Chatu) {
        return null;
    }
    return await Chatu.update(updates);
}
export const delete_Chat = async (id) => {
    const Chatu = await Chat.findByPk(id);
    if (!Chatu) {
        return null;
    }
    await Chatu.destroy();
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
    const Messageu = await Message.findByPk(id);
    if (!Messageu) {
        return null;
    }
    return await Messageu.update(updates);
}
export const delete_Message = async (id) => {
    const Messageu = await Message.findByPk(id);
    if (!Messageu) {
        return null;
    }
    await Messageu.destroy();
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
    const Notificationu = await Notification.findByPk(id);
    if (!Notificationu) {
        return null;
    }
    return await Notificationu.update(updates);
}
export const delete_Notification = async (id) => {
    const Notificationu = await Notification.findByPk(id);
    if (!Notificationu) {
        return null;
    }
    await Notificationu.destroy();
    return true;
}