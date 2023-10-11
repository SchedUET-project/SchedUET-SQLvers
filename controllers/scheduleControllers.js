import schMod from "../models/scheduleModels.js";
import secMod from "../models/sectionModels.js";
import tookMod from "../models/tookModels.js";

const defaultController = async (req, res, next) => {
  let [data, _] = await schMod.defaultQuery();
  res.json(data);
};

const getSchedulesById = async (req, res, next) => {
  res.send("getSchedulesById");
};

const getSchedulesByTakes = async (req, res, next) => {
  res.send("getSchedulesByTakes");
};

const addSchedule = async (req, res, next) => {
  res.send("addSchedule");
};

const deleteSchedule = async (req, res, next) => {
  res.send("deleteSchedule");
};

const getAllSections = async (req, res, next) => {
  res.send("getAllSection");
};

export {
  defaultController,
  getAllSections,
  getSchedulesById,
  getSchedulesByTakes,
  addSchedule,
  deleteSchedule,
};
