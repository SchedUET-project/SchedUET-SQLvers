import takeMod from "../models/takeModels.js";
import secMod from "../models/sectionModels.js";
import tookMod from "../models/tookModels.js";

const defaultController = async (req, res, next) => {
  let [data, _] = await takeMod.defaultQuery();
  res.json(data);
};
const getAllSections = async (req, res, next) => {
  try{
    let id = req.params.id;
    let [data, _] = await secMod.getAllSections(id);
    res.send(data);
  }catch(error){
    next(error);
  }
};

const getRegisteredSections = async (req, res, next) => {
  try{
    let id = req.params.id;
    let [data, _] = await takeMod.getTakesByStudentId(id);
    res.send(data);
  }catch(error){
    next(error);
  }
};

const deleteTake = async (req, res, next) => {
  try {
    let data = req.body;
    data["accountID"] = req.params.id;
    let [result, _] = await takeMod.deleteTake(data);
    res.send(result);
  } catch (error) {
    next(error);
  }
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
  
  
