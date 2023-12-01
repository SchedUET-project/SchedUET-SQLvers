import { wrapper } from "../middleware/wrapper.js";
import mtrMod from "../models/materialModels.js";

const defaultController = wrapper(async (req, res, next) => {
  let [data, _] = await mtrMod.defaultQuery();
  res.json(data);
});

const getMaterials = wrapper(async (req, res, next) => {
  let query = req.query;
  query["mode"] = query["mode"].split(",");
  let [data, _] = await mtrMod.getMaterials(query);
  req.data = data;
  next();
});

const addMaterial = wrapper(async (req, res, next) => {
  let queryData = req.body;
  let [data, _] = await mtrMod.addMaterial(queryData);
  req.data = data;
  next();
});

const deleteMaterial = wrapper(async (req, res, next) => {
  let queryData = req.params.id;
  let [data, _] = await mtrMod.deleteMaterial(queryData);
  req.data = data;
  next();
});

const updateMaterial = wrapper(async (req, res, next) => {
  let id = req.params.id;
  let queryData = req.body;
  let [data, _] = await mtrMod.updateMaterial(id, queryData);
  req.data = data;
  next();
});

export {
  defaultController,
  getMaterials,
  addMaterial,
  deleteMaterial,
  updateMaterial,
};
