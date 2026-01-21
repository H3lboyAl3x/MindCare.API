import * as repository from "../repository/4_Communication_repository.js";

// ===== Consultation ========================================================
export const create_Consultation = async (data) => {
    return await repository.create_Consultation(data);
};

export const get_all_Consultation = async () => {
    return await repository.get_all_Consultation();
};

export const get_Consultation_by_id = async (id) => {
    return await repository.get_Consultation_by_id(id);
};

export const update_Consultation = async (id, updates) => {
    return await repository.update_Consultation(id, updates);
};

export const delete_Consultation = async (id) => {
    return await repository.delete_Consultation(id);
};


// ===== Chat ============================================================
export const create_Chat = async (data) => {
    return await repository.create_Chat(data);
};

export const get_all_Chat = async () => {
    return await repository.get_all_Chat();
};

export const get_Chat_by_id = async (id) => {
    return await repository.get_Chat_by_id(id);
};

export const update_Chat = async (id, updates) => {
    return await repository.update_Chat(id, updates);
};

export const delete_Chat = async (id) => {
    return await repository.delete_Chat(id);
};


// ===== Message ========================================================
export const create_Message = async (data) => {
    return await repository.create_Message(data);
};

export const get_all_Message = async () => {
    return await repository.get_all_Message();
};

export const get_Message_by_id = async (id) => {
    return await repository.get_Message_by_id(id);
};

export const update_Message = async (id, updates) => {
    return await repository.update_Message(id, updates);
};

export const delete_Message = async (id) => {
    return await repository.delete_Message(id);
};


// ===== Notification =====================================================
export const create_Notification = async (data) => {
    return await repository.create_Notification(data);
};

export const get_all_Notification = async () => {
    return await repository.get_all_Notification();
};

export const get_Notification_by_id = async (id) => {
    return await repository.get_Notification_by_id(id);
};

export const update_Notification = async (id, updates) => {
    return await repository.update_Notification(id, updates);
};

export const delete_Notification = async (id) => {
    return await repository.delete_Notification(id);
};