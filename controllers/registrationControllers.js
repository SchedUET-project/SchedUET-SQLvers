import takeMod from "../models/takeModels.js";
import secMod from "../models/sectionModels.js";
import tookMod from "../models/tookModels.js";
import { wrapper } from "../middleware/wrapper.js";

const defaultController = wrapper(async (req, res, next) => {
  let [data, _] = await takeMod.defaultQuery();
  res.json(data);
});
const getAllSections = wrapper(async (req, res, next) => {
  let id = req.params.id;
  let [data, _] = await secMod.getAllSections(id);
  res.send(data);
});

const getRegisteredSections = wrapper(async (req, res, next) => {
  let id = req.params.id;
  let [data, _] = await takeMod.getTakesByStudentId(id);
  res.send(data);
});

const deleteTake = wrapper(async (req, res, next) => {
  let data = req.body;
  data["accountID"] = req.params.id;
  let [result, _] = await takeMod.deleteTake(data);
  res.send(result);
});

const addTake = wrapper(async (req, res, next) => {
  let data = req.body;
  data["accountID"] = req.params.id;
  let [result, _] = await takeMod.addTake(data);
  res.send(result);
});

export {
  defaultController,
  getAllSections,
  getRegisteredSections,
  deleteTake,
  addTake,
};
