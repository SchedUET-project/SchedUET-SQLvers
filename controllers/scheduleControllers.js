import schMod from "../models/scheduleModels.js";
import secMod from "../models/sectionModels.js";
import tookMod from "../models/tookModels.js";
import takeMod from "../models/takeModels.js";
import { wrapper } from "../middleware/wrapper.js";

const defaultController = wrapper(async (req, res, next) => {
  let [data, _] = await schMod.defaultQuery();
  res.json(data);
});

const getSchedulesById = wrapper(async (req, res, next) => {
  let id = req.params.id;
  let [data, _] = await schMod.getScheduleById(id);
  res.send(data);
});

const getSchedulesByTakes = wrapper(async (req, res, next) => {
  let id = req.params.id;
  let [data, _] = await takeMod.getTakesByStudentId(id);
  res.send(data);
});

const addSchedule = wrapper(async (req, res, next) => {
  let data = req.body;
  data["accountID"] = req.params.id;
  let [result, _] = await schMod.addSchedule(data);
  res.send(result);
});

const deleteSchedule = wrapper(async (req, res, next) => {
  let data = req.body;
  data["accountID"] = req.params.id;
  let [result, _] = await schMod.deleteSchedule(data);
  res.send(result);
});

const getAllSections = wrapper(async (req, res, next) => {
  let id = req.params.id;
  let [data, _] = await secMod.getAllSections(id);
  res.send(data);
});

export {
  defaultController,
  getAllSections,
  getSchedulesById,
  getSchedulesByTakes,
  addSchedule,
  deleteSchedule,
};
