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
  res.send("addMaterial");
});

const deleteMaterial = wrapper(async (req, res, next) => {
  res.send("deleteMaterial");
});

const updateMaterial = wrapper(async (req, res, next) => {
  res.send("updateMaterial");
});

export {
  defaultController,
  getMaterials,
  addMaterial,
  deleteMaterial,
  updateMaterial,
};
