import schMod from "../models/scheduleModels.js";
import secMod from "../models/sectionModels.js";
import tookMod from "../models/tookModels.js";
import takeMod from "../models/takeModels.js";
import { wrapper } from "../middleware/wrapper.js";

const defaultController = wrapper(async (req, res, next) => {
  let [data, _] = await schMod.defaultQuery();
  req.data = data;
  next();
});

const getSchedulesById = wrapper(async (req, res, next) => {
  let id = req.params.id;
  let [data, _] = await schMod.getScheduleById(id);
  req.data = data;
  next();
});

const getSchedulesByTakes = wrapper(async (req, res, next) => {
  let id = req.params.id;
  let [data, _] = await takeMod.getTakesByStudentId(id);
  req.data = data;
  next();
});

const addSchedule = wrapper(async (req, res, next) => {
  let queryData = req.body;
  queryData["accountID"] = req.params.id;
  let [data, _] = await schMod.addSchedule(queryData);
  req.data = data;
  next();
});

const deleteSchedule = wrapper(async (req, res, next) => {
  let queryData = req.body;
  queryData["accountID"] = req.params.id;
  let [data, _] = await schMod.deleteSchedule(queryData);
  req.data = data;
  next();
});

const getAllSections = wrapper(async (req, res, next) => {
  let id = req.params.id;
  let [data, _] = await secMod.getAllSections(id);
  req.data = data;
  next();
});

export {
  defaultController,
  getAllSections,
  getSchedulesById,
  getSchedulesByTakes,
  addSchedule,
  deleteSchedule,
};
