import mtrMod from "../models/materialModels.js";

const defaultController = async (req, res, next) => {
  let [data, _] = await mtrMod.defaultQuery();
  res.json(data);
};

const getMaterials = async (req, res, next) => {
  res.send("getMaterials");
};
const addMaterial = async (req, res, next) => {
  res.send("addMaterial");
};

const deleteMaterial = async (req, res, next) => {
  res.send("deleteMaterial");
};

const updateMaterial = async (req, res, next) => {
  res.send("updateMaterial");
};

export {
  defaultController,
  getMaterials,
  addMaterial,
  deleteMaterial,
  updateMaterial,
};
