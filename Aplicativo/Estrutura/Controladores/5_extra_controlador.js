import * as Servico from "../Interfaces/Servicos/5_extra_servico.js";
import axios from "axios";

// ===== PROFISSIONAL_AREA_DE_TRABALHO =================================
export const get_all_profissional_area_de_trabalho = async (req, res) => {
    try {
        const items = await Servico.get_all_profissional_area_de_trabalho();
        res.status(200).json(items);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const create_profissional_area_de_trabalho = async (req, res) => {
    try {
        const newItem = await Servico.create_profissional_area_de_trabalho(req.body);
        res.status(201).json(newItem);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const get_profissional_area_de_trabalho_by_id = async (req, res) => {
    try {
        const item = await Servico.get_profissional_area_de_trabalho_by_id(req.params.id);
        if (!item) {
            return res.status(404).json({ message: 'Profissional_area_de_trabalho não encontrado com id: ' + req.params.id });
        }
        res.status(200).json(item);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const update_profissional_area_de_trabalho = async (req, res) => {
    try {
        const updatedItem = await Servico.update_profissional_area_de_trabalho(req.params.id, req.body);
        if (!updatedItem) {
            return res.status(404).json({ message: 'Profissional_area_de_trabalho não encontrado' });
        }
        res.status(200).json(updatedItem);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const delete_profissional_area_de_trabalho = async (req, res) => {
    try {
        const deleted = await Servico.delete_profissional_area_de_trabalho(req.params.id);
        if (!deleted) {
            return res.status(404).json({ message: 'Profissional_area_de_trabalho não encontrado' });
        }
        res.status(204).json();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


// ===== PROFISSIONAL_DIA_DA_SEMANA ===================================
export const get_all_profissional_dia_da_semana = async (req, res) => {
    try {
        const items = await Servico.get_all_profissional_dia_da_semana();
        res.status(200).json(items);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const create_profissional_dia_da_semana = async (req, res) => {
    try {
        const newItem = await Servico.create_profissional_dia_da_semana(req.body);
        res.status(201).json(newItem);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const get_profissional_dia_da_semana_by_id = async (req, res) => {
    try {
        const item = await Servico.get_profissional_dia_da_semana_by_id(req.params.id);
        if (!item) {
            return res.status(404).json({ message: 'Profissional_dia_da_semana não encontrado com id: ' + req.params.id });
        }
        res.status(200).json(item);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const update_profissional_dia_da_semana = async (req, res) => {
    try {
        const updatedItem = await Servico.update_profissional_dia_da_semana(req.params.id, req.body);
        if (!updatedItem) {
            return res.status(404).json({ message: 'Profissional_dia_da_semana não encontrado' });
        }
        res.status(200).json(updatedItem);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const delete_profissional_dia_da_semana = async (req, res) => {
    try {
        const deleted = await Servico.delete_profissional_dia_da_semana(req.params.id);
        if (!deleted) {
            return res.status(404).json({ message: 'Profissional_dia_da_semana não encontrado' });
        }
        res.status(204).json();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


// ===== DENUNCIA ========================================================
export const get_all_denuncia = async (req, res) => {
    try {
        const denuncias = await Servico.get_all_denuncia();
        res.status(200).json(denuncias);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const create_denuncia = async (req, res) => {
    try {
        const newDenuncia = await Servico.create_denuncia(req.body);
        res.status(201).json(newDenuncia);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const get_denuncia_by_id = async (req, res) => {
    try {
        const denuncia = await Servico.get_denuncia_by_id(req.params.id);
        if (!denuncia) {
            return res.status(404).json({ message: 'Denuncia não encontrada com id: ' + req.params.id });
        }
        res.status(200).json(denuncia);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const update_denuncia = async (req, res) => {
    try {
        const updatedDenuncia = await Servico.update_denuncia(req.params.id, req.body);
        if (!updatedDenuncia) {
            return res.status(404).json({ message: 'Denuncia não encontrada' });
        }
        res.status(200).json(updatedDenuncia);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const delete_denuncia = async (req, res) => {
    try {
        const deleted = await Servico.delete_denuncia(req.params.id);
        if (!deleted) {
            return res.status(404).json({ message: 'Denuncia não encontrada' });
        }
        res.status(204).json();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
//======SMS========================================================
//SMS_______________________________________
export const enviarCodigo = async (req, res) => {
  try {
    const { telefone, codigo, nome } = req.body;

    const response = await axios.post(
      "https://app-utalk.umbler.com/api/v1/messages/simplified/",
      {
        toPhone: telefone,
        fromPhone: "+244953358562",
        organizationId: "aPc_le80iesrY_0P",
        message: `MindCare: seu código de confirmação é ${codigo}. \nUse este código para concluir o cadastro no aplicativo. \nNão compartilhe com ninguém.`,
        file: null,
        skipReassign: false,
        contactName: nome
      },
      {
        headers: {
          Authorization:
            "Bearer MindCare-2025-10-21-2093-11-08--82B6678121D578ADC6CBB887959930B3F3463DA7950FF4207CAE7E4E5377C1B5",
          "Content-Type": "application/json"
        }
      }
    );

    return res.json({
      success: true,
      message: "Código enviado com sucesso!",
      talkResponse: response.data
    });
  } catch (error) {
    console.error("Erro ao enviar código:", error.response?.data || error);
    return res.status(500).json({
      success: false,
      error: error.response?.data || "Erro desconhecido ao enviar WhatsApp"
    });
  }
};