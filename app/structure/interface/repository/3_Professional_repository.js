import Day_of_week from "../../model/6_Day_of_week.js";
import Work_area from "../../model/7_Work_area.js";
import Feedback from "../../model/8_Feedback.js";

// ===== Day_of_week ===================================================

export const create_Day_of_week = async (Data) => {
    return await Day_of_week.create(Data);
}
export const get_all_Day_of_week = async () => {
    return await Day_of_week.findAll();
}
export const get_Day_of_week_by_id = async (id) => {
    return await Day_of_week.findByPk(id);
}
export const update_Day_of_week = async (id, updates) => {
    const Day_of_weeku = await Day_of_week.findByPk(id);
    if (!Day_of_weeku) {
        return null;
    }
    return await Day_of_weeku.update(updates);
}
export const delete_Day_of_week = async (id) => {
    const Day_of_weeku = await Day_of_week.findByPk(id);
    if (!Day_of_weeku) {
        return null;
    }
    await Day_of_weeku.destroy();
    return true;
}


// ===== Work_area ================================================

export const create_Work_area = async (Data) => {
    return await Work_area.create(Data);
}
export const get_all_Work_area = async () => {
    return await Work_area.findAll();
}
export const get_Work_area_by_id = async (id) => {
    return await Work_area.findByPk(id);
}
export const update_Work_area = async (id, updates) => {
    const Work_areau = await Work_area.findByPk(id);
    if (!Work_areau) {
        return null;
    }
    return await Work_areau.update(updates);
}
export const delete_Work_area = async (id) => {
    const Work_areau = await Work_area.findByPk(id);
    if (!Work_areau) {
        return null;
    }
    await Work_areau.destroy();
    return true;
}


// ===== Feedback ========================================================

export const create_Feedback = async (Data) => {
    return await Feedback.create(Data);
}
export const get_all_Feedback = async () => {
    return await Feedback.findAll();
}
export const get_Feedback_by_id = async (id) => {
    return await Feedback.findByPk(id);
}
export const update_Feedback = async (id, updates) => {
    const Feedbacku = await Feedback.findByPk(id);
    if (!Feedbacku) {
        return null;
    }
    return await Feedbacku.update(updates);
}
export const delete_Feedback = async (id) => {
    const Feedbacku = await Feedback.findByPk(id);
    if (!Feedbacku) {
        return null;
    }
    await Feedbacku.destroy();
    return true;
}