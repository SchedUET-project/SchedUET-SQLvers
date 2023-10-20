import { wrapper } from "../middleware/wrapper.js";
import mtrMod from "../models/materialModels.js";

const defaultController = wrapper(async (req, res, next) => {
  let [data, _] = await mtrMod.defaultQuery();
  res.json(data);
});

const getMaterials = wrapper(async (req, res, next) => {
  res.send("getMaterials");
});
const addMaterial = wrapper(async (req, res, next) => {
  let data = req.body;
  let [result, _] = await mtrMod.addMaterial(data);
  res.send(result);
});

const deleteMaterial = wrapper(async (req, res, next) => {
  let data = req.params.id;
  let [result, _] = await mtrMod.deleteMaterial(data);
  res.send(result);
});

const updateMaterial = wrapper(async (req, res, next) => {
  let id = req.params.id;
  let data = req.body;
  let [result, _] = await mtrMod.updateMaterial(id, data);
  res.send(result);
});

export {
  defaultController,
  getMaterials,
  addMaterial,
  deleteMaterial,
  updateMaterial,
};
