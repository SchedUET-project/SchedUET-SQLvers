import takeMod from "../models/takeModels.js";
import secMod from "../models/sectionModels.js";
import { wrapper } from "../middleware/wrapper.js";

const defaultController = wrapper(async (req, res, next) => {
  let [data, _] = await takeMod.defaultQuery();
  req.data = data;
  next();
});
const getAllSections = wrapper(async (req, res, next) => {
  let id = req.params.id;
  let [data, _] = await secMod.getAllSections(id);
  req.data = data;
  next();
});

const getRegisteredSections = wrapper(async (req, res, next) => {
  let id = req.params.id;
  let [data, _] = await takeMod.getTakesByStudentId(id);
  req.data = data;
  next();
});

const deleteTake = wrapper(async (req, res, next) => {
  let queryData = req.body;
  queryData["accountID"] = req.params.id;
  let [data, _] = await takeMod.deleteTake(queryData);
  req.data = data;
  next();
});

const addTake = wrapper(async (req, res, next) => {
  let queryData = req.body;
  queryData["accountID"] = req.params.id;
  let [data, _] = await takeMod.addTake(queryData);
  req.data = data;
  next();
});

export {
  defaultController,
  getAllSections,
  getRegisteredSections,
  deleteTake,
  addTake,
};
