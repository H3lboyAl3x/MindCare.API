import * as Repositorio from "../Repositorio/1_usuario_repositorio.js";

// ===== USUARIO =========================================================
export const create_usuario = async (data) => {
    return await Repositorio.create_usuario(data);
};

export const get_all_usuario = async () => {
    return await Repositorio.get_all_usuario();
};

export const get_usuario_by_id = async (id) => {
    return await Repositorio.get_usuario_by_id(id);
};

export const update_usuario = async (id, updates) => {
    return await Repositorio.update_usuario(id, updates);
};

export const delete_usuario = async (id) => {
    return await Repositorio.delete_usuario(id);
};


// ===== CREDENCIA =======================================================
export const create_credencia = async (data) => {
    return await Repositorio.create_credencia(data);
};

export const get_all_credencia = async () => {
    return await Repositorio.get_all_credencia();
};

export const get_credencia_by_id = async (id) => {
    return await Repositorio.get_credencia_by_id(id);
};

export const update_credencia = async (id, updates) => {
    return await Repositorio.update_credencia(id, updates);
};

export const delete_credencia = async (id) => {
    return await Repositorio.delete_credencia(id);
};


// ===== ADMINISTRADOR ===================================================
export const create_administrador = async (data) => {
    return await Repositorio.create_administrador(data);
};

export const get_all_administrador = async () => {
    return await Repositorio.get_all_administrador();
};

export const get_administrador_by_id = async (id) => {
    return await Repositorio.get_administrador_by_id(id);
};

export const update_administrador = async (id, updates) => {
    return await Repositorio.update_administrador(id, updates);
};

export const delete_administrador = async (id) => {
    return await Repositorio.delete_administrador(id);
};


// ===== PACIENTE ========================================================
export const create_paciente = async (data) => {
    return await Repositorio.create_paciente(data);
};

export const get_all_paciente = async () => {
    return await Repositorio.get_all_paciente();
};

export const get_paciente_by_id = async (id) => {
    return await Repositorio.get_paciente_by_id(id);
};

export const update_paciente = async (id, updates) => {
    return await Repositorio.update_paciente(id, updates);
};

export const delete_paciente = async (id) => {
    return await Repositorio.delete_paciente(id);
};


// ===== PROFISSIONAL ====================================================
export const create_profissional = async (data) => {
    return await Repositorio.create_profissional(data);
};

export const get_all_profissional = async () => {
    return await Repositorio.get_all_profissional();
};

export const get_profissional_by_id = async (id) => {
    return await Repositorio.get_profissional_by_id(id);
};

export const update_profissional = async (id, updates) => {
    return await Repositorio.update_profissional(id, updates);
};

export const delete_profissional = async (id) => {
    return await Repositorio.delete_profissional(id);
};