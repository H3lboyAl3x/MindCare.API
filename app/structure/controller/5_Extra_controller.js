import * as service from "../interface/service/5_Extra_service.js";
import axios from "axios";

// ===== Professional_Work_area =================================
export const get_all_Professional_Work_area = async (req, res) => {
    try {
        const items = await service.get_all_Professional_Work_area();
        res.status(200).json(items);
    } catch (error) {
        res.status(500).json({ error: error.Message });
    }
};

export const create_Professional_Work_area = async (req, res) => {
    try {
        const newItem = await service.create_Professional_Work_area(req.body);
        res.status(201).json(newItem);
    } catch (error) {
        res.status(400).json({ error: error.Message });
    }
};

export const get_Professional_Work_area_by_id = async (req, res) => {
    try {
        const item = await service.get_Professional_Work_area_by_id(req.params.id);
        if (!item) {
            return res.status(404).json({ Message: 'Professional_Work_area não encontrado com id: ' + req.params.id });
        }
        res.status(200).json(item);
    } catch (error) {
        res.status(500).json({ error: error.Message });
    }
};

export const update_Professional_Work_area = async (req, res) => {
    try {
        const updatedItem = await service.update_Professional_Work_area(req.params.id, req.body);
        if (!updatedItem) {
            return res.status(404).json({ Message: 'Professional_Work_area não encontrado' });
        }
        res.status(200).json(updatedItem);
    } catch (error) {
        res.status(400).json({ error: error.Message });
    }
};

export const delete_Professional_Work_area = async (req, res) => {
    try {
        const deleted = await service.delete_Professional_Work_area(req.params.id);
        if (!deleted) {
            return res.status(404).json({ Message: 'Professional_Work_area não encontrado' });
        }
        res.status(204).json();
    } catch (error) {
        res.status(500).json({ error: error.Message });
    }
};


// ===== Professional_Day_of_week ===================================
export const get_all_Professional_Day_of_week = async (req, res) => {
    try {
        const items = await service.get_all_Professional_Day_of_week();
        res.status(200).json(items);
    } catch (error) {
        res.status(500).json({ error: error.Message });
    }
};

export const create_Professional_Day_of_week = async (req, res) => {
    try {
        const newItem = await service.create_Professional_Day_of_week(req.body);
        res.status(201).json(newItem);
    } catch (error) {
        res.status(400).json({ error: error.Message });
    }
};

export const get_Professional_Day_of_week_by_id = async (req, res) => {
    try {
        const item = await service.get_Professional_Day_of_week_by_id(req.params.id);
        if (!item) {
            return res.status(404).json({ Message: 'Professional_Day_of_week não encontrado com id: ' + req.params.id });
        }
        res.status(200).json(item);
    } catch (error) {
        res.status(500).json({ error: error.Message });
    }
};

export const update_Professional_Day_of_week = async (req, res) => {
    try {
        const updatedItem = await service.update_Professional_Day_of_week(req.params.id, req.body);
        if (!updatedItem) {
            return res.status(404).json({ Message: 'Professional_Day_of_week não encontrado' });
        }
        res.status(200).json(updatedItem);
    } catch (error) {
        res.status(400).json({ error: error.Message });
    }
};

export const delete_Professional_Day_of_week = async (req, res) => {
    try {
        const deleted = await service.delete_Professional_Day_of_week(req.params.id);
        if (!deleted) {
            return res.status(404).json({ Message: 'Professional_Day_of_week não encontrado' });
        }
        res.status(204).json();
    } catch (error) {
        res.status(500).json({ error: error.Message });
    }
};


// ===== Complaint ========================================================
export const get_all_Complaint = async (req, res) => {
    try {
        const Complaints = await service.get_all_Complaint();
        res.status(200).json(Complaints);
    } catch (error) {
        res.status(500).json({ error: error.Message });
    }
};

export const create_Complaint = async (req, res) => {
    try {
        const newComplaint = await service.create_Complaint(req.body);
        res.status(201).json(newComplaint);
    } catch (error) {
        res.status(400).json({ error: error.Message });
    }
};

export const get_Complaint_by_id = async (req, res) => {
    try {
        const Complaint = await service.get_Complaint_by_id(req.params.id);
        if (!Complaint) {
            return res.status(404).json({ Message: 'Complaint não encontrada com id: ' + req.params.id });
        }
        res.status(200).json(Complaint);
    } catch (error) {
        res.status(500).json({ error: error.Message });
    }
};

export const update_Complaint = async (req, res) => {
    try {
        const updatedComplaint = await service.update_Complaint(req.params.id, req.body);
        if (!updatedComplaint) {
            return res.status(404).json({ Message: 'Complaint não encontrada' });
        }
        res.status(200).json(updatedComplaint);
    } catch (error) {
        res.status(400).json({ error: error.Message });
    }
};

export const delete_Complaint = async (req, res) => {
    try {
        const deleted = await service.delete_Complaint(req.params.id);
        if (!deleted) {
            return res.status(404).json({ Message: 'Complaint não encontrada' });
        }
        res.status(204).json();
    } catch (error) {
        res.status(500).json({ error: error.Message });
    }
}
// ===== Patient_Professional ========================================================
export const get_all_Patient_Professional = async (req, res) => {
    try {
        const Patient_Professional = await service.get_all_Patient_Professional();
        res.status(200).json(Patient_Professional);
    } catch (error) {
        res.status(500).json({ error: error.Message });
    }
};

export const create_Patient_Professional = async (req, res) => {
    try {
        const newPatient_Professional = await service.create_Patient_Professional(req.body);
        res.status(201).json(newPatient_Professional);
    } catch (error) {
        res.status(400).json({ error: error.Message });
    }
};

export const get_Patient_Professional_by_id = async (req, res) => {
    try {
        const Patient_Professional = await service.get_Patient_Professional_by_id(req.params.id);
        if (!Patient_Professional) {
            return res.status(404).json({ Message: 'Patient_Professional não encontrada com id: ' + req.params.id });
        }
        res.status(200).json(Patient_Professional);
    } catch (error) {
        res.status(500).json({ error: error.Message });
    }
};

export const update_Patient_Professional = async (req, res) => {
    try {
        const updatedPatient_Professional = await service.update_Patient_Professional(req.params.id, req.body);
        if (!updatedPatient_Professional) {
            return res.status(404).json({ Message: 'Patient_Professional não encontrada' });
        }
        res.status(200).json(updatedPatient_Professional);
    } catch (error) {
        res.status(400).json({ error: error.Message });
    }
};

export const delete_Patient_Professional = async (req, res) => {
    try {
        const deleted = await service.delete_Patient_Professional(req.params.id);
        if (!deleted) {
            return res.status(404).json({ Message: 'Patient_Professional não encontrada' });
        }
        res.status(204).json();
    } catch (error) {
        res.status(500).json({ error: error.Message });
    }
}

//======SMS========================================================
//SMS_______________________________________
export const enviarCodigo = async (req, res) => {
  try {
    const { number, codigo, name } = req.body;

    const response = await axios.post(
      "https://app-utalk.umbler.com/api/v1/Messages/simplified/",
      {
        toPhone: number,
        fromPhone: "+244953358562",
        organizationId: "aPc_le80iesrY_0P",
        Message: `MindCare: seu código de confirmação é ${codigo}. \nUse este código para concluir o cadastro no app. \nNão compartilhe com ninguém.`,
        file: null,
        skipReassign: false,
        contactName: name
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
      Message: "Código enviado com sucesso!",
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