import takeMod from "../models/takeModels.js";
import secMod from "../models/sectionModels.js";
import tookMod from "../models/tookModels.js";

const defaultController = async (req, res, next) => {
  let [data, _] = await takeMod.defaultQuery();
  res.json(data);
};
const getAllSections = async (req, res, next) => {
  res.send("getAllSection");
};

const getRegisteredSections = async (req, res, next) => {
  res.send("getRegisteredSections");
};

const deleteTake = async (req, res, next) => {
  res.send("deleteTake");
};

const addTake = async (req, res, next) => {
  res.send("addTake");
};

export {
  defaultController,
  getAllSections,
  getRegisteredSections,
  deleteTake,
  addTake,
};
  
  
