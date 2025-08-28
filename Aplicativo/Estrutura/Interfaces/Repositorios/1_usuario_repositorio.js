import Usuario from "../../Modelos/1_usuario.js";
import Credencia from "../../Modelos/2_credencia.js";
import Administrador from "../../Modelos/3_administrador.js";
import Paciente from "../../Modelos/4_paciente.js";
import Profissional from "../../Modelos/5_profissional.js";

// ===== USUARIO =========================================================

export const create_usuario = async (Data) => {
    return await Usuario.create(Data);
}
export const get_all_usuario = async () => {
    return await Usuario.findAll();
}
export const get_usuario_by_id = async (id) => {
    return await Usuario.findByPk(id);
}
export const update_usuario = async (id, updates) => {
    const usuario = await Usuario.findByPk(id);
    if (!usuario) {
        return null;
    }
    return await usuario.update(updates);
}
export const delete_usuario = async (id) => {
    const usuario = await Usuario.findByPk(id);
    if (!usuario) {
        return null;
    }
    await usuario.destroy();
    return true;
}


// ===== CREDENCIA =======================================================

export const create_credencia = async (Data) => {
    return await Credencia.create(Data);
}
export const get_all_credencia = async () => {
    return await Credencia.findAll();
}
export const get_credencia_by_id = async (id) => {
    return await Credencia.findByPk(id);
}
export const update_credencia = async (id, updates) => {
    const credencia = await Credencia.findByPk(id);
    if (!credencia) {
        return null;
    }
    return await credencia.update(updates);
}
export const delete_credencia = async (id) => {
    const credencia = await Credencia.findByPk(id);
    if (!credencia) {
        return null;
    }
    await credencia.destroy();
    return true;
}


// ===== ADMINISTRADOR ===================================================

export const create_administrador = async (Data) => {
    return await Administrador.create(Data);
}
export const get_all_administrador = async () => {
    return await Administrador.findAll();
}
export const get_administrador_by_id = async (id) => {
    return await Administrador.findByPk(id);
}
export const update_administrador = async (id, updates) => {
    const administrador = await Administrador.findByPk(id);
    if (!administrador) {
        return null;
    }
    return await administrador.update(updates);
}
export const delete_administrador = async (id) => {
    const administrador = await Administrador.findByPk(id);
    if (!administrador) {
        return null;
    }
    await administrador.destroy();
    return true;
}


// ===== PACIENTE ========================================================

export const create_paciente = async (Data) => {
    return await Paciente.create(Data);
}
export const get_all_paciente = async () => {
    return await Paciente.findAll();
}
export const get_paciente_by_id = async (id) => {
    return await Paciente.findByPk(id);
}
export const update_paciente = async (id, updates) => {
    const paciente = await Paciente.findByPk(id);
    if (!paciente) {
        return null;
    }
    return await paciente.update(updates);
}
export const delete_paciente = async (id) => {
    const paciente = await Paciente.findByPk(id);
    if (!paciente) {
        return null;
    }
    await paciente.destroy();
    return true;
}


// ===== PROFISSIONAL ====================================================

export const create_profissional = async (Data) => {
    return await Profissional.create(Data);
}
export const get_all_profissional = async () => {
    return await Profissional.findAll();
}
export const get_profissional_by_id = async (id) => {
    return await Profissional.findByPk(id);
}
export const update_profissional = async (id, updates) => {
    const profissional = await Profissional.findByPk(id);
    if (!profissional) {
        return null;
    }
    return await profissional.update(updates);
}
export const delete_profissional = async (id) => {
    const profissional = await Profissional.findByPk(id);
    if (!profissional) {
        return null;
    }
    await profissional.destroy();
    return true;
}