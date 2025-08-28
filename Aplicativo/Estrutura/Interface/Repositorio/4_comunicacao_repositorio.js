import Consulta from "../../Modelos/10_consulta.js";
import Chat from "../../Modelos/11_chat.js";
import Mensagem from "../../Modelos/12_mensagem.js";
import Notificacao from "../../Modelos/13_notificacao.js";

// ===== CONSULTA ========================================================

export const create_consulta = async (Data) => {
    return await Consulta.create(Data);
}
export const get_all_consulta = async () => {
    return await Consulta.findAll();
}
export const get_consulta_by_id = async (id) => {
    return await Consulta.findByPk(id);
}
export const update_consulta = async (id, updates) => {
    const consulta = await Consulta.findByPk(id);
    if (!consulta) {
        return null;
    }
    return await consulta.update(updates);
}
export const delete_consulta = async (id) => {
    const consulta = await Consulta.findByPk(id);
    if (!consulta) {
        return null;
    }
    await consulta.destroy();
    return true;
}


// ===== CHAT ============================================================

export const create_chat = async (Data) => {
    return await Chat.create(Data);
}
export const get_all_chat = async () => {
    return await Chat.findAll();
}
export const get_chat_by_id = async (id) => {
    return await Chat.findByPk(id);
}
export const update_chat = async (id, updates) => {
    const chat = await Chat.findByPk(id);
    if (!chat) {
        return null;
    }
    return await chat.update(updates);
}
export const delete_chat = async (id) => {
    const chat = await Chat.findByPk(id);
    if (!chat) {
        return null;
    }
    await chat.destroy();
    return true;
}


// ===== MENSAGEM ========================================================

export const create_mensagem = async (Data) => {
    return await Mensagem.create(Data);
}
export const get_all_mensagem = async () => {
    return await Mensagem.findAll();
}
export const get_mensagem_by_id = async (id) => {
    return await Mensagem.findByPk(id);
}
export const update_mensagem = async (id, updates) => {
    const mensagem = await Mensagem.findByPk(id);
    if (!mensagem) {
        return null;
    }
    return await mensagem.update(updates);
}
export const delete_mensagem = async (id) => {
    const mensagem = await Mensagem.findByPk(id);
    if (!mensagem) {
        return null;
    }
    await mensagem.destroy();
    return true;
}


// ===== NOTIFICACAO =====================================================

export const create_notificacao = async (Data) => {
    return await Notificacao.create(Data);
}
export const get_all_notificacao = async () => {
    return await Notificacao.findAll();
}
export const get_notificacao_by_id = async (id) => {
    return await Notificacao.findByPk(id);
}
export const update_notificacao = async (id, updates) => {
    const notificacao = await Notificacao.findByPk(id);
    if (!notificacao) {
        return null;
    }
    return await notificacao.update(updates);
}
export const delete_notificacao = async (id) => {
    const notificacao = await Notificacao.findByPk(id);
    if (!notificacao) {
        return null;
    }
    await notificacao.destroy();
    return true;
}