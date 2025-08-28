import * as Repositorio from "../Repositorio/4_comunicacao_repositorio.js";

// ===== CONSULTA ========================================================
export const create_consulta = async (data) => {
    return await Repositorio.create_consulta(data);
};

export const get_all_consulta = async () => {
    return await Repositorio.get_all_consulta();
};

export const get_consulta_by_id = async (id) => {
    return await Repositorio.get_consulta_by_id(id);
};

export const update_consulta = async (id, updates) => {
    return await Repositorio.update_consulta(id, updates);
};

export const delete_consulta = async (id) => {
    return await Repositorio.delete_consulta(id);
};


// ===== CHAT ============================================================
export const create_chat = async (data) => {
    return await Repositorio.create_chat(data);
};

export const get_all_chat = async () => {
    return await Repositorio.get_all_chat();
};

export const get_chat_by_id = async (id) => {
    return await Repositorio.get_chat_by_id(id);
};

export const update_chat = async (id, updates) => {
    return await Repositorio.update_chat(id, updates);
};

export const delete_chat = async (id) => {
    return await Repositorio.delete_chat(id);
};


// ===== MENSAGEM ========================================================
export const create_mensagem = async (data) => {
    return await Repositorio.create_mensagem(data);
};

export const get_all_mensagem = async () => {
    return await Repositorio.get_all_mensagem();
};

export const get_mensagem_by_id = async (id) => {
    return await Repositorio.get_mensagem_by_id(id);
};

export const update_mensagem = async (id, updates) => {
    return await Repositorio.update_mensagem(id, updates);
};

export const delete_mensagem = async (id) => {
    return await Repositorio.delete_mensagem(id);
};


// ===== NOTIFICACAO =====================================================
export const create_notificacao = async (data) => {
    return await Repositorio.create_notificacao(data);
};

export const get_all_notificacao = async () => {
    return await Repositorio.get_all_notificacao();
};

export const get_notificacao_by_id = async (id) => {
    return await Repositorio.get_notificacao_by_id(id);
};

export const update_notificacao = async (id, updates) => {
    return await Repositorio.update_notificacao(id, updates);
};

export const delete_notificacao = async (id) => {
    return await Repositorio.delete_notificacao(id);
};